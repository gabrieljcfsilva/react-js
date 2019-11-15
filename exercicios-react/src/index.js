import ReactDom from 'react-dom'
import React from 'react'

function getList() {
    return (
        <ul>
            <li>1) Bruno</li>
            <li>1) Maria</li>
            <li>1) Jose</li>
        </ul>
    )
}

const element = document.getElementById('root')
ReactDom.render(getList(), element)