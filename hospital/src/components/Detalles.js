import React, { Component } from "react";
import Axios from "axios";
import Global from "../Global";

export default class Detalles extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    hospital: {},
    status: false
  };

  detallesHospi = () => {
    var request = "/webresources/hospitales/" + this.props.idHospital;
    //console.log(this.props.idHospital)
    Axios.get(Global.url + request).then(result => {
      console.log(result.data.idhospital);
      this.setState({
        hospital: result.data,
        status: true
      });
      //   return (
      //     <div>
      //       <p>Número: {result.data.idhospital}</p>
      //       {}
      //       <p>Nombre: {result.data.nombre}</p>
      //       <p>Dirección: {result.data.direccion}</p>
      //       <p>Teléfono: {result.data.telefono}</p>
      //       <p>Camas: {result.data.camas}</p>
      //     </div>
      //   );
    });
  };

  componentWillMount() {
    this.detallesHospi();
  }

  render() {
    return (
      <div>
        {console.log(this.state.hospital.idhospital)}
        <p>Número: {this.state.hospital.idhospital}</p>
        <p>Nombre: {this.state.hospital.nombre}</p>
        <p>Dirección: {this.state.hospital.direccion}</p>
        <p>Teléfono: {this.state.hospital.telefono}</p>
        <p>Camas: {this.state.hospital.camas}</p>

        <a
          className="btn btn-danger"
          href={"/eliminar/" + this.state.hospital.idhospital}
        >
          Eliminar
        </a>
      </div>
    );
  }
}
