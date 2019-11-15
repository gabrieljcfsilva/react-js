import ReactDom from 'react-dom'
import React from 'react'

// import PrimeiroComponente from './components/PrimeiroComponente'
// import CompA, { CompB as B } from './components/DoisComponentes'
// import MultElementos from './components/MultElementos'
// import FamiliaSilva from './components/FamiliaSilva'
// import Familia from './components/Familia'
// import Membro from './components/Membro'
// import ComponenteComFuncao from './components/ComponenteComFuncao'
// import Pai from './components/Pai'
// import ComponenteClasse from './components/ComponenteClasse'
// import Contador from './components/Contador'
import Hook from './components/Hooks'

const element = document.getElementById('root')

ReactDom.render(
    <>
        <Hook />
        {/* <Contador numero={100} /> */}
        {/* <ComponenteClasse valor="Sou um componente de Classe!" /> */}
        {/* <Pai /> */}
        {/* <ComponenteComFuncao /> */}
        {/* <Familia sobrenome="Pereira">
            <Membro nome="Andre" />
            <Membro nome="Carla" />
            <Membro nome="Joana" />
        </Familia> */}
        {/* <PrimeiroComponente valor="Bom dia!" abcd={123**2}/> */}
        {/* <MultElementos /> */}
        {/* <CompA valor="Componente A" />
        <B valor="Componente B" /> */}
        {/* <FamiliaSilva /> */}
    </>
    , element)