import React from 'react'

let isLegal = false

export default props => (
    <div>
        <h1>{props.valor}</h1>
        <h2>{props.abcd}</h2>
        <p>{1 + 1}</p>
        <p>{isLegal ? 'Sim' : 'Não'}</p>
        <p>{Math.random()}</p>
    </div>
)


// export default function() {
//     return <h1>Primeiro Componente</h1>
// }


// function primeiro() {
//     return <h1>Primeiro Componente</h1>
// }

// export default primeiro