import React, { Component } from "react";
import Axios from "axios";
import Global from "./../Global";

export default class MenuDepartamentos extends Component {
  state = {
    departamentos: [],
    status: false
  };

  cargarDepartamentos = () => {
    var url = Global.urlDepartamentos + "/api/departamentos";
    var listaDepartamentos = this.state.departamentos;
    Axios.get(url).then(result => {
      listaDepartamentos = result.data;
      this.setState({
        departamentos: listaDepartamentos,
        status: true
      });
    });
  };

  componentWillMount() {
    {
      this.cargarDepartamentos();
    }
  }

  render() {
    return (
      <div>
        <h1>Menú departamentos</h1>
        <ul style={{ float: "left" }}>
          {this.state.status == true && (
            <React.Fragment>
              {this.state.departamentos.map((departamento, i) => {
                return (
                  <li key={i}>
                    <a href={"/empleadosdepartamento/" + departamento.Numero}>
                      {departamento.Nombre}
                    </a>
                  </li>
                );
              })}
              <li>
                <a href="/buscarcoches">Buscar coches</a>
              </li>
            </React.Fragment>
          )}
        </ul>
      </div>
    );
  }
}
