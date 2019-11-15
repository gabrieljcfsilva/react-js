import React, { useState, useEffect } from 'react'

export default props => {
    const [contador, setContador] = useState(100)
    const [parOuImpar, setParImpar] = useState('par')

    useEffect(() => {
        contador % 2 === 0 ? setParImpar('Par') : setParImpar('Impar')
    })

    return (
        <div>
            <div>{contador}</div>
            <p>{parOuImpar}</p>
            <button onClick={() => setContador(contador + 1)}>Inc</button>
            <button onClick={() => setContador(contador - 1)}>Dec</button>
        </div>
    )
}