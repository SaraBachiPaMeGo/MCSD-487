import React, { Component } from "react";

class Comic extends Component {
  marcarFavorito = () => {
      this.props.seleccionarFavorito(this.props.comic);
  };
  borrarComic =()=>{
      //PARA BORRAR, QUE NECESITO EL INDICE 
      this.props.borrarComic(this.props.indice);
  }

  editarComic = () =>{
      this.props.editarComic(this.props.comic,this.props.indice)
  }

  render() {
    console.log(this.props.comic);
    return (
      <div className="card">
        <img
          src={this.props.comic.img}
          alt="Avatar"
          style={{ width: "20%", height: "20" }}
        />
        <div className="container">
          <h4>{this.props.comic.titulo}</h4>
          <p>{this.props.comic.resumen}</p>
        </div>
        <button
          onClick={() => {
            this.marcarFavorito()
          }}
        >
          Favorito
        </button>
        <button
          onClick={() => {
            this.borrarComic()
          }}
        >
          Borrar
        </button>
        <button
          onClick={() => {
            this.editarComic()
          }}
        >
          Editar 
        </button>
      </div>
    );
  }
}

export default Comic;
