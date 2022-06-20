import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions,
} from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';
// Iconos
import IconoAhorro from "../img/icono_ahorro.svg";
import IconoHogar from "../img/icono_casa.svg";
import IconoComida from "../img/icono_comida.svg";
import IconoGastos from "../img/icono_gastos.svg";
import IconoOcio from "../img/icono_ocio.svg";
import IconoSalud from "../img/icono_salud.svg";
import IconoSuscripciones from "../img/icono_suscripciones.svg";
// Otros
import {
    formatCantidad,
    formatearFecha,
} from "../helpers/formatCantidad";

const Gasto = ({ gasto, setGastosEditar }) => {

    const listaIconos = {
        Ahorro : IconoAhorro,
        Comida : IconoComida,
        Hogar : IconoHogar,
        Salud : IconoSalud,
        Ocio : IconoOcio,
        Suscripciones : IconoSuscripciones,
        Gastos : IconoGastos,
    }

    const {descripcion, cantidad, categoria, fecha} = gasto;

    const leadingActions = () => (
        <LeadingActions>
            <SwipeAction
                onClick={() => setGastosEditar(gasto)}
            >
                Editar
            </SwipeAction>
        </LeadingActions>
    );

    const trailingActions = () => (
        <TrailingActions>
            <SwipeAction
                onClick={() => console.log('Eliminar')}
            >
                Eliminar
            </SwipeAction>
        </TrailingActions>
    );


    return (
        <SwipeableList>
            <SwipeableListItem
                leadingActions={leadingActions()}
                trailingActions={trailingActions()}
            >
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
            </SwipeableListItem>
        </SwipeableList>
    )
}

export default Gasto