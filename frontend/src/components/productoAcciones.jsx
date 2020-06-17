import React, { Component } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import EditarProducto from "./editarProducto";
import EliminarProducto from "./eliminarProducto";

class ProductoAcciones extends Component {
  renderInputCliente() {
    return (
      <React.Fragment>
        <input
          type="text"
          style={{
            width: "33px",
            height: "38px",
          }}
        />
      </React.Fragment>
    );
  }

  renderAccionesCliente() {
    return (
      <React.Fragment>
        <button className="btn btn-primary" type="button">
          -
        </button>
        <button className="btn btn-primary" type="button">
          +
        </button>
      </React.Fragment>
    );
  }

  renderAccionesCatalogo() {
    return (
      <React.Fragment>
        <button className="btn btn-primary" type="button">
          <i
            className={
              this.props.producto.destacado ? "fa fa-star" : "fa fa-star-o"
            }
          ></i>
        </button>
        {/*-----------------modal editar-----------------------*/}
        <EditarProducto />
        {/*--------------modal eliminar----------------------------*/}
        <EliminarProducto />
      </React.Fragment>
    );
  }

  renderAccionProductoDisponible() {
    return (
      <React.Fragment>
        <Form>
          <Form.Check
            type="checkbox"
            className="mb-2 mr-sm-2"
            id="visibleCheck"
            value={this.props.producto.Disponible}
            label="Visible"
          />
        </Form>
      </React.Fragment>
    );
  }

  renderAccionesDestacado() {
    return (
      <React.Fragment>
        <button className="btn btn-danger" type="button">
          <i className="fa fa-minus"></i>
        </button>
      </React.Fragment>
    );
  }

  renderAcciones() {
    if (this.props.esAdmin) {
      return (
        <div className="row">
          <div className="col">
            <div className="btn-group" role="group">
              {this.props.enDestacado
                ? this.renderAccionesDestacado()
                : this.renderAccionesCatalogo()}
            </div>
          </div>
          <div className="col">
            <div className="justify-content-center">
              <div className="row">
                <div className="col">
                  {this.renderAccionProductoDisponible()}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <React.Fragment>
          {this.renderInputCliente()}
          <div className="btn-group" role="group">
            {this.renderAccionesCliente()}
          </div>
        </React.Fragment>
      );
    }
  }

  render() {
    return this.renderAcciones();
  }
}

export default ProductoAcciones;
