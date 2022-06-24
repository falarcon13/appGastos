
// Icons
import { VscSymbolNumeric } from "react-icons/vsc";
import { VscProject } from "react-icons/vsc";
import { VscChecklist } from "react-icons/vsc";

const Sidebar = ({ setIsDashboardActive, setIsPresupuestoActive} ) => {

    const handleActiveDashboard = () => {
        setIsDashboardActive(true);
        setIsPresupuestoActive(false);
    }

    const handleActivePresupuesto = () => {
        setIsDashboardActive(false);
        setIsPresupuestoActive(true);
    }

    return (
        <div className="sidebar">
            <div className="sidebar__title">Gastos App</div>
            <ul className="sidebar__menu">
                <li
                    onClick={handleActiveDashboard}
                    className="sidebar__menu-item"
                >
                    <span><VscSymbolNumeric/></span>
                    Dashboard
                </li>

                <li
                    onClick={handleActivePresupuesto}
                    className="sidebar__menu-item"
                >
                    <span><VscProject/></span>
                    Resumen
                </li>
            </ul>
        </div>
    )
}

export default Sidebar