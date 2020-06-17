import React, { Component } from "react";
import ProductoAcciones from "./productoAcciones";

class Producto extends Component {
  constructor() {
    super();
    this.state = {
      showEdit: false,
      showEliminar: false,
      estado: false,
    };

    this.handleModalEliminar = this.handleModalEliminar.bind(this);
    this.handleModalEdit = this.handleModalEdit.bind(this);
  }

  handleModalEliminar() {
    this.setState({ showEliminar: !this.state.showEliminar });
  }

  handleModalEdit() {
    this.setState({ showEdit: !this.state.showEdit });
  }

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
          <ProductoAcciones
            producto={this.props.producto}
            onModalEliminar={this.handleModalEliminar}
            onModalEditar={this.handleModalEdit}
            showEdit={this.state.showEdit}
            showEliminar={this.state.showEliminar}
            enDestacado={this.props.enDestacado}
            esAdmin={true}
          />
        </div>
      </div>
    );
  }
}

export default Producto;
