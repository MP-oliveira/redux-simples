import './Intervalo.css'
import React from 'react'
import Card from './Card'

const Intervalo = (porps) => {
    return (
        <Card title="Intervalo de Números" red>
            <div className="Intervalo">
                <span>
                    <strong>Mínimo:</strong>
                    <input type="number"  value={0} readOnly={true}/>
                </span>
                <span>
                    <strong>Máximo:</strong>
                    <input type="number"  value={10} readOnly={true}/>
                </span>
            </div>
        </Card>
    )
}

export default Intervalo
