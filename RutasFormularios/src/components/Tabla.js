import React, { Component } from "react";

class Tabla extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listaNumeros:[],  
      multiplicar: [],
      numeros: [],
      numero: props.numero
    };
  }

  multiplicaciones = () => {
    const param = this.state.numero;
    //console.log("TABLA " + param);
    var datos = this.state.multiplicar;
    for (let i = 1; i <= 10; i++) {
      const element = param * [i];
      //DONDE LOS GUARDAMOS??
      //EL STATE ES MODIFICABLE DIRECTAMENTE??
      //this.state.mensaje = "algo...";
      datos.push(element);
      console.log("---" + element);
    }
    this.setState({ multiplicar: datos });
  };

  componentDidMount() {
    this.multiplicaciones();
    this.numeros();
  }

    numeros = () => {
        const lista = this.state.listaNumeros;
      for (let i = 0; i < 11; i++) {
        lista.push(
            <td>
            {this.state.numero} x {[i]}
          </td>
        )    
      }
      this.setState({listaNumeros:lista})
    };

  render() {
    return (
      <div>
        <h1>Tabla de multiplicar</h1>
        {/* {this.multiplicaciones()} */}
        <table style={{ border: "solid black 2px" }}>
          <tr>
            {//SI LO HACEMOS EN RENDER, SE UTILIZA
            //map o forEach
            //SI LO HACEMOS EN UN METODO () =>
            //PODEMOS UTILIZAR LO QUE SEA
            this.state.listaNumeros}
          </tr>
          <tr>
            {this.state.multiplicar.map(element => {
              return <td>{element}</td>;
            })}
          </tr>
        </table>
      </div>
    );
  }
}

export default Tabla;
