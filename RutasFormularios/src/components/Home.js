import React, { Component } from "react";
import Bosque from "./../Assets/Bosque.jpg";

class Home extends Component {
  render() {
    return (
      <div>
          <h1>Home</h1>
        <img
          src={Bosque}
          alt="bosque"
          style={{ width: "150px", height: "100px" }}
        />
      </div>
    );
  }
}

export default Home;
