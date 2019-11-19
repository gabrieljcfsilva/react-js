import React from 'react';
import { HashRouter } from 'react-router-dom'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'

import Menu from './components/Menu'
import Routes from './routes'

export default props => (
    <HashRouter>
        <div className="container">
            <Menu />
            <Routes />
        </div>
    </HashRouter>
)