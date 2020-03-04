import React, { Component } from "react";

class FormularioUsuario extends Component {
  //1) Debemos crear variables de referencia
  //para que sean enlazadas con los controles
  //FORM
  nombre = React.createRef();
  apellido = React.createRef();

  //2) Los controles de formulario deben
  //tener un name obligatorio

  //3) Se enlazan las variables con la propiedad
  //ref de los controles FORM
  recibirDatos = e => {
    //Recibir el evento
    //e impedir la propagación de éste al realizar submit
    e.preventDefault();
    //Variable referencia.current.value -->
    //Así se reciben datos
    console.log(this.nombre.current.value);
    console.log(this.apellido.current.value);

    //Creamos el usuario y lo guardamos en el state
    //para poder dibujarlo
    this.setState({
      usuario: {
        nombre: this.nombre.current.value,
        apellido: this.apellido.current.value
      }
    });
  };

  state = {
    usuario: {}
  };

  render() {
    return (
      <div>
        {this.state.usuario.nombre && (
          //   si el nombre es true, devuelve X
          <h1>
            Nombre: <span>{this.state.usuario.nombre}</span>
            &nbsp; Apellido: <span>{this.state.usuario.apellido}</span>
          </h1>
        )}
        <form onSubmit={this.recibirDatos}>
          <fieldset>
            <label>Nombre:</label>
            <input
              type="text"
              name="nombre"
              ref={this.nombre}
              onChange={this.recibirDatos}
            />
            <br />
            <label>Apellido:</label>
            <input type="text" name="apellido" ref={this.apellido} />
            <br />
            <button>Enviar datos</button>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default FormularioUsuario;
