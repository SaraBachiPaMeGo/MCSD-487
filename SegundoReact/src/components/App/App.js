import React from "react";
import "./App.css";
import Saludo from "./../Saludo";
import "bootstrap/dist/css/bootstrap.min.css";  


function App() {
  return (
    <div className="App">
      <Saludo nombre="María"></Saludo>
      <Saludo nombre="Pepe"></Saludo>
    </div>
  );
}

export default App;
