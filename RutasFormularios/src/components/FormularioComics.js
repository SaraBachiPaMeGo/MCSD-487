import React, { Component } from "react";
import Comic from "./Comic";

export default class FormularioComics extends Component {
  selectList = React.createRef();
  state = {
    comics: [
      {
        titulo: "Spiderman",
        img:
          "https://as.com/meristation/imagenes/2019/08/25/noticias/1566717212_191664_1566717436_noticia_normal.jpg",
        resumen: "ssssss"
      },
      {
        titulo: "Batman",
        img:
          "https://vignette.wikia.nocookie.net/marvel_dc/images/a/a6/Batman_Vol_2_2_Variant_Textless.jpg",
        resumen: "bbbbbb"
      },
      {
        titulo: "Lobezno",
        img:
          "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/main_element/public/media/image/2018/06/regreso-lobezno.jpg",
        resumen: "lllllll"
      },
      {
        titulo: "Spawn",
        img:
          "https://live.mrf.io/statics/i/ps/cdn1.cinemascomics.com/wp-content/uploads/2020/01/spawn-joker-pelicula.jpg",
        resumen: "spspspspspsp"
      }
    ],
    // seleccionado: {},
    comicsSeleccionados:[]
  };

  generarOptions = () => {
    var options = [];
    var listaComics = this.state.comics;
    listaComics.map((comic, i) => {
      options.push(
        <option value={i} key={i}>
          {comic.titulo}
        </option>
      );
    });
    return options;
  };

  mostrarSeleccionados = e => {
    e.preventDefault();
    var comicsSelecc=[]; //Array de comics
    var options = this.selectList.current.options; //Array de options    
    for (let i = 0; i < options.length; i++) {
        //RECUPERAR OPTION UNO A UNO
        var option = options[i];
       //SI EL OPTION ESTA SELECCIONADO
       if (option.selected){
           //RECUPERAMOS LA POSICION DEL OPTION
           var posicion = option.value;
           //RECUPERAMOS EL COMIC POR SU POSICION
           var comic = this.state.comics[posicion];
           comicsSelecc.push(<Comic comic={comic}></Comic>);
       }
    }
    this.setState({ comicsSeleccionados: comicsSelecc });
    
  };

  render() {
    return (
      <div>
        <h1>Seleccion de Cómics</h1>
        <form>
          <select name="selectlist" size="6" multiple ref={this.selectList}>
            {this.generarOptions()}
          </select>
          <button onClick={this.mostrarSeleccionados}>Ver</button>
        </form>
        <div>
            {this.state.comicsSeleccionados}
        </div>
      </div>
    );
  }
}
