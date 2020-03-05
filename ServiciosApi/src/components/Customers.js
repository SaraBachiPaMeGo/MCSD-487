import React, { Component } from "react";
//Tenemos que importar axios para el
//accesi a peticiones HTTP
import Axios from "axios";

export default class Customers extends Component {
  //Todos los customers los almacenaremos en el
  //state para poder dibujarlos posteriormente
  state = {
    customers: [],
    status: false
  };

  cargarClientes = () => {
    Axios.get("http://northwind.netcore.io/customers.json").then(result => {
      //Dentro del resultado tenemos DATA
      console.log(result.data);
      //Enlazamos directamente el resultado de data
      //con nuestro modelo (cualquiera)
      //this.state.customers
      this.setState({ customers: result.data.customers, state: true });
    });
  };

  componentDidMount() {
    this.cargarClientes();
  }

  render() {
    //Se realiza una petición por cada cambio
    //Este componente es el encargado de dibujar
    //todos los clientes.
    //Nos gutaría poner cargando mientras está recibiendo datos...
    if (this.state.status == false) {
      return (
        <div>
          <h1>Cliente Web API</h1>
          <button onClick={this.cargarClientes}>Ver datos</button>
          <ul>
            {this.state.customers.map((cust, i) => {
              return <li key={i}>{cust.contactName}</li>;
            })}
          </ul>
        </div>
      );
    }else {
        return(<h2>Cargando...</h2>)
    }
  }
}
