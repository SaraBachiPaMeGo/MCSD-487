import React from 'react';
import logo from './logo.svg';
import './App.css';
import Customers from "./components/Customers"
import Buscar from "./components/BuscarCustomer"
import Coches from "./components/BuscarCoches"
import Depart from "./components/BuscarDepartamentos"
import MenuDepar from "./components/MenuDepartamentos"
import Empleados from "./components/Empleados"


function App() {
  return (
    <div className="App">
      <MenuDepar></MenuDepar>
      <Empleados iddepartamento="10"></Empleados>
      {/* <Depart></Depart> */}
      {/* <Coches></Coches> */}
      {/* <Buscar></Buscar> */}
      {/* <Customers></Customers> */}
    </div>
  );
}

export default App;
