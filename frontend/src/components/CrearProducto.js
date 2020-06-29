import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import InputGroup from 'react-bootstrap/InputGroup';

class CrearProducto extends React.Component {
  constructor(props) {
    super();
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
    await axios.post('http://localhost:5001/Producto', {
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
        <Button variant="info" onClick={this.toggle}>
          <FontAwesomeIcon icon={faPlus}/>
        </Button>

        <Modal show={this.state.modal} onHide={this.toggle}>
          <Modal.Header>Crear Producto</Modal.Header>
          <Form onSubmit={this.onSubmit}>
            <Modal.Body>
              <Form.Group controlId="nombre">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="Nombre" required/>
              </Form.Group>
              <Form.Group controlId="precio">
                <Form.Label>Precio</Form.Label>
                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text>$</InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control type="text" placeholder="Precio" required/>
                </InputGroup>
              </Form.Group>
              <Form.Group controlId="descripcion">
                <Form.Label>Descripción</Form.Label>
                <Form.Control as="textarea" rows="2" placeholder="Descripción" required/>
              </Form.Group>
              <Form.Group controlId="categoria">
                <Form.Label>Categoría</Form.Label>
                <Form.Control as="select">
                  <option>Bebestible</option>
                  <option>Comestible</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="imagen">
                <Form.File id="imagen" label="Imagen"/>
              </Form.Group>
              <Form.Check type="switch" label="Disponible" id="disponible" defaultChecked="true"/>
              <Form.Check type="switch" label="Destacado" id="destacado" defaultChecked={this.props.destacado}/>
            </Modal.Body>
            <Modal.Footer>
              <Button type="submit">Crear producto</Button>
              <Button onClick={this.toggle}>Cancelar</Button>
            </Modal.Footer>
          </Form>
        </Modal>
      </>
    );
  }
}

export default CrearProducto;
