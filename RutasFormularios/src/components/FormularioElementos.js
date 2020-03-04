//rcc snippet para Components
import React, { Component } from "react";

export default class extends Component {
  seleccionado = React.createRef();
  state = {
    seleccionado: "",
    datos: [
      {
        Apodo: "Lago",
        Imagen:
          "https://www.viajejet.com/wp-content/viajes/Lago-Moraine-Parque-Nacional-Banff-Alberta-Canada-1440x810.jpg"
      },
      {
        Apodo: "China",
        Imagen:
          "https://static.vix.com/es/sites/default/files/styles/1x1/public/imj/p/paisajes-espectaculares-del-mundo-1.jpg"
      },
      {
        Apodo: "Paradero",
        Imagen:
          "https://tecnologiaenaula.files.wordpress.com/2017/01/cropped-imagenes-paisajes-bonitos-5.jpg"
      },
      {
        Apodo: "Caribe",
        Imagen:
          "https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_800,h_533/https://101lugaresincreibles.com/wp-content/uploads/2009/05/paisajes-hermosos-800x533.jpg"
      }
    ]
  };

  generarOptions = () => {
    var options = [];
    //Recorremos todos los datos del state
    this.state.datos.map((n, i) => {
      options.push(
        <option key={i} value={i}>
          {n.Apodo}
        </option>
      );
    });
    return options; //No tendríamos que utilizar el state
  };

  mostrarOption = e => {
    e.preventDefault();
    var index = parseInt(this.seleccionado.current.value);
    var listaObjetos = this.state.datos[index];
    this.setState({
      seleccionado: (
        <div>
          <div>{listaObjetos.Apodo}</div>
          <div><img src={listaObjetos.Imagen} style={{width:"500px",height:"450px"}}/></div>
        </div>
      )
    });
  };

  render() {
    return (
      <div>
        <h1>Seleccion de Elementos</h1>
        <form onSubmit={this.mostrarOption}>
          <select name="selectdatos" ref={this.seleccionado}>
            {this.generarOptions()}
          </select>
          <button>Ver</button>
        </form>
        {this.state.seleccionado}
      </div>
    );
  }
}
