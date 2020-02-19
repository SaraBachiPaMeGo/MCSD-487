import React from "react";
import logo from "./../../Assets/images/Coche1.jpg";
import coche from "./../../Assets/images/Coche1.jpg"; // Nombre de variable lógica
import "./App.css";
import { Button, Accordion, Card } from "react-bootstrap";
import Saludo from "./../Saludo";
import "bootstrap/dist/css/bootstrap.min.css";
import Acordeon from "./../Acordeon";

function App() {
  var nombre = "Alumno";
  //Podemos crear funciones con codigo lógico
  //Las funciones son constantes, no pueden
  //tener cambios y se realizan con la sintaxis
  // flecha =>
  const mostrarSaludo = () => {
    console.log("Mostrando saludo!");
    //Cuando queremos devolver bloques HTML
    //necesitamos envolver las etiquetas dentro de
    // un div principal
    return (
      <div>
        <h1>Soy un saludo</h1>
        <Button variant="outline-info" onClick={() => sumarNumeros(5, 5)}>
          Info
        </Button>
        <h1>Aprendiendo react</h1>
      </div>
    );
  };

  //Las funciones pueden recibir parámetros
  const sumarNumeros = (n1, n2) => {
    var suma = n1 + n2;
    console.log("La suma de los números es :" + suma);
    return <h1>La suma de los números es: {suma}</h1>;
  };
  // Enviar un parámetro
  const mostrarMensajePadre = descripticion => {
    console.log("Mensaje del padre " + descripticion);
  };

  return (
    <div className="App">
      <Acordeon />
      <header className="App-header">
        {/* {// Es una clase, le pasamos una función como parámetro SIN PARENTESIS} */}
        <Saludo nombre="Lola" apellido="Gomez" funcion={mostrarMensajePadre} />
        {/* <Saludo nombre="Kike" apellido="Sánchez" />
        <Saludo nombre="Pepe" apellido="Salas" /> */}
        {sumarNumeros(2, 3)}
        {/*Se ejecuta directamente la función*/}
        {mostrarSaludo()}
        <img src={coche} alt="logo" /> {/*className="App-logo"}*/}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React {nombre}
        </a>
      </header>
    </div>
  );
}

export default App;
