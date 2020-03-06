import React, { Component } from "react";
import Global from "./../Global";
import Axios from "axios";

export default class BuscarCoches extends Component {
  cajamarcaREF = React.createRef();

  state = {
    coches: [],
    search:[],
    status: false
  };

componentWillMount(){
    this.cargarCoches();
}

  cargarCoches = () => {
    var request = "/webresources/coches";
    var url = Global.urlCoches + request;
    Axios.get(url).then(result => {
      this.setState({
        coches: result.data,
        search:result.data
      });
    });
  };

  buscarCoches = e => {
    e.preventDefault();
    var marca = this.cajamarcaREF.current.value.toLowerCase();
    var coches = this.state.coches;
    //Axios.get(url).then(result => {
      //Todo el contenido de JSON
      //coches = result.data;
      //Filtramos por una propiedad del JSON
      var filtro = coches.filter(car =>
        car.marca.toLowerCase().includes(marca)
      );

      this.setState({
        search: filtro
      });
    //}
    //);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.buscarCoches}>
          <div>
            <label>Marca:</label>
            <input type="text" name="marca" ref={this.cajamarcaREF} />
            <button>Buscar Coches</button>
          </div>
        </form>
        {this.state.coches.length > 0 && (
          <table>
            <tr>
              <th>Marca</th>
              <th>Modelo</th>
              <th>Conductor</th>
              <th>Imagen</th>
            </tr>

            {this.state.search.map((coche, i) => {
              return (
                <tr key={i}>
                  <td>{coche.marca}</td>
                  <td>{coche.modelo}</td>
                  <td>{coche.conductor}</td>
                  <td>
                    <img
                      src={coche.imagen}
                      alt={coche.conductor}
                      style={{ width: "150px", height: "100px" }}
                    />
                  </td>
                </tr>
              );
            })}
          </table>
        )}
      </div>
    );
  }
}
