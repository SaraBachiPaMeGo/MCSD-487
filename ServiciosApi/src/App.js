import React from 'react';
import logo from './logo.svg';
import './App.css';
import Customers from "./components/Customers"
import Buscar from "./components/BuscarCustomer"

function App() {
  return (
    <div className="App">
      <Buscar></Buscar>
      {/* <Customers></Customers> */}
    </div>
  );
}

export default App;
