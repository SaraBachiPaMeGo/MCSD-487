import React, { Component } from "react";
import Axios from "axios";
import Global from "./../Global";
import { Redirect } from "react-router-dom";

export default class ModificarDepartamento extends Component {
  cajaNumReEF = React.createRef();
  cajaNomReEF = React.createRef();
  cajaLocReEF = React.createRef();

  constructor(props) {
    super(props);
  }

  state = {
    //departamento: {},
    status: false
  };

  modificarDept = e => {
    e.preventDefault();
    var num = this.cajaNumReEF.current.value;
    var nom = this.cajaNomReEF.current.value;
    var loc = this.cajaLocReEF.current.value;

    var request = "/webresources/departamentos/put";

    var departamento = {
      nombre: nom,
      numero: num,
      localidad: loc
    };

    Axios.put(Global.CRUDDepartamentos + request,departamento).then(result => {
      this.setState({
        //departamento: departamento,
        status: true
      });
    });

    console.log(num + nom + loc);
  };
  render() {
    if (this.state.status == true) {
     return <Redirect to="/departamentos"></Redirect>;
    }
    return (
      <div>
        <p>{this.props.numDept}</p>
        <p>{this.props.nomDept}</p>
        <p>{this.props.locDept}</p>
        <form>
          <div className="form-group">
            <label for="exampleInputEmail1">Número:</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              ref={this.cajaNumReEF}
              value={this.props.numDept}
              readOnly
            />
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Nombre:</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              ref={this.cajaNomReEF}
              defaultValue={this.props.nomDept}
            />
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Localidad:</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              ref={this.cajaLocReEF}
              defaultValue={this.props.locDept}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={this.modificarDept}
          >
            Modificar
          </button>
        </form>
      </div>
    );
  }
}
