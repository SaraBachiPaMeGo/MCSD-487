import React, { Component } from "react";
import Axios from "axios";
import Global from "./../Global";

export default class DetallesDepartamento extends Component {
  constructor(props) {
    super(props);
    this.verDept(props.iddepartamento)
    console.log(props.iddepartamento);
  }

  state = {
    status: true,
    departamento: {}
  };

  verDept = deptno => {
    var request = "/webresources/departamentos/" + deptno;
    Axios.get(Global.CRUDDepartamentos + request).then(result => {
      //this.setState({status})
      this.setState({
        status: true,
        departamento: result.data
      });
      console.log(result);
      // return(
      //     <div>
      //         <p>{result.data.nombre}</p>
      //         <p>{result.data.numero}</p>
      //         <p>{result.data.localidad}</p>
      //     </div>
      // )
    });
  };

//   componentWillMount() {
//     this.verDept();
//   }

  render() {
    return (
      <div>
        <h1>Detalles</h1>
        {this.state.departamento && (
          <div>
            <p> Nombre: {this.state.departamento.nombre}</p>
            <p>Número: {this.state.departamento.numero}</p>
            <p>Localidad: {this.state.departamento.localidad}</p>
            <a href={"/eliminar/"+this.state.departamento.numero} className="btn btn-danger">Eliminar</a>
          </div>
        )}
      </div>
    );
  }
}
