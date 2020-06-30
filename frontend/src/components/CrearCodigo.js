import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import InputGroup from 'react-bootstrap/InputGroup';

class CrearCodigo extends React.Component {
  constructor(props) {
    super();
    this.state = {
      modal: false, isDescuentoInvalid: true ,desc:""
    };
    this.toggle = this.toggle.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  toggle() {
    this.setState(prevState => ({modal: !prevState.modal}));
  }

  handleDescuentoChange = (e) => {
    let value = e.target.value;
    this.setState({ desc: value }, () => this.handleValDescuento());
  };

  handleValDescuento = () => {
    let value = !(parseInt(this.state.desc)<= 100 && parseInt(this.state.desc)> 0);
    this.setState({ isDescuentoInvalid: value });
  };

  async onSubmit(e) {
    e.preventDefault();
    const form = e.target;
    await axios.post('http://localhost:5001/Codigo', {
        "name": form.nombre.value,
        "descuento":parseInt(form.descuento.value),
    });
    this.toggle();
    this.props.actualizarCodigo();
    
  }

  render() {
    return (
      <>
        <Button className="pull-right" variant="info" onClick={this.toggle}>
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
              <Form.Group controlId="descuento">
                <Form.Label>Descuento</Form.Label>
                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text>%</InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control 
                  type="text" 
                  placeholder="Descuento" 
                  required
                  onChange={this.handleDescuentoChange}
                  isInvalid={this.state.isDescuentoInvalid}/>
                </InputGroup>
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button type="submit" disabled={this.state.isDescuentoInvalid}>Crear Codigo</Button>
              <Button onClick={this.toggle}>Cancelar</Button>
            </Modal.Footer>
          </Form>
        </Modal>
      </>
    );
  }
}

export default CrearCodigo;
