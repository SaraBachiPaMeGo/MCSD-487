import React, { Component } from "react";
import Axios from "axios";
import Global from "../Global";
import { Redirect } from "react-router-dom";

export default class Modificar extends Component {
  numREF = React.createRef();
  nomREF = React.createRef();
  direREF = React.createRef();
  tlfREF = React.createRef();
  camasREF = React.createRef();

  constructor(props) {
    super(props);
  }

  state = {
    // departamento: { num: numREF, nom: "", dire: "", tlf: "", camas: "" },
    status: false
  };

  modificarHospi = e => {
    e.preventDefault();
    var numREF = this.numREF.current.value;
    var nomREF = this.nomREF.current.value;
    var direREF = this.direREF.current.value;
    var tlfREF = this.tlfREF.current.value;
    var camasREF = this.camasREF.current.value;
    var departamento = {
      num: numREF,
      nom: nomREF,
      dire: direREF,
      tlf: tlfREF,
      camas: camasREF
    };

    Axios.put(Global.url + "/webresources/hospitales/put", departamento).then(
      result => {
        this.setState({
          status: true
        });
      }
    );
  };

  render() {
    if (this.state.status == true) {
      return <Redirect to="/hospitales"></Redirect>;
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
              ref={this.numREF}
              value={this.props.idhospital}
              readOnly
            />
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Nombre:</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              ref={this.nomREF}
              defaultValue={this.props.nombre}
            />
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Dirección:</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              ref={this.direREF}
              defaultValue={this.props.direccion}
            />
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Teléfono:</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              ref={this.tlfREF}
              defaultValue={this.props.telefono}
            />
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Camas:</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              ref={this.camasREF}
              defaultValue={this.props.camas}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={this.modificarHospi}
          >
            Modificar
          </button>
        </form>
      </div>
    );
  }
}
