import React, { Component } from "react";
import Comic from "./Comic";

class Comics extends Component {
  state = {
    // titulos:["Spiderman","Batman","Lobezno","Spawn"],
    // img: ["Spiderman.jpg","Batman.jpg","Lobezno.jpg","Spawn.jpg"],
    // resumen: ["ssssss","bbbbbb","lllllll","spspspspspsp"]
    comics: [
      { titulo: "Spiderman", img: "Spiderman.jpg", resumen: "ssssss" },
      { titulo: "Batman", img: "Batman.jpg", resumen: "bbbbbb" },
      { titulo: "Lobezno", img: "Lobezno.jpg", resumen: "lllllll" },
      { titulo: "Spawn", img: "Spawn.jpg", resumen: "spspspspspsp" }
    ]
  };
  //cambiar las img por urls

  render() {
    return (
      <div>
        {this.state.comics.map((com, indice) => {
          <Comic comic={com} key={indice}></Comic>;
        })}
      </div>
    );
  }
}

export default Comics;
