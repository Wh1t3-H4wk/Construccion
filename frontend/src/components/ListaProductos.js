import React from 'react';
import Producto from './Producto.js';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import CardDeck from 'react-bootstrap/CardDeck';

class ListaProductos extends React.Component {

  render() {
    if (this.props.isLoaded) {
      return (
        <Container>
          <CardDeck>
            {this.props.productos.map(item => (
              <Producto key={item.id} id={item.id} imgUrl={item.imgUrl} nombre={item.nombre} precio={item.precio} descripcion={item.descripcion} categoria={item.categoria} disponible={item.disponible} destacado={item.destacado} actualizarProductos={this.props.actualizarProductos}/>
            ))}
          </CardDeck>
        </Container>
      );
    } else {
      return (
        <Container>
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </Container>
      );
    }
  }
}

export default ListaProductos;