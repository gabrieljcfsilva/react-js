import React from 'react'

import Grid from './Grid'
import IconButton from './IconButton'

export default props => (
    <div role="form" className="todoForm">
        <Grid cols="12 9 10">
            <input type="text" id="description" className="form-control"
                placeholder="Adicione uma tarefa"
                onChange={props.handleChange}
                value={props.description} />
        </Grid>

        <Grid cols="12 3 2">
            <IconButton styleButton="primary" icon="plus"
                onClick={props.handleAdd} />
            <IconButton styleButton="info" icon="search"
                onClick={props.handleSearch} />
            <IconButton styleButton="default" icon="close"
                onClick={props.handleClear} />
        </Grid>
    </div>
)