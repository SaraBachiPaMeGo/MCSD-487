import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Hospitales from "./Hospitales";
import Detalles from "./Detalles";
import Eliminar from "./Eliminar";
import Modificar from "./Modificar";

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/hospitales" component={Hospitales}></Route>
          <Route
            exact
            path="/detalles/:idhospi"
            render={props => {
              var idHospi = props.match.params.idhospi;
              return <Detalles idHospital={idHospi}></Detalles>;
            }}
          ></Route>
          <Route
            exact
            path="/eliminar/:idhospi"
            render={props => {
              var idHospi = props.match.params.idhospi;
              return <Eliminar idHospital={idHospi}></Eliminar>;
            }}
          ></Route>
        </Switch>
        <Route
          exact
          path="/modificar/:hospi"
          render={props => {
            var Hospital = props.match.params.hospi;
            return <Modificar Hospital={Hospital}></Modificar>;
          }}
        ></Route>
      </BrowserRouter>
    );
  }
}
