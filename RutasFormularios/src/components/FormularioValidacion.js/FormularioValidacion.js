import React, { Component } from "react";
import "./FormularioValidacion.css";
import SimpleReactValidator from "simple-react-validator";
import Good from "./../../Assets/checkgood.png";
import Bad from "./../../Assets/cross-out-png-9.png";

export default class FormularioValidacion extends Component {
  //Debemos instanciar el obj al cargar la app
  //Porque es un obj lógico, tiene funcionalidad
  componentWillMount() {
    this.validator = new SimpleReactValidator();
  }

  nombreREF = React.createRef();
  edadREF = React.createRef();
  emailREF = React.createRef();
  descripcionREF = React.createRef();

  state = {
    status: false,
    nombre: "",
    edad: 0,
    email: "",
    descripcion: ""
  };

  guardarDatos = e => {
    e.preventDefault();
    if(this.validator.allValid()){
        this.setState({status:true})
    }else{
        this.setState({status:false})
        //Si existen errores, mostramos loe mensajes
        //de error
        this.validator.showMessages();
        //Forzar a recargar los componentes visuales
        this.forceUpdate();
    }
  };

  //Método para cambiar el state de cada caja al escribir

  changeState = () => {
    this.setState({
      nombre: this.nombreREF.current.value,
      edad: this.edadREF.current.value,
      email: this.emailREF.current.value,
      descripcion: this.descripcionREF.current.value
    });
  };

  comprobarEstado =()=>{
      if(this.state.status == true){
          return <img src={Good} style={{float:"right"}} alt="check"/>
      }else{
        return <img src={Bad} style={{float:"right"}} alt="bad"/>

      }
  }

  render() {
    return (
      <div>
        <form id="formulario" onSubmit={this.guardarDatos}>
          <div>
            <label htmlFor="nombre">Nombre:</label>
            <input
              type="text"
              name="nombre"
              ref={this.nombreREF}
              onChange={this.changeState}
            />
            {this.validator.message("nombre",this.state.nombre,"required|alpha_space")}
          </div>
          <div>
            <label htmlFor="edad">Edad:</label>
            <input
              type="number"
              name="edad"
              ref={this.edadREF}
              onChange={this.changeState}
            />
            {this.validator.message("edad",this.state.edad,"required|numeric|min:18,num|max:99,num")}
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              name="email"
              ref={this.emailREF}
              onChange={this.changeState}
            />
            {this.validator.message("email",this.state.email,"required")}

          </div>
          <div>
            <label htmlFor="descripcion">Descripción:</label>
            <textarea
              name="descripcion"
              cols="10"
              rows="3"
              ref={this.descripcionREF}
              onChange={this.changeState}
            ></textarea>{" "}
           
           {/* _num_space */}
          </div>
          <div>
            <button>Guardar Datos</button>
          </div>
        </form>
        <div id="resultado">
          <p style={{display:"inline"}}>
            Nombre: <b>{this.state.nombre}</b>
          </p>
          <p>
            Edad: <b>{this.state.edad}</b>
          </p>
          <p>
            Email: <b>{this.state.email}</b>
          </p>
          <p>
            Descripción: <b>{this.state.descripcion}</b>
          </p>
          {this.comprobarEstado()}
        </div>
      </div>
    );
  }
}
