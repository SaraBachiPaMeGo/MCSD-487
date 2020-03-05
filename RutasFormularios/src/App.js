import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Menu from "./components/Menu";
import MenuNumeros from "./components/MenuNumeros";
import Router from "./Router";
import Doble from "./components/Doble";
import Tabla from "./components/Tabla";
import FormularioUsuario from "./components/FormularioUsuario";
import FormularioCollatz from "./components/FormularioCollatz";
import FormularioCajas from "./components/FormularioCajas";
import FormularioElementos from "./components/FormularioElementos";
import FormularioMultiple from "./components/FormularioMultiple";
import FormularioComics from "./components/FormularioComics";
import FormuValidacion from "./components/FormularioValidacion.js/FormularioValidacion"
import SeleccionComponent from "./components/SeleccionComponent"


function App() {
  return (
    <div>
      <div style={{ float: "left" }}>
        <SeleccionComponent></SeleccionComponent>
        {/* <FormuValidacion></FormuValidacion> */}
        {/* <FormularioComics></FormularioComics> */}
        {/* <FormularioMultiple></FormularioMultiple> */}
        {/* <FormularioElementos></FormularioElementos> */}
        {/* <FormularioCajas></FormularioCajas> */}
        {/* <FormularioCollatz></FormularioCollatz> */}
        {/* <FormularioUsuario></FormularioUsuario> */}
        {/* <Menu></Menu>
        <MenuNumeros></MenuNumeros> */}
      </div>
      <div style={{ float: "left" }}>
        {/* Sirve para pintar */}
        {/* <Router></Router> */}
        {/* <h1>Número doble</h1>
        <Doble numero="4"></Doble> */}
        {/* <Tabla></Tabla> */}
      </div>
    </div>
  );
}

export default App;
