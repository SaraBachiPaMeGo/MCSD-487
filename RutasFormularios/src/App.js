import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Menu from "./components/Menu";
import MenuNumeros from "./components/MenuNumeros";
import Router from "./Router";
import Doble from "./components/Doble";
import Tabla from "./components/Tabla";

function App() {
  return (
    <div>
      <div style={{ float: "left" }}>
        <Menu></Menu>
        <MenuNumeros></MenuNumeros>
      </div>
      <div style={{ float: "left" }}>
        {/* Sirve para pintar */}
        <Router></Router>
        {/* <h1>Número doble</h1>
        <Doble numero="4"></Doble> */}
        {/* <Tabla></Tabla> */}
      </div>
    </div>
  );
}

export default App;
