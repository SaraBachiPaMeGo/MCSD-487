import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Empleados from "./Empleados";
import BuscarCoches from "./BuscarCoches";
import BuscarDepartamentos from "./BuscarDepartamentos";
import Departamentos from "./Departamentos";
import InsertarDepartamento from "./InsertarDepartamento";
import DetallesDepartamento from "./DetallesDepartamento";
import EliminarDepartamento from "./EliminarDepartamento";
import ModificarDepartamento from "./ModificarDepartamento";

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
          <Route exact path="/departamentos" component={Departamentos}></Route>
          <Route
            exact
            path="/insertardept"
            component={InsertarDepartamento}
          ></Route>
          <Route
            exact
            path="/detallesdept/:deptno"
            render={props => {
              var deptno = props.match.params.deptno;
              return (
                <DetallesDepartamento
                  iddepartamento={deptno}
                ></DetallesDepartamento>
              );
            }}
          ></Route>
          <Route
            exact
            path="/eliminar/:deptno"
            render={props => {
              var deptno = props.match.params.deptno;
              return (
                <EliminarDepartamento
                  iddepartamento={deptno}
                ></EliminarDepartamento>
              );
            }}
          ></Route>
          <Route
            exact
            path="/update/:num/:nom/:loc"
            render={props => {
              var num = props.match.params.num;
              var nom = props.match.params.nom;
              var loc = props.match.params.loc;

              return (
                <ModificarDepartamento
                  numDept={num}
                  nomDept={nom}
                  locDept={loc}
                ></ModificarDepartamento>
              );
            }}
          ></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}
