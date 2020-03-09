import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Customers from "./components/Customers";
import Buscar from "./components/BuscarCustomer";
import Coches from "./components/BuscarCoches";
import Depart from "./components/BuscarDepartamentos";
import MenuDepar from "./components/MenuDepartamentos";
import Empleados from "./components/Empleados";
import Router from "./components/Router";
import BuscarDept from "./components/BuscarDepartamentos";
//Aplicamosbootstrap, jquery y popper
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import MenuPrincipal from "./components/MenuPrincipal"
import Departamentos from "./components/Departamentos";

function App() {
  return (
    <div className="App">      
      <MenuPrincipal></MenuPrincipal>
      {/* <Departamentos></Departamentos> */}
      {/* <MenuDepar></MenuDepar> */}
      <Router></Router>
      {/* <Empleados iddepartamento="10"></Empleados> */}
      {/* <BuscarDept></BuscarDept> */}
      {/* <Depart></Depart> */}
      {/* <Coches></Coches> */}
      {/* <Buscar></Buscar> */}
      {/* <Customers></Customers> */}
    </div>
  );
}

export default App;
