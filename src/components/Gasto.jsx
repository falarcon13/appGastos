import IconoAhorro from "../img/icono_ahorro.svg";
import IconoHogar from "../img/icono_casa.svg";
import IconoComida from "../img/icono_comida.svg";
import IconoGastos from "../img/icono_gastos.svg";
import IconoOcio from "../img/icono_ocio.svg";
import IconoSalud from "../img/icono_salud.svg";
import IconoSuscripciones from "../img/icono_suscripciones.svg";
import {
    formatCantidad,
    formatearFecha,
} from "../helpers/formatCantidad";


const Gasto = ({ gasto }) => {
    const listaIconos = {
        Ahorro : IconoAhorro,
        Comida : IconoComida,
        Hogar : IconoHogar,
        Salud : IconoSalud,
        Ocio : IconoOcio,
        Suscripciones : IconoSuscripciones,
        Gastos : IconoGastos,
    }

    const {descripcion, cantidad, categoria, id, fecha} = gasto
    return (
        <div className='gasto'>
            <div className="gasto-imagen">
                <img
                    className="gasto-contenido__imagen"
                    src={listaIconos[categoria]}
                />
            </div>
            <div className="gasto-contenido">
                <p className="gasto-contenido__categoria">
                    {categoria}
                </p>
                <hr />
                <div className="gasto-contenido__datos">
                    <p className='gasto-contenido__datos-descripcion'>
                        {descripcion}
                    </p>
                    <p className='gasto-contenido__datos-cantidad'>
                        {formatCantidad(cantidad)}
                    </p>
                </div>
                <p className='gasto-contenido__fecha'>
                    Fecha Registro: {''}
                    <span>{formatearFecha(fecha)}</span>
                </p>
            </div>
        </div>
    )
}

export default Gasto