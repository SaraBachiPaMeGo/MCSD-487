import React, { Component } from "react";
import Axios from "axios";
import Global from "../Global";
import { Redirect } from "react-router-dom";

export default class Eliminar extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    status: false
  };

  eliminarHospi = () => {
    var request = "/webresources/hospitales/delete/" + this.props.idHospital;
    console.log(Global.url + request);
    Axios.delete(Global.url + request).then(
      this.setState({
        status: true
      })
    );
  };
  componentWillMount() {
    this.eliminarHospi();
  }

  render() {
    if (this.state.status == true) {
      return <Redirect to="/hospitales"></Redirect>;
    }
  }
}
