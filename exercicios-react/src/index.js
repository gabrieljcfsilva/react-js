import ReactDom from 'react-dom'
import React from 'react'

// import PrimeiroComponente from './components/PrimeiroComponente'
import CompA, { CompB as B } from './components/DoisComponentes'
// import MultElementos from './components/MultElementos'

const element = document.getElementById('root')

ReactDom.render(
    <>
        {/* <PrimeiroComponente valor="Bom dia!" abcd={123**2}/> */}
        {/* <MultElementos /> */}
        <CompA valor="Componente A" />
        <B valor="Componente B" />
    </>
    , element)