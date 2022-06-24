import { CircularProgressbar, buildStyles, CircularProgressbarWithChildren   } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

// Iconos
import IconoAhorro from "../img/icono_ahorro.svg";
import IconoHogar from "../img/icono_casa.svg";
import IconoComida from "../img/icono_comida.svg";
import IconoGastos from "../img/icono_gastos.svg";
import IconoOcio from "../img/icono_ocio.svg";
import IconoSalud from "../img/icono_salud.svg";
import IconoSuscripciones from "../img/icono_suscripciones.svg";

export const Registro = ({ categoria, porcentaje }) => {

    const listaIconos = {
        Ahorro : IconoAhorro,
        Comida : IconoComida,
        Hogar : IconoHogar,
        Salud : IconoSalud,
        Ocio : IconoOcio,
        Suscripciones : IconoSuscripciones,
        Gastos : IconoGastos,
    }
    return (
        <div className="registro">
            <div className="registro__grafica tooltip">
                <span className="tooltiptext"> { categoria +":  " + porcentaje.toFixed(2) + "%"}</span>
                <CircularProgressbarWithChildren
                    value={porcentaje}
                    styles={buildStyles({
                        pathColor: '#00b4cc',
                        textColor: '#FFFFFF'
                    })}
                >
                    <img style={{ width: 80,}} src={listaIconos[categoria]} alt="imagen registro" />
                </CircularProgressbarWithChildren>
            </div>
        </div>
)}
