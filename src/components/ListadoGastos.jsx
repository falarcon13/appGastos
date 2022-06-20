import React from 'react'
import Gasto from './Gasto'

const ListadoGastos = ({ gastos, setGastosEditar }) => {
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
                />
            ))}
        </div>
    )
}

export default ListadoGastos