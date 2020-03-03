import React, { Component } from "react";

class MenuNumeros extends Component {
  state = {
    arrayNum: []
  };

  numRandom = () => {
    for (let i = 0; i < 5; i++) {
      var numAlea = Math.floor(Math.random() * 100);
      this.state.arrayNum.push(numAlea);
    }
  };

  render() {
    return (
      <div>
        <h1>Numeros {this.state.arrayNum.length}</h1>
        <ul>
          {/* //State srve para hacer cambios visuales en la página */}
          {this.numRandom()}
          {this.state.arrayNum.map((num, indice) => {
            //Un return por cada dibujo que queramos
            return (
              <li key={indice}>
                <a key={indice} href={"/doble/" + num}>
                  {num}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default MenuNumeros;
