import ReactDom from 'react-dom'
import React from 'react'

import PrimeiroComponente from './components/PrimeiroComponente'

const element = document.getElementById('root')
ReactDom.render(
    <>
        <PrimeiroComponente />
    </>
    , element)