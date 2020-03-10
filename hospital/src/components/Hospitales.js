import React, { Component } from "react";
import Axios from "axios";
import Global from "../Global";

export default class Hospitales extends Component {
  state = {
    hospitales: [],
    status: false
  };

  getHospitales = () => {
    var request = "/webresources/hospitales";
    Axios.get(Global.url + request).then(result => {
      this.setState({
        hospitales: result.data,
        status: true
      });
    });
  };

  componentWillMount() {
    this.getHospitales();
  }

  render() {
    return (
      <div>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Id Hospital</th>
              <th scope="col">Nombre</th>
              <th scope="col">Dirección</th>
              <th scope="col">Teléfono</th>
              <th scope="col">Camas</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {this.state.hospitales.map((hospi, i) => {
              return (
                <tr key={i}>
                  <th scope="row">{hospi.idhospital}</th>
                  <td>{hospi.nombre}</td>
                  <td>{hospi.direccion}</td>
                  <td>{hospi.telefono}</td>
                  <td>{hospi.camas}</td>
                  <td>
                    <a href={"/detalles/" + hospi.idhospital}>Detalles</a>
                  </td>
                  <td>
                    {/* QUIERO MANDAR EL OBJETO ENTERO */}
                    <a href={"/modificar/" + hospi}>Modificar</a>
                  </td>
                  <td>
                    <a href={"/eliminar/" + hospi.idhospital}>Eliminar</a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
