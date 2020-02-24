import React, { Component } from "react";

//Declarar funciones como métodos
//Se realiza fuera de la clase
// function MiFuncion(params) {
//     console.log("Haciendo Algo...")
// }

//Cualquier clase ES6 hereda de component
class PrimeraClase extends Component {
  //Esta clase tiene constructor y state ya
  //Para utilizar sin necesidad de import

  //Si queremos utilizar state, debemos
  //de utilizar la variable state e iniciar sus elementos

  //state es una variable que contiene
  // objetos en su interior

  //state para dibujar y setState para modificar

  //Ejemplo con clases funciones:
  //(dos estados, numero y nombre)
  //const [numero,setNumero] = useState(0);
  //const [nombre,setNombre] = useState("Nombre");
  //state = { numero:0 , nombre:"Nombre" } --> Variable obj

  state = { numero: 0 };
  incrementarNumero = () => {
    this.setState({
      numero: this.state.numero + 1
    });
  };

  //También tiene métodos de inicio de la
  //clase para la carga de características
  //ciclos de vida

  //Toda clase tendra un metodo render()
  //donde podremos realizar evaluaciones
  //constrantes, es donde devuelte el return

  //Funciones a nivel de clase, no llevan las
  //palabras reservadas(const/var)

  contador = 1;

  //Abajo se llama con THIS
  hazAlgo = () => {
    console.log("Dentro de Haz Algo " + this.contador);
    this.contador++;
  };

  render() {
    //pODEMOS DECLARAR FUNCIONES AQUÍ
    //DENTRO DE RENDER CON LA PALABRA
    //CONST
    // const hazAlgo = () => {
    //   console.log("Dentro de Haz Algo");
    // };
    return (
      <div>
        <h1>Soy una clase ES6</h1>
        <button
          onClick={() => {
            this.hazAlgo();
            // MiFuncion();
          }}
        >
          Botón
        </button>
        <h2>Contador {this.state.numero}</h2>
        <button
          onClick={() => {
            this.incrementarNumero();
          }}
        >Incrementar número</button>
      </div>
    );
  }
}

export default PrimeraClase;
