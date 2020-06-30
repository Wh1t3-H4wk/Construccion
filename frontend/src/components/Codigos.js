import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import CrearCodigo from './CrearCodigo.js'
import Table from 'react-bootstrap/Table';
import Codigo from './Codigo.js';
import axios from 'axios';

class Codigos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      codigos: [],
    }
    this.actualizarCodigo=this.actualizarCodigo.bind(this);
  }

  actualizarCodigo() {
    this.setState({isLoaded: false});
    this.getListaCodigos();
  }

  async getListaCodigos() {
    await axios.get('http://localhost:5001/Codigo').then((response) => {
      this.setState({
        codigos: response.data,
        isLoaded: true
      });
    });
  }

  componentDidMount() {
    document.title = "Códigos - Cafetería José Billar";
    this.getListaCodigos();
  }

  render() {
    let i = 0;
    let itemsCodigo = this.state.codigos.map((item) => {
      return (
        <Codigo key={i++} item={item} actualizarCodigo={this.actualizarCodigo}/>
      );
    });
    return (
    <Container className="page-section">
      <div className="product-item">
        <div className="d-flex product-item-title">
          <div className="d-flex mr-auto bg-faded p-5 rounded" style={{backgroundColor: "rgba(230, 167, 86, 0.82)"}}>
            <h2 className="section-heading mb-0">
              <span className="section-heading-lower" style={{color: "rgb(239, 239, 239)",fontSize: "42px"}}>Códigos de descuento</span>
            </h2>
          </div>
        </div>
      </div>
      <Container className="bg-faded p-5 rounded">
        <Form.Row className="p-3">
          <Form.Group as={Col}>
            <CrearCodigo actualizarCodigo={this.actualizarCodigo}/>
          </Form.Group>
        </Form.Row>

        <Table responsive>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Descuento</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {itemsCodigo}
          </tbody>
        </Table>
      </Container>
    </Container>
    );
  }
}

export default Codigos;
