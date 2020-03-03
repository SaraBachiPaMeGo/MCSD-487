import React, { Component } from "react";
import anochecer from "./../Assets/anochecer.jpg";

class Musica extends Component {
  render() {
    return (
      <div>
        <h1>Música</h1>
        <img
          src={anochecer}
          alt="anochecer"
          style={{ width: "150px", height: "100px" }}
        />
        <ul>
          <li>A</li>
          <li>B</li>
          <li>C</li>
        </ul>
      </div>
    );
  }
}

export default Musica;
