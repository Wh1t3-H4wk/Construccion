import React from 'react';
import ListaDestacados from './ListaDestacados';
import Container from 'react-bootstrap/Container';

function Destacados(props) {
  return (
    <Container className="page-section">
      <div className="product-item">
        <div className="d-flex product-item-title">
          <div className="d-flex mr-auto bg-faded p-5 rounded" style={{backgroundColor: "rgba(230, 167, 86, 0.82)"}}>
            <h2 className="section-heading mb-0">
              <span className="section-heading-upper" style={{color: "rgb(230, 230, 230)",fontSize: "15px"}}>Déjate Impresionar</span>
              <span className="section-heading-lower" style={{color: "rgb(239, 239, 239)",fontSize: "42px"}}>Destacados</span>
            </h2>
          </div>
        </div>
      </div>
      <Container className="bg-faded p-5 rounded">
        <ListaDestacados isLoaded={props.isLoaded} productos={props.productos}/>
      </Container>
    </Container>
  );
}

export default Destacados;