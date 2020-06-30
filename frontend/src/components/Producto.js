import React from 'react';
import Card from 'react-bootstrap/Card';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import EditarProducto from './EditarProducto.js';
import EliminarProducto from './EliminarProducto.js';
import AnadirACarro from './AnadirACarro.js';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';

class Producto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {modal: false};
    this.handleAnadirACarro = this.handleAnadirACarro.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  handleAnadirACarro(cant) {
    this.props.anadirACarro({producto: this.props.producto, cantidad: cant});
  }

  toggle() {
    this.setState(prevState => ({modal: !prevState.modal}));
  }

  render() {
    return (
      <>
        <Card id={"producto" + this.props.producto.id } className="m-4" style={!this.props.producto.disponible ? {opacity: '.4', width: '18rem'} : { width: '18rem' }}>
          <Card.Img variant="top" src={this.props.producto.imgUrl} style={{maxHeight: "250px", objectFit: "contain", cursor: "pointer"}} onClick={this.toggle}/>
          <Card.Body style={{cursor: "pointer"}}onClick={this.toggle}>
            <Card.Title>{this.props.producto.nombre}</Card.Title>
            <Card.Subtitle>${this.props.producto.precio}</Card.Subtitle>
          </Card.Body>
          <Card.Footer>
            {
              this.props.isAdmin && <ButtonGroup className="float-right">
                <EditarProducto producto={this.props.producto} actualizarProductos={this.props.actualizarProductos}/>
                <EliminarProducto idProducto={this.props.producto.id} nombre={this.props.producto.nombre} actualizarProductos={this.props.actualizarProductos}/>
              </ButtonGroup>
            }
            <AnadirACarro disponible={this.props.producto.disponible} anadir={this.handleAnadirACarro}/>
          </Card.Footer>
        </Card>

        <Modal show={this.state.modal} onHide={this.toggle}>
            <Modal.Header closeButton>
              <Modal.Title>{this.props.producto.nombre}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Image src={this.props.producto.imgUrl} thumbnail/>
                <Container className="p-3">
                <h5>{this.props.producto.descripcion}</h5>
                </Container>
            </Modal.Body>
            <Modal.Footer>
              <AnadirACarro disponible={this.props.producto.disponible} anadir={this.handleAnadirACarro}/>
            </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default Producto;
