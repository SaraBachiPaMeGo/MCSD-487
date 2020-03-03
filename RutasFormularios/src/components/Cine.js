import React, { Component } from "react";
import images from "./../Assets/images.jpg";

class Cine extends Component {
  render() {
    return (
      <div>
        <h1>Cine</h1>
        <img
          src={images}
          alt="images"
          style={{ width: "150px", height: "100px" }}
        />
        <ul style={{ display: "inline" }}>
          <li>D</li>
          <li>E</li>
          <li>F</li>
        </ul>
      </div>
    );
  }
}

export default Cine;
