import React, { Component } from "react";

class Menu extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/musica">Música</a>
          </li>
          <li>
            <a href="/cine">Cine</a>
          </li>
          {/* <li>
            <a href="/doble/7">Doble</a>
          </li>
          <li>
            <a href="/doble/44">Doble </a>
          </li> */}
        </ul>
      </div>
    );
  }
}

export default Menu;
