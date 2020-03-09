import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Empleados from "./Empleados";
import BuscarCoches from "./BuscarCoches";
import BuscarDepartamentos from "./BuscarDepartamentos";

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/buscardepartamentos"
            component={BuscarDepartamentos}
          ></Route>
          <Route exact path="/buscarcoches" component={BuscarCoches}></Route>
          <Route
            exact
            path="/empleadosdepartamento/:deptno"
            render={props => {
              var deptno = props.match.params.deptno;
              return <Empleados iddepartamento={deptno}></Empleados>;
            }}
          ></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}
