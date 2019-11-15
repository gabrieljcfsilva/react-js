import ReactDom from 'react-dom'
import React from 'react'

import PrimeiroComponente from './components/PrimeiroComponente'

const element = document.getElementById('root')
ReactDom.render(
    <>
        <PrimeiroComponente valor="Bom dia!" abcd={123**2}/>
    </>
    , element)