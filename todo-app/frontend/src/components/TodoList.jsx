import React from 'react'
import IconButton from './IconButton'

export default props => {
    const renderRows = () => {
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}{todo.done}</td>
                <td>
                    <IconButton styleButton='success' icon='check' hide={todo.done}
                        onClick={() => props.handleMarkAsDone(todo)}
                    />
                    <IconButton styleButton='warning' icon='undo' hide={!todo.done}
                        onClick={() => props.handleMarkAsPending(todo)}
                    />
                    <IconButton styleButton='danger' icon='trash-o' hide={!todo.done}
                        onClick={() => props.handleRemove(todo)}
                    />
                </td>
            </tr>
        ))
    }

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}