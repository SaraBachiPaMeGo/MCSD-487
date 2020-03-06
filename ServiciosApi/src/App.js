import React from 'react';
import logo from './logo.svg';
import './App.css';
import Customers from "./components/Customers"
import Buscar from "./components/BuscarCustomer"
import Coches from "./components/BuscarCoches"
import Depart from "./components/BuscarDepartamentos"

function App() {
  return (
    <div className="App">
      <Depart></Depart>
      {/* <Coches></Coches> */}
      {/* <Buscar></Buscar> */}
      {/* <Customers></Customers> */}
    </div>
  );
}

export default App;
