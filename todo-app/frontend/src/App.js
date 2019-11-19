import React from 'react';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'

import Todo from './components/Todo'
import About from './components/About'

export default props => (
    <div className="container">
        <Todo />
        <About />
    </div>
)