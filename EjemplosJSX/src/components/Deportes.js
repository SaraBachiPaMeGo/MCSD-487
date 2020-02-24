import React, { Component } from "react";
import Deporte from "./Deporte";

class Deportes extends Component {
  state = {
    deportes: ["Natación", "Fútbol", "Danza", "Boxeo"],
    nombre: "Alumno React",
    favorito: "s"
  };

  marcarFavorito = deporte => {
    this.setState({
      favorito: deporte
    });
  };

  contador = 1;

  crearDeporte = () => {
    var deportes = this.state.deportes;
    deportes.push("Baloncesto " + this.contador);
    this.contador += 1;
    this.setState({
      deportes: deportes
    });
  };

  render() {
    return (
      <div>
        <h1>Componente Deportes</h1>
        <h2>Mi nombre es: {this.state.nombre}</h2>
        <button
          onClick={() => {
            this.crearDeporte();
          }}
        >
          Añadir Deporte
        </button>
        <h2 style={{ color: "pink" }}>
          Mi deporte favorito es: {this.state.favorito}
        </h2>
        {this.state.deportes.map((depor, indice) => {
          return (
            <Deporte
              deporte={depor}
              key={indice}
              marcarFavorito={this.marcarFavorito}
            />
          );
        })}
      </div>
    );
  }
}

export default Deportes;
