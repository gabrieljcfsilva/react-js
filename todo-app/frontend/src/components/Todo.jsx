import React, { Component } from 'react'

import PageHeader from './PageHeader'

export default class Todo extends Component {
    render() {
        return (
            <div>
                <PageHeader name="Tarefas" small="Cadastro" />
            </div>
        )
    }
}