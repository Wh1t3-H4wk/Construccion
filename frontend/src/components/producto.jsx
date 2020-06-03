import React, { Component } from "react";

class Producto extends Component {
  render() {
    return (
      <div className="card">
        <img
          className="card-img-top w-100 d-block"
          src={this.props.producto.imgUrl}
        />
        <div className="card-body">
          <h4 className="card-title">{this.props.producto.nombre}</h4>
          <p>Precio:{this.props.producto.precio}</p>
          <input
            type="text"
            style={{
              width: "33px",
              height: "38px",
            }}
          />
          <div className="btn-group" role="group">
            <button className="btn btn-primary" type="button">
              -
            </button>
            <button className="btn btn-primary" type="button">
              +
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Producto;
