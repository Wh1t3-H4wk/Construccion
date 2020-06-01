import React, { Component } from "react";

const inputStyle = {
  width: "33px",
  height: "38px",
};

class Producto extends Component {
  render() {
    return (
      <div className="card">
        <img
          className="card-img-top w-100 d-block"
          src={this.props.producto.img}
        />
        <div className="card-body">
          <h4 className="card-title">{this.props.producto.nombre}</h4>
          <p>Precio:{this.props.producto.precio}</p>
          <input type="text" style={inputStyle} />
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
