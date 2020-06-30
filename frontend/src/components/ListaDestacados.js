import React from "react";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import Spinner from "react-bootstrap/Spinner";

function ListaDestacados(props) {
  if (props.isLoaded) {
    // Create list of elements
    const elements = props.productos.map((item) => {
      if (!item.destacado) return undefined;
      return (
        <Carousel.Item key={item.id}>
          <a href={"#producto" + item.id}>
            <img
              className="d-block w-100"
              src={item.imgUrl}
              alt={item.nombre}
              style={{ maxHeight: "450px", objectFit: "contain"}}
            />
          <Carousel.Caption>
            <h2>{item.nombre}</h2>
            <p>{item.descripcion}</p>
          </Carousel.Caption>
          </a>
        </Carousel.Item>
      );
    });
    // Render for correct load
    return (
      <Container>
        <Carousel>{elements}</Carousel>
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

export default ListaDestacados;
