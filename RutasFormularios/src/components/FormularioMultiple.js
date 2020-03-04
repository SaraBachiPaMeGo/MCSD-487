import React, { Component } from "react";

export default class FormularioMultiple extends Component {
  selectMultipleREF = React.createRef();

  state = {
    ingredientes: ["Leche", "Cacao", "Avellanas", "Azúcar", "Huevos"],
    seleccionados: ""
  };

  generarOptions = () => {
    var ingre = this.state.ingredientes;
    var options = [];
    ingre.map((n, i) => {
      options.push(
        <option value={n} key={i}>
          {n}
        </option>
      );
    });
    return options;
  };

  mostrarSeleccionados = e => {
    e.preventDefault();
    var select = "";
    //Si son elementos múltiples dentro del select
    //se utiliza options en lugar de Value y nos
    //devuelve un array
    var options = this.selectMultipleREF.current.options;
    //Recoorremos todos los options del obj
    // options.map((n, i) => {
    //   //Preguntamos por su propiedad selected
    //   if (n.selected == true) {
    //     select += ", " + n;
    //   }
    // });

    for (let i = 0; i < options.length; i++) {
        const n = options[i];
        if (n.selected == true) {
            select += ", " + n.value; //COGES EL VALUE DEL OPTIONS !! .VALUE
          }        
    }
    this.setState({ seleccionados: select });
  };

  render() {
    return (
      <div>
        <h1>Seleccion de Múltiple</h1>
        <form onSubmit={this.mostrarSeleccionados}>
          <select
            name="selectmulti"
            size="10"
            multiple
            ref={this.selectMultipleREF}
          >
            {this.generarOptions()}
          </select>
          <button>Ver</button>
        </form>
        <p>{this.state.seleccionados}</p>
      </div>
    );
  }
}
