import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSpinner } from '@fortawesome/free-solid-svg-icons';
import InputGroup from 'react-bootstrap/InputGroup';

class CrearProducto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {modal: false, clicked: false};
    this.toggle = this.toggle.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  toggle() {
    this.setState((prevState) => ({ modal: !prevState.modal }));
  }

  toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  async onSubmit(e) {
    e.preventDefault();
    this.setState({clicked: true});
    const form = e.target;
    await axios.post("https://cafeteriaapi.herokuapp.com/Producto", {
      nombre: form.nombre.value,
      imgUrl: await this.toBase64(form.imagen.files[0]),
      descripcion: form.descripcion.value,
      precio: parseInt(form.precio.value),
      categoria: form.categoria.value,
      disponible: form.disponible.checked,
      destacado: form.destacado.checked,
      eliminado: false,
    });
    this.toggle();
    this.props.actualizarProductos();
  }

  render() {
    return (
      <>
        <Button variant="info" onClick={this.toggle}>
          <FontAwesomeIcon icon={faPlus} />
        </Button>

        <Modal show={this.state.modal} onHide={this.toggle}>
          <Modal.Header closeButton>
            <Modal.Title>Crear Producto</Modal.Title>
          </Modal.Header>
          <Form onSubmit={this.onSubmit}>
            <Modal.Body>
              <Form.Group controlId="nombre">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="Nombre" maxLength="30" required/>
              </Form.Group>
              <Form.Group controlId="precio">
                <Form.Label>Precio</Form.Label>
                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text>$</InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control type="text" placeholder="Precio" required />
                </InputGroup>
              </Form.Group>
              <Form.Group controlId="descripcion">
                <Form.Label>Descripción</Form.Label>
                <Form.Control as="textarea" rows="2" placeholder="Descripción" maxLength="120" required/>
              </Form.Group>
              <Form.Group controlId="categoria">
                <Form.Label>Categoría</Form.Label>
                <Form.Control as="select">
                  <option>Bebestible</option>
                  <option>Comestible</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="imagen">
                <Form.File id="imagen" label="Imagen" required/>
              </Form.Group>
              <Form.Check type="switch" label="Disponible" id="disponible" defaultChecked={true}/>
              <Form.Check type="switch" label="Destacado" id="destacado"/>
            </Modal.Body>
            <Modal.Footer>
              <Button type="submit" onClick={this.handleOnClick}>{this.state.clicked ? <FontAwesomeIcon icon={faSpinner}/> : "Crear producto"}</Button>
              <Button onClick={this.toggle}>Cancelar</Button>
            </Modal.Footer>
          </Form>
        </Modal>
      </>
    );
  }
}

export default CrearProducto;
