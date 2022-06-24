import React from 'react'
import Gasto from './Gasto'

const ListadoGastos = ({ gastos, setGastosEditar, eliminarGasto }) => {
    return (
        <div>
            <h2 className='gasto-titulo'>
                {gastos.length
                    ? 'Listado general de Gastos:'
                    : 'Sin registro de gastos...'}
            </h2>

            {gastos.map( gasto =>(
                <Gasto
                    key={gasto.id}
                    gasto={gasto}
                    setGastosEditar={setGastosEditar}
                    eliminarGasto={eliminarGasto}
                />
            ))}
        </div>
    )
}

export default ListadoGastos