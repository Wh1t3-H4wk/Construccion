import React from 'react';
import Card from 'react-bootstrap/Card';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import EditarProducto from './EditarProducto.js';
import EliminarProducto from './EliminarProducto.js';
import Button from 'react-bootstrap/Button';

class Producto extends React.Component {
  constructor(props) {
    super(props);
    this.handleAnadirACarro = this.handleAnadirACarro.bind(this);
  }

  handleAnadirACarro() {
    this.props.anadirACarro(this.props.producto);
  }

  render() {
    return (
      <Card className="m-4" style={!this.props.producto.disponible ? {opacity: '.4', width: '18rem'} : { width: '18rem' }}>
        <Card.Img variant="top" src={this.props.producto.imgUrl} style={{maxHeight: "250px", objectFit: "contain"}}/>
        <Card.Body>
          <Card.Title>{this.props.producto.nombre}</Card.Title>
          <Card.Subtitle>${this.props.producto.precio}</Card.Subtitle>
        </Card.Body>
        <Card.Footer>
          <Button disabled={!this.props.producto.disponible} onClick={this.handleAnadirACarro}>Añadir al carro</Button>
          {
            this.props.isAdmin && <ButtonGroup className="float-right">
              <EditarProducto producto={this.props.producto} actualizarProductos={this.props.actualizarProductos}/>
              <EliminarProducto idProducto={this.props.producto.id} nombre={this.props.producto.nombre} actualizarProductos={this.props.actualizarProductos}/>
            </ButtonGroup>
          }
        </Card.Footer>
      </Card>
    );
  }
}

export default Producto;
