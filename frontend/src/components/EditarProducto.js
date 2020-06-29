import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

class EditarProducto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {modal: false};
    this.toggle = this.toggle.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  toggle() {
    this.setState(prevState => ({modal: !prevState.modal}));
  }

  async onSubmit(e) {
    e.preventDefault();
    const form = e.target;
    await axios.put('http://localhost:5001/Producto/' + this.props.producto.id, {
      "id": this.props.producto.id,
      "nombre": form.nombre.value,
      //"imgUrl": form.imagen.files[0],
      "imgURL": "https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_of_BTS.png",
      "descripcion": form.descripcion.value,
      "precio": parseInt(form.precio.value),
      "categoria": form.categoria.value,
      "disponible": form.disponible.checked,
      "destacado": form.destacado.checked,
      "eliminado": false
    });
    this.toggle();
    this.props.actualizarProductos();
  }

  render() {
    return (
      <>
        <Button onClick={this.toggle}>
          <FontAwesomeIcon icon={faEdit}/>
        </Button>

        <Modal show={this.state.modal} onHide={this.toggle}>
          <Modal.Header>Editar producto {this.props.producto.nombre}</Modal.Header>
          <Form onSubmit={this.onSubmit}>
            <Modal.Body>
              <Form.Group controlId="nombre">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="Nombre" defaultValue={this.props.producto.nombre} maxLength="30" required/>
              </Form.Group>
              <Form.Group controlId="precio">
                <Form.Label>Precio</Form.Label>
                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text>$</InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control type="text" placeholder="Precio" defaultValue={this.props.producto.precio} required/>
                </InputGroup>
              </Form.Group>
              <Form.Group controlId="descripcion">
                <Form.Label>Descripción</Form.Label>
                <Form.Control as="textarea" rows="2" placeholder="Descripción" defaultValue={this.props.producto.descripcion} maxLength="120" required/>
              </Form.Group>
              <Form.Group controlId="categoria">
                <Form.Label>Categoría</Form.Label>
                <Form.Control as="select" defaultValue={this.props.producto.categoria}>
                  <option>Bebestible</option>
                  <option>Comestible</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="imagen">
                <Form.File id="imagen" label="Imagen"></Form.File>
              </Form.Group>
              <Form.Check type="switch" label="Disponible" id="disponible" defaultChecked={this.props.producto.disponible}/>
              <Form.Check type="switch" label="Destacado" id="destacado" defaultChecked={this.props.producto.destacado}/>
            </Modal.Body>
            <Modal.Footer>
              <Button type="submit">Editar producto</Button>
              <Button onClick={this.toggle}>Cancelar</Button>
            </Modal.Footer>
          </Form>
        </Modal>
      </>
    );
  }
}

export default EditarProducto;
