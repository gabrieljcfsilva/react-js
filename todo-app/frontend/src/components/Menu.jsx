import React from 'react'
import { NavLink } from 'react-router-dom';

export default props => (
    <nav className='navbar navbar-inverse bg-inverse'>
        <div className='container'>
            <div className='navbar-header'>
                <NavLink className='navbar-brand' to='/todos'>
                    <i className='fa fa-calendar-check-o'></i> TodoApp
                </NavLink>
            </div>

            <div id='navbar' className='navbar-collapse collapse'>
                <ul className="nav navbar-nav">
                    <li><NavLink to='/todos'>Tarefas</NavLink></li>
                    <li><NavLink to='/about'>Sobre</NavLink></li>
                </ul>
            </div>
        </div>
    </nav>
)