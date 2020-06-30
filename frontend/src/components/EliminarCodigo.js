import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

class EliminarCodigo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {modal: false};
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({modal: !prevState.modal}));
  }

  async delete() {

    await axios.delete(`https://cafeteriaapi.herokuapp.com/Codigo/${this.props.nameEliminar}`);
    this.toggle();
    this.props.actualizarCodigo();
    
  }

  render() {
    return (
      <>
        <Button variant="danger" onClick={this.toggle}>
          <FontAwesomeIcon icon={faTrash}/>
        </Button>

        <Modal show={this.state.modal} onHide={this.toggle}>
          <Modal.Header>Eliminar Codigo</Modal.Header>
          <Modal.Body>¿Está seguro de que desea eliminar el Codigo "{this.props.nameEliminar}"?</Modal.Body> 
          <Modal.Footer>
            <Button variant="danger" onClick={()=>{this.delete()}}>Eliminar</Button>
            <Button onClick={this.toggle}>Cancelar</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default EliminarCodigo;
