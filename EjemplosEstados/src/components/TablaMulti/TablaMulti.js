import React, { useState } from "react";
import { Alert } from "react-bootstrap";

function TablaMulti() {
  const [lista, setLista] = useState([]);

  const [nombre, setNombre] = useState("Sara");

  const cambiarNombre = nombre => {
    //nombre = "Ana";
    setNombre(nombre);
  };

  const crearTabla = () => {
    var num = document.getElementById("num").value;
    var numeros = [];
    for (var i = 1; i <= 10; i++) {
      var multi = num * i;
      numeros.push(multi);
    }
    console.log(numeros);
    setLista(numeros);
  };

  return (
    <div>
      <h1>El nombre es {nombre}</h1>
      <input type="text" id="num" />
      <button
        onClick={() => {
          {
            crearTabla();
          }
        }}
      >
        Mostrar Tabla con función
      </button>
      <button
        onClick={() => {
          {
            var num = document.getElementById("num").value;
            cambiarNombre(num);
          }
        }}
      >
        Cambiar nombre
      </button>
      {lista.map((num, indice) => {
        // Alert("dentro");
        return (
          <table>
            <tbody>
              <tr key={indice + "a"}>
                <td>{num}</td>
              </tr>
            </tbody>
          </table>
        );
      })}
    </div>
  );
}

export default TablaMulti;
