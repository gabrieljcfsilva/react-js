import React from 'react'

const aprovados = ['Rodrigo', 'Ana', 'Pedro', 'Julia']

export default props => {
    
    const gerarItems = items => {
        return items.map(item => <li>{item}</li>)
    }

    return (
        <ul>
            {gerarItems(aprovados)}
        </ul>
    )
}