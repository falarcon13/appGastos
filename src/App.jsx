import { useState, useEffect } from 'react';
// Mis componentes
import Dashboard from "./components/Dashboard";
import { DatosPresupuesto } from './components/DatosPresupuesto';
import Sidebar from "./components/Sidebar";
import Modal from './components/Modal';
import { generarId } from './helpers/formatCantidad';
// Otros
import 'animate.css';
import IconoNuevoGasto from './img/nuevo-gasto.svg';

function App() {

  const [presupuesto, setPresupuesto] = useState(
    Number(localStorage.getItem('presupuesto') ?? 0)
  );
  const [gastos, setGastos] = useState(
    localStorage.getItem('gastos') ? JSON.parse(localStorage.getItem('gastos')) : []
  );
  const [porcentaje, setPorcentaje] = useState(0);
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);
  const [isDashboardActive, setIsDashboardActive] = useState(true);
  const [isPresupuestoActive, setIsPresupuestoActive] = useState(false);
  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);
  const [gastoEditar, setGastoEditar] = useState({});
  const [filtro, setFiltro] = useState('');
  const [filtroGastos, setFiltroGastos] = useState([]);

  useEffect(() => {
    const presupuestoToLS =     Number(localStorage.getItem('presupuesto') ?? 0);

    if(presupuestoToLS > 0 ){
      setIsValidPresupuesto(true);
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('gastos', JSON.stringify(gastos) ?? {});
  }, [gastos])

  useEffect(() => {
    if(Object.keys(gastoEditar).length > 0){
      setModal(!modal);
      setTimeout(() => {
        setAnimarModal(true);
      }, 400);
    }
  }, [gastoEditar]);

  useEffect(() => {
    localStorage.setItem('presupuesto', presupuesto ?? 0);
  }, [presupuesto]);

  useEffect(() => {
    if(filtro) {
      const gastosFiltrados = gastos.filter(gasto => gasto.categoria === filtro);
      setFiltroGastos(gastosFiltrados);
    }
  }, [filtro, gastos])


  const handleNuevoGasto = () => {
    setGastoEditar({});
    setModal(!modal);
    setTimeout(() => {
      setAnimarModal(true);
    }, 400);
  }

  const guardarGasto = (gasto) => {
    if(gasto.id) {
      const gastosActualizados = gastos.map( gastoState => gastoState.id === gasto.id
          ? gasto
          : gastoState);

      setGastos(gastosActualizados);

    } else {
      gasto.id = generarId();
      gasto.fecha = Date.now();
      setGastos([...gastos, gasto]);
      setGastoEditar({});
    }
    setAnimarModal(false);

    setTimeout(() => {
      setModal(false);
    }, 500);
  }

  const eliminarGasto = (id) => {
    const gastosActualizados = gastos.filter( gastos => gastos.id !== id);
    setGastos(gastosActualizados);
  }

  return (
    <div className={modal ? 'fijar' : ''}>
      <Sidebar
        setIsDashboardActive={setIsDashboardActive}
        setIsPresupuestoActive={setIsPresupuestoActive}
      />
      <div className="content" >
        {isDashboardActive && <Dashboard
          presupuesto={presupuesto}
          gastos={gastos}
          setPresupuesto={setPresupuesto}
          isValidPresupuesto={isValidPresupuesto}
          setIsValidPresupuesto={setIsValidPresupuesto}
          setGastosEditar={setGastoEditar}
          eliminarGasto={eliminarGasto}
          porcentaje={porcentaje}
          setPorcentaje={setPorcentaje}
        />
        }
        {isPresupuestoActive && <DatosPresupuesto
          gastos={gastos}
          presupuesto={presupuesto}
          filtro={filtro}
          setFiltro={setFiltro}
          filtroGastos={filtroGastos}
        />}

        {isValidPresupuesto && (
          <div className="nuevo-gasto">
            <img
              src={IconoNuevoGasto}
              alt="icono nuevo gasto"
              onClick={handleNuevoGasto}
            />
          </div>
        )}

        {modal && <Modal
          setModal={setModal}
          animarModal={animarModal}
          setAnimarModal={setAnimarModal}
          guardarGasto={guardarGasto}
          gastoEditar={gastoEditar}
          setGastoEditar={setGastoEditar}
        />}
        </div>
    </div>
  )
}

export default App
