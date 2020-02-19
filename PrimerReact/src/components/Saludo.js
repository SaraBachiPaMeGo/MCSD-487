import React from "react";
import "./Saludo.css";

function Saludo(props) {
  //Pasar parámetros con props
  //Para utilizar esta funcion como clase
  //y como componente se tiene
  //que importar
  //var name = props.nombre;

  //Desestructurar props/objetos
  //nombre, apellido
  const { nombre, apellido, funcion } = props; // va por posición dentro del objeto

  //Vamos a crear una funcion para mostrar
  //un saludo por consola
  const mostrarSaludo = () => {
    console.log("Método saludando");
  };

  //Toda clase funcional debe tener un
  // style={{
  //   color: "black",
  //   backgroundColor: "bisque"
  // }}
  //RETURN
  return (
    <div>
      <h1
        className="saludo"
      >
        Soy un componente: {nombre}, {apellido}
        {/*//Mismo nombre qe en App.js*/}
      </h1>
      <button onClick={() => mostrarSaludo()}>Pulsar para mostrar saludo componente</button>
      <button onClick={() => funcion(nombre)}>Saludo del padre con funcion</button>
      

    </div>
  );
}

export default Saludo;
// onClick={() => {código }} 