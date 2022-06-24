import { useState, useEffect } from 'react';
import FiltroGastos from './FiltroGastos';
import { Registro } from './Registro';

export const DatosPresupuesto = ({ gastos, presupuesto, filtro, setFiltro, filtroGastos }) => {

    const [gastoAhorro, setGastoAhorro] = useState(0);
    const [gastoComida, setGastoComida] = useState(0);
    const [gastoHogar, setGastoHogar] = useState(0);
    const [gastoSalud, setGastoSalud] = useState(0);
    const [gastoOcio, setGastoOcio] = useState(0);
    const [gastoSuscripcion, setGastoSuscripcion] = useState(0);
    const [gastoGastos, setGastoGastos] = useState(0);

    useEffect(() => {
        setGastoAhorro(registrosGastos('Ahorro'));
        setGastoComida(registrosGastos('Comida'));
        setGastoHogar(registrosGastos('Hogar'));
        setGastoSalud(registrosGastos('Salud'));
        setGastoOcio(registrosGastos('Ocio'));
        setGastoSuscripcion(registrosGastos('Suscripciones'));
        setGastoGastos(registrosGastos('Gastos'));
    }, [gastos]);

    const registrosGastos = (categoria) => {
        let gastoRegistros = 0;
        let gastoRegistrosTotal = 0;

        gastoRegistros = gastos.filter( gasto => gasto.categoria === categoria);
        gastoRegistros.map(gasto => {
            gastoRegistrosTotal = gastoRegistrosTotal + gasto.cantidad;
        })

        return (gastoRegistrosTotal/presupuesto)*100;
    }

    return (
        <div className="dashboard contenedor">
            <h1 className="dashboard__title">Resumen de gastos</h1>
            <hr />
            <div className="registros">
                <Registro
                    categoria="Ahorro"
                    porcentaje={gastoAhorro}
                />
                <Registro
                    categoria="Comida"
                    porcentaje={gastoComida}
                />
                <Registro
                    categoria="Hogar"
                    porcentaje={gastoHogar}
                />
                <Registro
                    categoria="Salud"
                    porcentaje={gastoSalud}
                />
                <Registro
                    categoria="Ocio"
                    porcentaje={gastoOcio}
                />
                <Registro
                    categoria="Suscripciones"
                    porcentaje={gastoSuscripcion}
                />
                <Registro
                    categoria="Gastos"
                    porcentaje={gastoGastos}
                />
            </div>
            <div className="filtros">
                <form >
                    <div className="gasto-titulo filtro">
                        <label>Filtrar Gasto</label>
                        <select
                            value={filtro}
                            onChange={e => setFiltro(e.target.value)}
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
                    </div>
                </form>
                <div className='filtro__table'>
                    {filtroGastos.map(filtroGasto =>
                        <FiltroGastos key={filtroGasto.id} filtroGasto={filtroGasto}/>
                    )}
                </div>
            </div>
        </div>
    )
}
