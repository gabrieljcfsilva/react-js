import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Todo from './components/Todo'
import About from './components/About'

export default props => (
    <Switch>
        <Route path='/' exact component={Todo} />
        <Route path='/todos' component={Todo} />
        <Route path='/about' component={About} />
        <Redirect from='*' to='/todos' />
    </Switch>
)