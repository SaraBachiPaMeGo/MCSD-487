import React, { Component } from "react";

export default class MenuPrincipal extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            Navbar
          </a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">              
              <li className="nav-item">
                <a className="nav-link" href="/hospitales">
                  Hospitales
                </a>
              </li>              
              <li className="nav-item">
                <a className="nav-link disabled" href="/crearhospital">
                  Crear Hospital
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
