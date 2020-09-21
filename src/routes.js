import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Cadastro from './pages/Cadastro'
import Editar from './pages/Editar'

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Landing}/>
            <Route path="/cadastro" component={Cadastro}/>
            <Route path="/editar" component={Editar}/>
        </BrowserRouter>
    )
}

export default Routes