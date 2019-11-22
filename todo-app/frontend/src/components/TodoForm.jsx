import React from 'react'

import Grid from './Grid'
import IconButton from './IconButton'

export default props => (
    <div role="form" className="todoForm">
        <Grid cols="12 9 10 11">
            <input type="text" id="description" className="form-control"
                placeholder="Adicione uma tarefa"
                onChange={props.handleChange}
                value={props.description} />
        </Grid>

        <Grid cols="12 3 2 1">
            <IconButton styleButton="primary" icon="plus" onClick={props.handleAdd} />
        </Grid>
    </div>
)