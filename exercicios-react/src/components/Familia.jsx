import React from 'react'

import { filhosComProps } from '../utils'

export default props =>
    <div>
        <h1>Família: {props.sobrenome}</h1>

        {filhosComProps(props)}

        {/* para cada elemento sera feito um clone e cada clone recebe as propriedades vindas do elemento Pai */}
        {/* {React.Children.map(props.children, child => {
            return React.cloneElement(child, { ...props })
        })} */}

        {/* {React.cloneElement(props.children, { ...props })} */}

        {/* {React.cloneElement(props.children, props )} Não utilizar */}

        {/* {React.cloneElement(props.children,
            { sobrenome: props.sobrenome })} */}

        {/* {props.children} */}
    </div>