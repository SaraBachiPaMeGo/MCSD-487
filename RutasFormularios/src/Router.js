import React, { Component } from "react";
//Importamos las librerías para la navegación
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Musica from "./components/Musica";
import Cine from "./components/Cine";
import Doble from "./components/Doble";
import Tabla from "./components/Tabla";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/musica" component={Musica}></Route>
          <Route exact path="/cine" component={Cine}></Route>
          {/* ahora mismo es opcional el número 
          <Route exact path="/doble" component={Doble}></Route> */}
          <Route
            exact
            path="/doble/:num"
            render={props => {
              //Recibo el valor dentro de props
              var num = props.match.params.num;
              return <Doble numero={num}></Doble>;
            }}
          ></Route>
          <Route
            exact
            path="/tabla/:numero"
            render={props => {
              var number = props.match.params.numero;
              return <Tabla numero={number}></Tabla>;
            }}
          ></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
