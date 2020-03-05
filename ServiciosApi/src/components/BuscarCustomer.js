import React, { Component } from 'react'
import Axios from "axios";

export default class BuscarCustomer extends Component {
    idCustomREF = React.createRef();

    state= {
        customer:""
    }

    cargarClientes = (e) => {
        e.preventDefault();
        var id = this.idCustomREF.current.value;
        console.log(id)
        Axios.get("http://northwind.netcore.io/customers/"+ id).then(result => {
          //Dentro del resultado tenemos DATA
          console.log(result.data);
          //Enlazamos directamente el resultado de data
          //con nuestro modelo (cualquiera)
          //this.state.customers
          console.log("NAME "+ result.data.customer.contactName)
          this.setState({ customer: result.data.customer.contactName });
        });
      };

    render() {
        return (
            <div>
                <form>
                    <label>Nombre:</label>
                    <input type="text" name="id" ref={this.idCustomREF}/>
                    <button onClick={this.cargarClientes}>Buscar</button>
                </form>
                <p>{this.state.customer}</p>
                
            </div>
        )
    }
}
