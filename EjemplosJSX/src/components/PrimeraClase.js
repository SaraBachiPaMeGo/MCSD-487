import React, { Component } from "react";

//Cualquier clase ES6 hereda de component
class PrimeraClase extends Component {
  //Esta clase tiene constructor y state ya
  //Para utilizar sin necesidad de import
  //También tiene métodos de inicio de la
  //clase para la carga de características
  //ciclos de vida

  //Toda clase tendra un metodo render()
  //donde podremos realizar evaluaciones
  //constrantes, es donde devuelte el return
  render() {
    return (
      <div>
        <h1>Soy una clase ES6</h1>
      </div>
    );
  }
}

export default PrimeraClase;
