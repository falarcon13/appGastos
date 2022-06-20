// Iconos
import { VscInfo } from "react-icons/vsc";

const Mensaje = ({ children }) => {
    return (
        <>
            <div className='mensaje'>
                <span><VscInfo /></span>
                <p>{ children }</p>
            </div>
        </>
    )
}

export default Mensaje