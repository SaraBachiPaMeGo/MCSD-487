import React, { Component } from "react";

class Doble extends Component {
  //Recibimos número dentro de props
  //si tenemos props, debemos utilizar
  //el constructor para recuperar el
  //valor
  constructor(props) {
    super(props);
    //Para poder visualizarlo en la página
    //debemos guardarlo en state
    this.state = {
      numero: props.numero
    };
  }
  render() {
    return (
      <div>
        <h1>El número recibido es: {this.state.numero}</h1>
        <h2>El doble del número es: {this.state.numero * 2}</h2>
      </div>
    );
  }
}

export default Doble;
