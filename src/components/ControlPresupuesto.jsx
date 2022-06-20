import { useEffect, useState } from 'react';
import ListadoGastos from './ListadoGastos';
// Otros
import IconoGRafica from '../img/icono_grafica.svg';
import { formatCantidad } from '../helpers/formatCantidad';

const ControlPresupuesto = ({presupuesto, gastos}) => {

    const [disponible, setDisponible] = useState(0);
    const [gastado, setGastado] = useState(0);

    useEffect(() => {
        const totalGastado = gastos.reduce( (total, gasto) => gasto.cantidad + total, 0 );
        const totalDisponible = presupuesto - totalGastado;

        setGastado(totalGastado);
        setDisponible(totalDisponible);

    }, [gastos]);

    return (
        <>
            <div className='control'>
                <div className="control__presupuesto animate__animated animate__fadeIn">
                    <div className="control__presupuesto-body">
                        <p>Presupuesto: <br /> <span className='control-presupuesto'> {formatCantidad(presupuesto)}</span></p>
                        <p>Disponible: <br /> <span className='control-disponible'>+ {formatCantidad(disponible)}</span></p>
                        <p>Gastado: <br /> <span className='control-gastado'> - {formatCantidad(gastado)}</span></p>
                    </div>
                    <div className="control__presupuesto-img">
                        <img src={ IconoGRafica} alt="imagen grafica" />
                    </div>

                </div>
                <div className="control__grafica">
                    <p>grafica</p>
                </div>
            </div>
            <main className="gastos">
                <ListadoGastos gastos={gastos}/>
            </main>
        </>
    )
}

export default ControlPresupuesto