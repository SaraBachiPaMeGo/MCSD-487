import React, { Component } from "react";
import Axios from "axios";
import Global from "./../Global";
import { Redirect } from "react-router-dom";

export default class EliminarDepartamento extends Component {
  cajaNum = React.createRef();

  state = {
    status: false
  };

  //No utilizamos el constructor porque no queremos hacer nada con props
  //sino sólo utilizarlo, --> en esa acción

  eliminarDept = e => {
    e.preventDefault();
    var num = this.cajaNum.current.value;
    var request =
      "/webresources/departamentos/delete/" + this.props.iddepartamento;
    Axios.delete(Global.CRUDDepartamentos + request).then(
      this.setState({
        status: true
      })
    );
  };

  render() {
    if (this.state.status == true) {
      return <Redirect to="/departamentos"></Redirect>;
    }
    return (
      <div>
        <h2>¿Desea eliminar el departamento {this.props.iddepartamento}?</h2>
        <h1>{this.state.status.toString()}</h1>
        <form>
          <input
            ref={this.cajaNum}
            name="cajaNum"
            type="text"
            value={this.props.iddepartamento}
          />
          <button className="btn btn-danger" onClick={this.eliminarDept}>
            Eliminar
          </button>
        </form>
      </div>
    );
  }
}
