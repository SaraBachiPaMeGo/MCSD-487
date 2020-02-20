import React from 'react';
import './App.css';
import Contador from "./components/Contador";
import Coche from "./components/Coche/Coche";
import Bici from "./components/Bici/Bici";

function App() {
  return (
    <div className="App">
      {/* <Contador></Contador>
      <Coche marca="Fiat" modelo="Punto" velocidadMaxima="50"></Coche> */}
      <Bici></Bici>
    </div>
  );
}

export default App;
