import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import CrearCodigo from './CrearCodigo.js'
class Codigos extends Component {
    render() {
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
                    <Form.Control type="text" id="buscar" placeholder="Buscar" onChange={this.buscar}/>
                    </Form.Group>
                    <Form.Group as={Col}>
                      <CrearCodigo/>
                    </Form.Group>
                </Form.Row>
                
                </Container>
            </Container>
        );
    }
}
export default Codigos;