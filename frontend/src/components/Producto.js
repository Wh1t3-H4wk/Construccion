import React from 'react';
import Card from 'react-bootstrap/Card';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import EditarProducto from './EditarProducto.js';
import EliminarProducto from './EliminarProducto.js';

class Producto extends React.Component {

  render() {
    return (
      <Card style={!this.props.disponible ? {opacity: '.4', minWidth: '18rem', maxWidth: '18rem'} : { minWidth: '18rem', maxWidth: '18rem' }}>
        <Card.Img variant="top" src={this.props.imgUrl}/>
        <Card.Body>
          <Card.Title>{this.props.nombre}</Card.Title>
          <Card.Subtitle>${this.props.precio}</Card.Subtitle>
        </Card.Body>
        <Card.Footer>
          <ButtonGroup className="float-right">
            <EditarProducto id={this.props.id} nombre={this.props.nombre} precio={this.props.precio} descripcion={this.props.descripcion} categoria={this.props.categoria} disponible={this.props.disponible} destacado={this.props.destacado} actualizarProductos={this.props.actualizarProductos}/>
            <EliminarProducto id={this.props.id} nombre={this.props.nombre} actualizarProductos={this.props.actualizarProductos}/>
          </ButtonGroup>
        </Card.Footer>
      </Card>
    );
  }
}

export default Producto;