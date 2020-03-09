import React, { Component } from "react";
import Axios from "axios";
import Global from "./../Global";
import {Redirect} from "react-router-dom"

export default class InsertarDepartamento extends Component {
  cajaNumReEF = React.createRef();
  cajaNomReEF = React.createRef();
  cajaLocReEF = React.createRef();

  state = {
    status: false
  };

  insertarDept = e => {
    e.preventDefault();
    var num = this.cajaNumReEF.current.value;
    var nom = this.cajaNomReEF.current.value;
    var loc = this.cajaLocReEF.current.value;

    //Necesitamos un JSON, JSX trabaja con JSON
    var departamento = {
      numero: num,
      nombre: nom,
      localidad: loc
    };

    var request = "/webresources/departamentos/post";
    Axios.post(Global.CRUDDepartamentos + request, departamento).then(
      result => {
        this.setState({
          status: true
        });
      }
    );
    console.log(num + nom + loc);
  };

  render() {
    if (this.state.status == true) {
      return <Redirect to="/departamentos"></Redirect>;
    }
    return (
      <div>
        <form>
          <div className="form-group">
            <label for="exampleInputEmail1">Número:</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              ref={this.cajaNumReEF}
            />
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Nombre:</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              ref={this.cajaNomReEF}
            />
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Localidad:</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              ref={this.cajaLocReEF}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={this.insertarDept}
          >
            Insertar
          </button>
        </form>
        <h1>{this.state.status.toString()}</h1>
      </div>
    );
  }
}
