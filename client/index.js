import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from '../src/App'
 
const Page=<BrowserRouter>
    {App}
</BrowserRouter>

ReactDom.hydrate(Page, document.getElementById('root'))
 