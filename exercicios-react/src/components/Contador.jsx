import React, { Component } from 'react'

export default class Contador extends Component {
    state = {
        contador: this.props.numero
    }

    maisUm = () => this.alterarNumero(1)

    menosUm = () => this.alterarNumero(-1)

    alterarNumero = diferenca => this.setState({ contador: this.state.contador + diferenca })

    renderContador = () => {
        return (
            <div>
                <div>Número: {this.state.contador}</div>
                <button onClick={this.maisUm}>Inc</button>
                <button onClick={this.menosUm}>Dec</button>
                <button onClick={() => this.alterarNumero(10)}>Inc 10</button>
                <button onClick={() => this.alterarNumero(-10)}>Dec 10</button>
            </div>
        )
    }

    render() {
        return (
            this.renderContador()
        )
    }
}


//Solução 01 this
// constructor(props) {
//     super(props)
//     this.maisUm = this.maisUm.bind(this)
// }

// solução 02 this
// <button onClick={() => this.maisUm()}>Inc</button>

// solução 03 this
// maisUm = () => {
//     // this.props.numero++
//     console.log(this)
// }