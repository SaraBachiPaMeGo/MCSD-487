import React, { Component } from "react";
import Select from "react-select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" }
];
export default class SeleccionComponent extends Component {
  state = {
    selectedOption: null
  };
  ingrREF = React.createRef();

  crearOptions = (e) => {
    e.preventDefault();
    //console.log(nuevo)
    var nuevo= {
      value:  this.nuevoRef.current.value,
      label:  this.nuevoRef.current.value
    }
    options.push(nuevo)
  };

  añadirIngr = e => {
    e.preventDefault();
    var nuevo= {
        value:  this.ingrREF.current.value,
        label:  this.ingrREF.current.value
      }
      options.push(nuevo)
  };

//   pintarIngredientes = e => {
//     e.preventDefault();
//     //Cojo todos los options
//     var listaOptions = this.selectList.current.options;
//     var listaIngredientes = this.state.datos;
//     var ingrSeleccionado = this.state.select;
//     //Los recorro para ver cuál de ellos está seleccionado
//     for (let i = 0; i < listaOptions.length; i++) {
//       if (listaOptions[i].selected) {
//         //Cojo el objeto a partir de su value
//         var index = listaOptions[i].value;
//         var ingrediente = listaIngredientes[index];
//         ingrSeleccionado.push(ingrediente);
//       }
//     }
//     this.setState({
//       datos: listaIngredientes,
//       select: ingrSeleccionado
//     });
//   };

  render() {
    const { selectedOption } = this.state;

    return (
      <div>
        <form>
          <label>Ingrediente:</label>
          <input type="text" name="ingr" ref={this.ingrREF} />
          <button onClick={this.añadirIngr}>Añadir</button>
        </form>
        <Select
          value={selectedOption}
          onChange={this.handleChange}
          options={options}
        />
      </div>
    );
  }
}
