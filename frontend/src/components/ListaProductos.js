import React from 'react';
import Producto from './Producto.js';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import Row from 'react-bootstrap/Row';

function ListaProductos(props) {
  if (props.isLoaded) {
    // Render for correct load
    let categoria = '';
    if (props.filtrar === 'Bebestibles')
      categoria = 'Bebestible';
    else if (props.filtrar === 'Comestibles')
      categoria = 'Comestible';
  
    const productosFiltrados = [];
    props.productos.forEach((item) => {
      if (item.nombre.toLowerCase().indexOf(props.buscar.toLowerCase()) === -1)
        return;
      if (categoria === '' || categoria === item.categoria) {
        productosFiltrados.push(
          <Producto isAdmin={props.isAdmin} key={item.id} producto={item} anadirACarro={props.anadirACarro} actualizarProductos={props.actualizarProductos}/>
        );
      }
    });

    return (
      <Container>
        <Row>
          {productosFiltrados}
        </Row>
      </Container>
    );
  } else {
    // Render when its not loaded
    return (
      <Container>
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </Container>
    );
  }
}

export default ListaProductos;