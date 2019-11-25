import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3003/api'
})

const createTodo = data => api.post('/todos', data)
const refreshTodos = search => api.get(`/todos?sort=-createdAt${search}`)
const deleteTodo = data => api.delete(`/todos/${data._id}`)
const updateTodo = (id, data) => api.put(`/todos/${id}`, data)

const apis = {
    createTodo,
    refreshTodos,
    deleteTodo,
    updateTodo
}

export default apis