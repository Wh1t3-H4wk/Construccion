import React, { Component } from "react";
import { Button, Modal, Form } from "react-bootstrap";

class Producto extends Component {
  constructor() {
    super();
    this.state = {
      showEdit: false,
      showEliminar: false,
      estado: false,
    };
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

            {/*-----------------modal editar-----------------------*/}
            <Button
              onClick={() => {
                this.handleModalEdit();
              }}
            >
              edit
            </Button>
            <Modal show={this.state.showEdit}>
              <Modal.Header>Editar producto</Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group controlId="formNombre">
                    <Form.Label>nombre</Form.Label>
                    <Form.Control
                      type="text"
                      value={this.props.producto.nombre}
                    />
                  </Form.Group>
                  <Form.Group controlId="formPrecio">
                    <Form.Label>precio</Form.Label>
                    <Form.Control
                      type="text"
                      value={this.props.producto.precio}
                    />
                  </Form.Group>
                  <Form.Group controlId="Descripcion">
                    <Form.Label>Descripcion</Form.Label>
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
                    this.handleModalEdit();
                  }}
                >
                  aplicar cambios
                </Button>
                <Button
                  onClick={() => {
                    this.handleModalEdit();
                  }}
                >
                  cancelar
                </Button>
              </Modal.Footer>
            </Modal>

            {/*--------------modal eliminar----------------------------*/}
            <Button
              variant="danger"
              onClick={() => {
                this.handleModalEliminar();
              }}
            >
              eliminar
            </Button>
            <Modal show={this.state.showEliminar}>
              <Modal.Header>Eliminar prodcuto</Modal.Header>
              <Modal.Body>
                Esta seguro que desea eliminar este producto
              </Modal.Body>
              <Modal.Footer>
                <Button
                  variant="danger"
                  onClick={() => {
                    this.handleModalEliminar();
                  }}
                >
                  eliminar
                </Button>
                <Button
                  onClick={() => {
                    this.handleModalEliminar();
                  }}
                >
                  cancelar
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
          <Form>
            <Form.Check
              type="checkbox"
              className="mb-2 mr-sm-2"
              id="visibleCheck"
              value={this.props.producto.Disponible}
              label="Visible"
            />
          </Form>
        </div>
      </div>
    );
  }
}

export default Producto;
