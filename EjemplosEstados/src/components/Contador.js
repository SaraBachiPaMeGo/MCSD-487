import React, { useState } from "react";

function Contador() {
  //Toda variable de estado está compuesta
  //por una variable y una funcion SET
  //para modificar su valor.
  //props-- Desestructurar, se utiliza con llaves
  //UseState se utiliza con corchetes
  //Qué valor quiero dar a numero
  //izq quien va a coger el valor
  //setvalor el que lo va a modificar
  const [numero, setNumero] = useState(0);
  return (
    <div>
      <h1>Ejemplo state contador</h1>
      <h2>El contador es: {numero}</h2>
      <button onClick={() => {
          setNumero(numero +1);
      }}>Incrementar</button>
    </div>
  );
}

export default Contador;
