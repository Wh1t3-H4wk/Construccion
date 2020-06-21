import React, { Component } from "react";
import axios from "axios";
import ProductoAcciones from "./productoAcciones";

class Producto extends Component {
  constructor() {
    super();
    this.state = {
      showEdit: false,
      showEliminar: false,
      estado: false,
      nombre: "",
      precio: "",
      descripcion: "",
      imagen: "",
    };

    this.handleModalEdit = this.handleModalEdit.bind();
    this.handleModalEliminar = this.handleModalEliminar.bind();
  }

  onChangeNombre = (e) => {
    this.setState({
      nombre: e.target.value,
    });
    console.log(this.state.nombre);
  };
  onChangePrecio = (e) => {
    this.setState({
      precio: e.target.value,
    });
  };
  onChangeDescripcion = (e) => {
    this.setState({
      descripcion: e.target.value,
    });
  };
  onChangeImagen = (e) => {
    this.setState({
      imagen: e.target.value,
    });
  };
  onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5001/producto/", {
      nombre: this.state.nombre,
      precio: this.state.precio,
      descripcion: this.state.descripcion,
      imagen: this.state.imagen,
    });
    console.log("HOLA");
  };

  handleModalEliminar() {
    console.log("elimine");
    {
      /*agregar codigo que elimine las cosas en la base de datos
       */
    }
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
            onSubmitCambiarDestacado={this.props.onSubmitCambiarDestacado}
          />
        </div>
      </div>
    );
  }
}

export default Producto;
