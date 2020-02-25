import React, { Component } from "react";
import Comic from "./Comic";
import "./Comics.css";

class Comics extends Component {
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
    favorito: null,
    edicion: -1
  };

  seleccionarFavorito = comic => {
    this.setState({
      favorito: comic
    });
  };

  crearComic = () => {
    var titulo = document.getElementById("titulo").value;
    var descr = document.getElementById("descripcion").value;
    var img = document.getElementById("imagen").value;

    //Creamos un nuevo objeto comic
    var comic = {
      titulo: titulo,
      img: img,
      resumen: descr
    };

    //Extraemos el conjunto de comics del state
    var comics = this.state.comics;
    comics.push(comic);
    //No se puede hacer porque es sólo de lectura
    this.setState({
      comics: comics
    });
  };

  borrarComic = indice => {
    var comics = this.state.comics;
    comics.splice(indice, 1);
    this.setState({
      comics: comics
    });
  };

  editarComic = (comic, i) => {
    //Dibujar los datos en cada caja
    document.getElementById("titulo").value = comic.titulo;
    document.getElementById("descripcion").value = comic.resumen;
    document.getElementById("imagen").value = comic.img;
    this.setState({
      edicion: i
    });
  };

  guardarComic = () => {
    //Indice del elemento que estamos editando
    var i = this.state.edicion;

    //Necesitamos los comics
    var comics = this.state.comics;

    //Necesito el comic a editar
    var editComic = comics[i];

    var titulo = document.getElementById("titulo").value;
    var descr = document.getElementById("descripcion").value;
    var img = document.getElementById("imagen").value;

    //Modificamos el comic
    editComic.titulo = titulo;
    editComic.img = img;
    editComic.resumen = descr;

    //Sustituimos el comic por el editado
    comics[i] = editComic;

    //Cambiamos los estados de comic y edición
    this.setState({
      comics: comics,
      edicion: -1
    });
  };

  render() {
    return (
      <div>
        <h1>Comics</h1>
        <div>
          <label>Titulo:</label>
          <input type="text" id="titulo" />
        </div>
        <div>
          <label>Descripción:</label>
          <input type="text" id="descripcion" />
        </div>
        <div>
          <label>Imagen:</label>
          <input type="text" id="imagen" />
        </div>
        
        {this.state.edicion != -1 ? (
          <button
            onClick={() => {
              {
                this.guardarComic();
              }
            }}
          >
            Guardar
          </button>
        ): <button
        onClick={() => {
          {
            this.crearComic();
          }
        }}
      >
        Nuevo comic
      </button>
        }

        {/* condicion && CODIGO HTML --> if*/}
        {this.state.favorito && (
          <h1>Su comic favorito es: {this.state.favorito.titulo}</h1>
        )}

        {this.state.comics.map((com, indice) => {
          return (
            <Comic
              comic={com}
              key={indice}
              seleccionarFavorito={this.seleccionarFavorito}
              borrarComic={this.borrarComic}
              indice={indice}
              editarComic={this.editarComic}
            ></Comic>
          );
        })}
      </div>
    );
  }
}

export default Comics;
