import React from 'react';
import logo from './logo.svg';
import './App.css';
import PrimeraClase from "./components/PrimeraClase"
import Deportes from "./components/Deportes"

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        {/* <PrimeraClase></PrimeraClase> */}
        <Deportes></Deportes>
      </header>
    </div>
  );
}

export default App;
