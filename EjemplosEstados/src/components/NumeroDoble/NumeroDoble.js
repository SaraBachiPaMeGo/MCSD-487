import React, { useState } from "react";

function NumeroDoble() {
  const [numero, setNumero] = useState(0);

  const mostrarDoble = numero => {
    var doble = numero * 2;
    setNumero(doble);
  };

  const [lista, setLista] = useState([1, 2, 3, 4, 5, 6]);

  const numerosAlea = () => {
    var numeros = [];
    for (var i = 0; i <= 7; i++) {
      //Generamos un número aleatorio
      var numAle = Math.floor(Math.random() * 100) + 1;
      numeros.push(numAle);
    }
    setLista(numeros);
  };

  const mostrarLista = () => {
    //Creamos etiquetas dinámicas por cada número
    //Crear un array de etiquetas
    var lista2 = [];
    //Creamos un bucle para recorrer los números
    for (var i = 0; i < lista.length; i++) {
      //Para añadir elementos dinámicos al array se utiliza
      //PUSH
      //Tenemos que añadir una key, porque es dinámico
      lista2.push(<li key={i}>{lista[i]}</li>);
    }

    return lista2;
  };

  return (
    <div>
      <h1>Ejemplo de formulario: Doble</h1>
      <input type="text" id="cajaNum" />
      <button
        onClick={() => {
          //Podemos buscar por su id con JS
          var num = document.getElementById("cajaNum").value;
          //Convertimos a int el número
          num = parseInt(num);
          mostrarDoble(num);
        }}
      >
        Mostrar doble
      </button>
      <h1>El número es: {numero}</h1>
      <ul>{mostrarLista()}</ul>
      <button
        onClick={() => {
          {
            numerosAlea();
          }
        }}
      >
        Cambiar lista
      </button>
      <ul>
        {
          //Recorrer los elementos directamente
          //sin function
          //Para el recorrido de conjuntos se 
          //utiliza el método .map(valor,indice)
          lista.map((num,indice)=>{
          return <li key={indice}>{num}</li>
          })
        }
      </ul>
    </div>
  );
}

export default NumeroDoble;
