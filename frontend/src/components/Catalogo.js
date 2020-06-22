import React from 'react';
import Destacados from './Destacados.js';
import Productos from './Productos.js'
import ListaProductos from './ListaProductos.js';
import CrearProducto from './CrearProducto.js';
import axios from 'axios';
import Container from 'react-bootstrap/Container';

class Catalogo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productos: [],
      isLoaded: false
    };
    this.actualizarProductos = this.actualizarProductos.bind(this);
  }

  async getListaProductos() {
    await axios.get('http://localhost:5001/Producto').then((response) => {
      this.setState({
        productos: response.data,
        isLoaded: true
      });
    });
  }

  actualizarProductos() {
    this.setState({isLoaded: false});
    this.getListaProductos();
  }

  componentDidMount() {
    this.getListaProductos();
  }

  render() {
    return (
      <>
        <div className="d-flex product-item-title">
          <div className="d-flex mr-auto bg-faded p-5 rounded" style={{backgroundColor: "rgba(230, 167, 86, 0.82)"}}>
            <h2 className="section-heading mb-0">
              <span className="section-heading-upper" style={{color: "rgb(230, 230, 230)",fontSize: "15px"}}>
                Déjate Impresionar
              </span>
              <span className="section-heading-lower" style={{color: "rgb(239, 239, 239)",fontSize: "42px"}}>
                Destacados
              </span>
            </h2>
          </div>
        </div>
        <Container className="bg-faded p-5 rounded">
          <Destacados isLoaded={this.state.isLoaded} productos={this.state.productos}/>
        </Container>
        <section className="page-section">
        <div className="container">
          <div className="product-item">
            <div className="d-flex product-item-title">
              <div className="d-flex ml-auto bg-faded p-5 rounded" style={{ backgroundColor: "rgba(230,167,86,0.82)" }}>
                <h2 className="section-heading mb-0">
                  <span className="section-heading-upper" style={{ color: "rgb(230,230,230)", fontSize: "15px" }}>
                    Hechos con dedicación
                  </span>
                  <span className="section-heading-lower" style={{color: "rgb(239,239,239)", fontSize: "42px"}}>
                    Nuestros Productos
                  </span>
                </h2>
              </div>
            </div>
            <div className="bg-faded p-5 rounded">
              <div className="row">
                <button className="btn btn-primary float-right" type="button">
                  <i className="fa fa-search"></i>
                </button>
                <input type="search" className="float-right" placeholder="Buscar..." style={{width: "134px", height: "37px"}}/>
                <CrearProducto actualizarProductos={this.actualizarProductos}/>
              </div>
              <ListaProductos productos={this.state.productos} isLoaded={this.state.isLoaded} actualizarProductos={this.actualizarProductos}/>
            </div>
          </div>
        </div>
      </section>
      </>
    );
  }
}

export default Catalogo;
