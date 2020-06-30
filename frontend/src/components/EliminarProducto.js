import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

class EliminarProducto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {modal: false};
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({modal: !prevState.modal}));
  }

  async delete() {
    await axios.delete(`http://localhost:5001/Producto/${this.props.idProducto}`);
    this.toggle();
    this.props.actualizarProductos();
  }

  render() {
    return (
      <>
        <Button variant="danger" onClick={this.toggle}>
          <FontAwesomeIcon icon={faTrash}/>
        </Button>

        <Modal show={this.state.modal} onHide={this.toggle}>
          <Modal.Header>Eliminar {this.props.nombre}</Modal.Header>
          <Modal.Body>¿Está seguro de que desea eliminar {this.props.nombre}?</Modal.Body> 
          <Modal.Footer>
            <Button variant="danger" onClick={()=>{this.delete()}}>Eliminar</Button>
            <Button onClick={this.toggle}>Cancelar</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default EliminarProducto;
