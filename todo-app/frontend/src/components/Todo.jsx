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
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this)
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleClear = this.handleClear.bind(this)
        this.refresh()
    }

    refresh(description = '') {
        const search = description ? `&description__regex=/${description}/` : ''
        Api.refreshTodos(search)
            .then(res => this.setState({ ...this.state, description, list: res.data }))
    }

    handleSearch() {
        this.refresh(this.state.description)
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
            .then(resp => this.refresh(this.state.description))
    }

    handleMarkAsDone(todo) {
        Api.updateTodo(todo._id, { ...todo, done: true })
            .then(resp => this.refresh(this.state.description))
    }

    handleMarkAsPending(todo) {
        Api.updateTodo(todo._id, { ...todo, done: false })
            .then(resp => this.refresh(this.state.description))
    }

    handleClear() {
        this.refresh()
    }

    render() {
        return (
            <div>
                <PageHeader name="Tarefas" small="Cadastro" />
                <TodoForm
                    description={this.state.description}
                    handleChange={this.handleChange}
                    handleAdd={this.handleAdd}
                    handleSearch={this.handleSearch}
                    handleClear={this.handleClear}
                />
                <TodoList list={this.state.list}
                    handleMarkAsDone={this.handleMarkAsDone}
                    handleMarkAsPending={this.handleMarkAsPending}
                    handleRemove={this.handleRemove}
                />
            </div>
        )
    }
}