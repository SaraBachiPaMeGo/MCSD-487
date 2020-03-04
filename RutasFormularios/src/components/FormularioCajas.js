import React, { Component } from "react";

class FormularioCajas extends Component {
  state = {
    resultados: [],
    listaNum: []
  };
  numero = React.createRef();

  crearTabla = e => {
    e.preventDefault();
    var number = this.numero.current.value;
    var resultadosLista = this.state.resultados;
    for (let i = 0; i <= 10; i++) {
      const element = number * [i];
      resultadosLista.push(element);
    }
    this.setState({ resultados: resultadosLista });
  };

  crearListaNum = () => {
    var listaNumeros = this.state.listaNum;
    var number = this.numero.current.value;
    for (let i = 0; i <= 10; i++) {
      const element = "Y" + "x" + [i];
      listaNumeros.push(element);
    }
    this.setState({ listaNum: listaNumeros });
  };

  componentDidMount() {
    this.crearListaNum();
  }

  render() {
    return (
      <div>
        <form >
          <fieldset>
            <label>Número:</label>
            <input type="number" name="number" ref={this.numero} />
            <button onClick={this.crearTabla}>Ver Tabla</button>
          </fieldset>
        </form>
        <ul style={{ float: "left" }}>
          {this.state.listaNum.map((n, i) => {
            return <li key={i}>{n}</li>;
          })}
        </ul>
        <ul style={{ float: "right" }}>
          {this.state.resultados.map((n, i) => {
            return <li key={i}>{n}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default FormularioCajas;
