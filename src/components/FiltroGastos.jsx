import { formatCantidad, formatearFecha } from '../helpers/formatCantidad';

const FiltroGastos = ({filtroGasto}) => {

    const {descripcion, categoria, cantidad, fecha} = filtroGasto;
    return (
        <>
            <div className="filtro-card">
                <div className="filtro-card__categoria">
                    {categoria}
                </div>
                <hr />
                <div className="filtro-card__descripcion">
                    {descripcion}
                </div>
                <div className="filtro-card__cantidad">
                    {formatCantidad(cantidad)}
                </div>
                <div className="filtro-card__fecha">
                    {formatearFecha(fecha)}
                </div>
            </div>
        </>
    )
}

export default FiltroGastos