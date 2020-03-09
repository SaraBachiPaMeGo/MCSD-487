import React, { Component } from "react";
import Axios from "axios";
import Global from "./../Global";

export default class Departamentos extends Component {
  state = {
    departamentos: [],
    status: false
  };

  leerDept = () => {
    var request = "/webresources/departamentos";
    Axios.get(Global.CRUDDepartamentos + request).then(result => {
      this.setState({
        departamentos: result.data,
        status: true
      });
    });
  };

  componentWillMount() {
    this.leerDept();
  }

  render() {
    return (
      <div>
        {this.state.status == true && (
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Número</th>
                <th scope="col">Nombre</th>
                <th scope="col">Localización</th>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {this.state.departamentos.map((dept, i) => {
                return (
                  <tr key={i}>
                    <th scope="row">{dept.numero}</th>
                    <td>{dept.nombre}</td>
                    <td>{dept.localidad}</td>
                    <td>
                      <a href={"/detallesdept/" + dept.numero}>Detalles</a>
                    </td>
                    <td>
                      <a
                        href={
                          "/update/" +
                          dept.numero +
                          "/" +
                          dept.nombre +
                          "/" +
                          dept.localidad
                        }
                      >
                        Modificar
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    );
  }
}
