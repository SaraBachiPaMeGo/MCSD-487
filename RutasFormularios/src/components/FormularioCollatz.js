import React, { Component } from "react";

class FormularioCollatz extends Component {
  state = {
    lista: []
  };

  cajaCollatz = React.createRef();

  getCollatz = e => {
    e.preventDefault();
    //Añadir elementos
    // var datos = this.state.lista;
    // datos.push(X);
    // this.setState({lista:datos})

    //Crear nuevos elementos
    var datos = [];
    var numero = parseInt(this.cajaCollatz.current.value);
    //Todo value es un String
    while (numero != 1) {
      if (numero % 2 == 0) {
        numero = numero / 2;
        datos.push(<li key={numero}>{numero}</li>);
      } else {
        numero = numero *3 + 1;
        datos.push(<li key={numero}>{numero}</li>);
      }
      //datos.push(numero); también se podría poner aquí
    }

    this.setState({ lista: datos });
  };

  render() {
    return (
      <div>
        //Se pone paréntesis porque está =>
        <form onSubmit={this.getCollatz}>
          <fieldset>
            <label>Número Collatz:</label>
            <input type="number" name="collatz" ref={this.cajaCollatz} />
            <button>Conjetura Collatz</button>
          </fieldset>
        </form>
        <ul>{this.state.lista}</ul>
      </div>
    );
  }
}

export default FormularioCollatz;
