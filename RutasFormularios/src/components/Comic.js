import React, { Component } from "react";
import "./Comic.css";

export default class Comic extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card">
          {console.log(this.props.comic.titulo)}
        <img
          src={this.props.comic.img}
          alt={this.props.comic.titulo}
          style={{ width: "20%", height: "20" }}
        />
        <div className="container">
          <h4>{this.props.comic.titulo}</h4>
          <p>{this.props.comic.resumen}</p>
        </div>
      </div>
    );
  }
}
