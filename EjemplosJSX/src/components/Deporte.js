import React, { Component } from "react";

class Deporte extends Component {
  //Nos van a enviar un dato por props
  //a dicho dato lo vamos a recibir como
  //deporte
  marcarDeporte = () => {
    console.log(this.props.deporte);
    this.props.marcarFavorito(this.props.deporte)
  };
  render() {
    return (
      <div>
        <h2>{this.props.deporte}</h2>
        <button
          onClick={() => {
            this.marcarDeporte();
  
        }}
        >
          Marcar deporte
        </button>
      </div>
    );
  }
}

export default Deporte;
