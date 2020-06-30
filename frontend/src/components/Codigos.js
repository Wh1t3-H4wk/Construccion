import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import CrearCodigo from './CrearCodigo.js'
import Table from 'react-bootstrap/Table';
import Codigo from "./Codigo.js";
import axios from 'axios';

class Codigos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      codigos: [],
      buscar:""
    }
    this.actualizarCodigo=this.actualizarCodigo.bind(this);
    this.buscar = this.buscar.bind(this);
  }

  buscar(e) {
    this.setState({ buscar: e.target.value });
    
  }

  actualizarCodigo() {
    this.setState({isLoaded: false});
    this.getListaCodigos();
  }
  async getListaCodigos() {
    await axios.get('https://cafeteriaapi.herokuapp.com/Codigo').then((response) => {
      this.setState({
        codigos: response.data,
        isLoaded: true
      });
      
    });
  }

  componentDidMount() {
    this.getListaCodigos();
  }

    render() {
      let itemsCodigo = this.state.codigos.map((item) => {
        return (
          
          <Codigo item={item} actualizarCodigo={this.actualizarCodigo}/>
        );
      });
        return (
        <Container className="page-section">
            <div className="product-item">
              <div className="d-flex product-item-title">
                <div className="d-flex mr-auto bg-faded p-5 rounded" style={{backgroundColor: "rgba(230, 167, 86, 0.82)"}}>
                  <h2 className="section-heading mb-0">
                    
                    <span className="section-heading-lower" style={{color: "rgb(239, 239, 239)",fontSize: "42px"}}>Codigos de descuento</span>
                  </h2>
                </div>
              </div>
            </div>
            <Container className="bg-faded p-5 rounded">
                <Form.Row className="p-3">
                    
                    <Form.Group as={Col}>
                    <Form inline className="justify-content-end">
                      <Form.Control type="text" id="buscar" placeholder="Buscar" onChange={this.buscar}/> 
                      </Form>
                    </Form.Group>
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