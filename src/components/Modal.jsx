import { useState } from 'react';
import Mensaje from './Mensaje';
import IconoCerrar from '../img/cerrar.svg';
import { useEffect } from 'react';

const Modal = ({ 
        setModal,
        animarModal,
        setAnimarModal,
        guardarGasto,
        gastoEditar,
        setGastoEditar,
    }) => {

    const [mensaje, setMensaje] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [categoria, setCategoria] = useState('');
    const [fecha, setFecha] = useState('');
    const [id, setId] = useState()

    useEffect(() => {
        if(Object.keys(gastoEditar).length > 0){
            setDescripcion(gastoEditar.descripcion);
            setCantidad(gastoEditar.cantidad);
            setCategoria(gastoEditar.categoria);
            setId(gastoEditar.id);
            setFecha(gastoEditar.fecha);
        }
    }, []);
    
    const ocultarModal = () => {
        setAnimarModal(false);
        setGastoEditar({});
        setTimeout(() => {
            setModal(false);
            setGastoEditar({});
        }, 400);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if([descripcion, cantidad, categoria].includes('')){
            setMensaje('Todos los campos son obligatorios');

            setTimeout(() => {
                setMensaje('');
            }, 2000);
            return;
        }

        guardarGasto({
            descripcion,
            cantidad,
            categoria,
            id,
            fecha,
        });

        ocultarModal();
    }

    return (
        <div className='modal'>
            <div className="modal__cerrar-modal">
                <img
                    src={IconoCerrar}
                    alt="cerrar modal"
                    onClick={ocultarModal}
                />
            </div>

            <form 
                onSubmit={handleSubmit}
                className={`contenedor modal-formulario ${animarModal ? "modal-animar" : "modal-cerrar"}`}>
                
                <legend>{gastoEditar.descripcion ? "Editar Gasto" : "Nuevo Gasto"}</legend>
                {mensaje && <Mensaje >{mensaje}</Mensaje>}

                <div className="modal-formulario__campo">
                    <label
                        htmlFor='descripcion'
                    >Descripción</label>
                    <input
                        id='descripcion'
                        type="text"
                        placeholder="Detalle el nuevo gasto"
                        value={descripcion}
                        onChange={e => setDescripcion(e.target.value)}
                    />
                </div>

                <div className="modal-formulario__campo">
                    <label
                        htmlFor='cantidad'
                    >Cantidad</label>
                    <input
                        id='cantidad'
                        type="number"
                        placeholder="Ingresa la cantidad gastada"
                        value={cantidad}
                        onChange={e => setCantidad(Number(e.target.value))}
                        />
                </div>

                <div className="modal-formulario__campo">
                    <label
                        htmlFor='categoria'
                    >Categoria</label>

                    <select
                        id="categoria"
                        value={categoria}
                        onChange={e => setCategoria(e.target.value)}
                    >
                        <option value="">-- Seleccione --</option>
                        <option value="Ahorro">Ahorros</option>
                        <option value="Comida">Comida</option>
                        <option value="Hogar">Hogar</option>
                        <option value="Salud">Salud</option>
                        <option value="Ocio">Ocio</option>
                        <option value="Suscripciones">Suscripciones</option>
                        <option value="Gastos">Gastos Varios</option>
                    </select>

                    <input
                    className='btn-gray'
                        type="submit"
                        value={gastoEditar.descripcion ? "Guardar Cambio" : "Agregar"}
                    />
                </div>
            </form>
        </div>
    )
}

export default Modal