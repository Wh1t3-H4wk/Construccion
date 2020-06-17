import React from 'react';
import {Container, Button, Modal, Form} from 'react-bootstrap';
import axios from 'axios';
class EditarProducto extends React.Component {
    constructor(props) {
      super();
      
      this.state = {
        modal: false
      }
  
      this.toggle = this.toggle.bind(this);
    }
  
    toggle() {
      this.setState(prevState => ({
        modal: !prevState.modal
      }));
    }
  
    async onSubmit(e) {
      e.preventDefault();
      //agregar codigo para editar
    }
    render() {
        return (
            <Container>
            <Button onClick={this.toggle}>Editar</Button>

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
                    <Button type="submit">aplicar cambios</Button>
                    <Button onClick={this.toggle}>Cancelar</Button>
                </Modal.Footer>
                </Form>
            </Modal>
            </Container>
        );
    }
}
export default EditarProducto;