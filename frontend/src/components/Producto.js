import React from 'react';
import Card from 'react-bootstrap/Card';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import EditarProducto from './EditarProducto.js';
import EliminarProducto from './EliminarProducto.js';

function Producto(props) {
  return (
    <Card className="m-4" style={!props.disponible ? {opacity: '.4', width: '18rem'} : { width: '18rem' }}>
      <Card.Img variant="top" src={props.imgUrl} style={{maxHeight: "250px", objectFit: "contain"}}/>
      <Card.Body>
        <Card.Title>{props.nombre}</Card.Title>
        <Card.Subtitle>${props.precio}</Card.Subtitle>
      </Card.Body>
      <Card.Footer>
        <ButtonGroup className="float-right">
          <EditarProducto id={props.id} nombre={props.nombre} precio={props.precio} descripcion={props.descripcion} categoria={props.categoria} disponible={props.disponible} destacado={props.destacado} actualizarProductos={props.actualizarProductos}/>
          <EliminarProducto id={props.id} nombre={props.nombre} actualizarProductos={props.actualizarProductos}/>
        </ButtonGroup>
      </Card.Footer>
    </Card>
  );
}

export default Producto;