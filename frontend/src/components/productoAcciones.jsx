import React, { Component } from "react";
import { Button, Modal, Form } from "react-bootstrap";

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
        <Button
          className="btn btn-success"
          type="button"
          onClick={() => {
            this.props.onModalEditar();
          }}
        >
          <i className="fa fa-edit"></i>
        </Button>
        <Modal show={this.props.showEdit}>
          <Modal.Header>Editar producto</Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formNombre">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" value={this.props.producto.nombre} />
              </Form.Group>
              <Form.Group controlId="formPrecio">
                <Form.Label>Precio</Form.Label>
                <Form.Control type="text" value={this.props.producto.precio} />
              </Form.Group>
              <Form.Group controlId="Descripcion">
                <Form.Label>Descripción</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="3"
                  value={this.props.producto.descripcion}
                />
              </Form.Group>
              <Form.Group>
                <Form.File id="Imagen" label="Imagen" />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button
              onClick={() => {
                this.props.onModalEditar();
              }}
            >
              Aplicar cambios
            </Button>
            <Button
              onClick={() => {
                this.props.onModalEditar();
              }}
            >
              Cancelar
            </Button>
          </Modal.Footer>
        </Modal>

        {/*--------------modal eliminar----------------------------*/}
        <Button
          className="btn btn-danger"
          type="button"
          onClick={() => {
            this.props.onModalEliminar();
          }}
        >
          <i className="fa fa-trash"></i>
        </Button>
        <Modal show={this.props.showEliminar}>
          <Modal.Header>Eliminar prodcuto</Modal.Header>
          <Modal.Body>
            ¿Esta seguro que desea eliminar este producto?
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="danger"
              onClick={() => {
                this.props.onModalEliminar();
              }}
            >
              Eliminar
            </Button>
            <Button
              onClick={() => {
                this.props.onModalEliminar();
              }}
            >
              Cancelar
            </Button>
          </Modal.Footer>
        </Modal>
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
