import React from 'react';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import Spinner from 'react-bootstrap/Spinner';

class Destacados extends React.Component {
  render() {
    const elements = this.props.productos.map(item => {
      if (item.destacado) {
        return (
          <Carousel.Item key={item.id}>
            <img className="d-block w-100" src={item.imgUrl} alt={item.nombre} style={{maxHeight: "450px", objectFit: "contain"}}></img>
            <Carousel.Caption>
              <h2>{item.nombre}</h2>
              <p>{item.descripcion}</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      }
      return;
    });

    if (this.props.isLoaded) {
      return (
        <Container>
          <Carousel>
            {elements}
          </Carousel>
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

export default Destacados;