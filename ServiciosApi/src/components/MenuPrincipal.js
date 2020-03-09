import React, { Component } from 'react'

export default class MenuPrincipal extends Component {
    render() {
        return (
            <nav className="navbar navbar-light bg-light justify-content-between">
                <a className="navbar-brand">Navbar</a>
                <a className="nav-item nav-link" href="/departamentos">Home</a>
                <a className="nav-item nav-link" href="/insertardept">Insertar</a>
                <a className="nav-item nav-link" href="/detallesdept">Detalles</a>
                <a className="nav-item nav-link" href="/eliminar">Eliminar</a>
            </nav>
        )
    }
}


