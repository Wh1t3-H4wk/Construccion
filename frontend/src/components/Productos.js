import React from 'react';
import ListaProductos from './ListaProductos.js';
import CrearProducto from './CrearProducto.js';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

class Productos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filtrar: 'Todo',
      buscar: '',
    }
    this.categoria = this.categoria.bind(this);
    this.buscar = this.buscar.bind(this);
  }

  categoria(e) {
    this.setState({filtrar: e.target.value});
  }

  buscar(e) {
    this.setState({buscar: e.target.value});
  }

  render() {
    return (
      <Container className="page-section">
        <div className="product-item">
          <div className="d-flex product-item-title">
            <div className="d-flex ml-auto bg-faded p-5 rounded" style={{ backgroundColor: "rgba(230,167,86,0.82)" }}>
              <h2 className="section-heading mb-0">
                <span className="section-heading-upper" style={{ color: "rgb(230,230,230)", fontSize: "15px" }}>Hechos con dedicación</span>
                <span className="section-heading-lower" style={{color: "rgb(239,239,239)", fontSize: "42px"}}>Nuestros Productos</span>
              </h2>
            </div>
          </div>
        </div>
        <Container className="bg-faded p-5 rounded">
          <Form.Row className="p-3">
            <Form.Group as={Col}>
              <Form.Control as="select" id="categoria" onChange={this.categoria}>
                <option>Todo</option>
                <option>Bebestibles</option>
                <option>Comidas</option>
              </Form.Control>
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Control type="text" id="buscar" placeholder="Buscar" onChange={this.buscar}/>
            </Form.Group>
            <Form.Group as={Col}>
              <CrearProducto actualizarProductos={this.actualizarProductos}/>
            </Form.Group>
          </Form.Row>
          <ListaProductos productos={this.props.productos} isLoaded={this.props.isLoaded} filtrar={this.state.filtrar} buscar={this.state.buscar} actualizarProductos={this.props.actualizarProductos}/>
        </Container>
      </Container>   
    );
  }
}

export default Productos;
