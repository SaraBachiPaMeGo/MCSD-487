import React, { Component } from "react";
import Axio from "axios";
import Global from "./../Global";

export default class BuscarDepartamentos extends Component {
  selectOption = React.createRef();

  state = {
    options: [],
    departamentos: [],
    select: "",
    status: false,
    empleados: []
  };

  crearOptions = () => {
    var options = [];
    //var departament = [];
    var url = Global.urlDepartamentos + "/api/departamentos";
    Axio.get(url).then(result => {
      //OBTENEMOS RESPUESTA
      //ALMACENAMOS LOS DATOS EN STATE
      this.setState({
        departamentos: result.data
      });
      //RECORREMOS EL STATE Y PINTAMOS OPTIONS
      console.log("Leyendo datos...");
      var departament = this.state.departamentos;
      for (let i = 0; i < departament.length; i++) {
        var depart = departament[i];
        //console.log(depart);
        options.push(
          <option value={depart.Numero} key={i}>
            {depart.Nombre}
          </option>
        );
      }
      this.setState({
        options: options
      });
    });
  };

  buscarEmpleados = (e) => {
      e.preventDefault();
    var select = this.state.select;
    var options = this.selectOption.current.value;
    this.setState({ select: select });
    var url = Global.urlEmpleados + "/api/Empleados";
    Axio.get(url).then(result => {
      var listaEmpleados = result.data;
      var resultEmpleados = listaEmpleados.filter(empleados =>
        empleados.departamento.toString().includes(options) //empleados.departamento == options
      );

      this.setState({
        empleados: resultEmpleados
      });
    });
  };

  componentWillMount() {
    this.crearOptions();
  }

  render() {
    return (
      <div>
        <form>
          <select name="selectList" ref={this.selectOption}>
            {this.state.options}
          </select>
          <button onClick={this.buscarEmpleados}>Buscar Empleados</button>
        </form>
        <ul>
            {this.state.empleados.map((emp,i)=>{
                return <li key={i}>{emp.apellido}</li>
            })}
        </ul>
      </div>
    );
  }
}
