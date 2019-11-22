import React, { Component } from 'react'

import Api from '../services/Api'

import PageHeader from './PageHeader'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

export default class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = { description: '', list: [] }
        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.refresh()
    }

    refresh() {
        Api.refreshTodos()
            .then(res => this.setState({ ...this.state, description: '', list: res.data }))
    }

    handleAdd() {
        const description = this.state.description
        Api.createTodo({ description })
            .then(resp => this.refresh())
    }

    handleChange(e) {
        this.setState({ ...this.state, description: e.target.value })
    }

    handleRemove(todo) {
        Api.deleteTodo(todo)
            .then(resp => this.refresh())
    }

    render() {
        return (
            <div>
                <PageHeader name="Tarefas" small="Cadastro" />
                <TodoForm
                    description={this.state.description}
                    handleChange={this.handleChange}
                    handleAdd={this.handleAdd}
                />
                <TodoList list={this.state.list}
                    handleRemove={this.handleRemove} />
            </div>
        )
    }
}