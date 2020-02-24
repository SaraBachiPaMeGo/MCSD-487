import React from 'react';
import './App.css';
import Contador from "./components/Contador";
import Coche from "./components/Coche/Coche";
import Bici from "./components/Bici/Bici";
import NumeroDoble from "./components/NumeroDoble/NumeroDoble";
import TablaMulti from "./components/TablaMulti/TablaMulti";

function App() {
  return (
    <div className="App">
      {/* <Contador></Contador>
      <Coche marca="Fiat" modelo="Punto" velocidadMaxima="50"></Coche> */}
      {/* <Bici></Bici> */}
      {/* <NumeroDoble></NumeroDoble> */}
      <TablaMulti></TablaMulti>
    </div>
  );
}

export default App;
