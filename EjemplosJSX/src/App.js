import React from 'react';
import logo from './logo.svg';
import './App.css';
import PrimeraClase from "./components/PrimeraClase"
import Deportes from "./components/Deportes"
import Comics from "./components/Comics/Comics"

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        {/* <PrimeraClase></PrimeraClase> */}
        {/* <Deportes></Deportes> */}
        <Comics></Comics>
      </header>
    </div>
  );
}

export default App;
