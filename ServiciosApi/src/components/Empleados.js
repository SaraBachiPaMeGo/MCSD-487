import React, { Component } from "react";
import Axios from "axios";
import Global from "./../Global";

export default class Empleados extends Component {
  constructor(props) {
    super(props);
    //Llamamos a cargar empleados
    this.getEmpleadosDept(props.iddepartamento);
  }

  state = {
    empleados: []
  };

  getEmpleadosDept = deptno => {
    var url =
      Global.urlEmpleados + "/api/Empleados/EmpleadosDepartamento/" + deptno;
    var listaEmpleados = this.state.empleados;
    Axios.get(url).then(result => {
      //   listaEmpleados = result.data;
      //   var resultadoEmp = listaEmpleados.filter(
      //     emp => emp.departamento == deptno
      //   );
      console.log(result.data);
      this.setState({
        empleados: result.data
      });
    });
  };

  render() {
    return (
      <div>
        <h1>Empleados</h1>
        {this.state.empleados.length > 0 && (
          <table>
            <tr>
              <th>Apellido</th>
              <th>Oficio</th>
              <th>Salario</th>
            </tr>
            {this.state.empleados.map((emp, i) => {
              return (
                <tr key={i}>
                  <td>{emp.apellido}</td>
                  <td>{emp.oficio}</td>
                  <td>{emp.salario}</td>
                </tr>
              );
            })}
          </table>
        )}
      </div>
    );
  }
}
