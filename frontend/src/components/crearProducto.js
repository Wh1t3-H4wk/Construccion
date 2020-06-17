import React from 'react';
import {Container, Button, Modal, Form} from 'react-bootstrap';
import axios from 'axios';

class CrearProducto extends React.Component {
  constructor(props) {
    super();
    
    this.state = {
      modal: false
    }

    this.toggle = this.toggle.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  async onSubmit(e) {
    e.preventDefault();
    let form = e.target;
    await axios.post('http://localhost:5001/Producto', {
      "nombre": form.formNombre.value,
      //"imgUrl": form.imagen.files[0],
      "imgURL": "https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_of_BTS.png",
      "descripcion": form.formDescripcion.value,
      "precio": parseInt(form.formPrecio.value),
      "categoria": "bebestible",
      "disponible": true,
      "destacado": false,
      "eliminado": false
    });
    this.toggle();
  }

  render() {
    return (
      <Container>
        <Button onClick={this.toggle}>Crear producto</Button>

        <Modal show={this.state.modal} onHide={this.toggle}>
          <Modal.Header>Crear Producto</Modal.Header>
          <Form onSubmit={this.onSubmit}>
            <Modal.Body>
              <Form.Group controlId="formNombre">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="Nombre" required/>
              </Form.Group>
              <Form.Group controlId="formPrecio">
                <Form.Label>Precio</Form.Label>
                <Form.Control type="text" placeholder="Precio" required/>
              </Form.Group>
              <Form.Group controlId="formDescripcion">
                <Form.Label>Descripción</Form.Label>
                <Form.Control as="textarea" rows="3" placeholder="Descripción" required/>
              </Form.Group>
              <Form.Group controlId="formImagen">
                <Form.File id="imagen" label="Imagen"></Form.File>
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button type="submit">Crear producto</Button>
              <Button onClick={this.toggle}>Cancelar</Button>
            </Modal.Footer>
          </Form>
        </Modal>
      </Container>
    );
  }
}

export default CrearProducto;