import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import TablaConfirmarPedido from "./TablaConfirmarPedido";
import axios from 'axios';
import ConfirmarCodigo from "./ConfirmarCodigo.js"
import Alert from 'react-bootstrap/Alert'

class ConfirmarPedido extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      instruccionesPreparacion: "", 
      descuento: "0",
      codigoAplicado:false,
      first:false,
      cod:"",
      
    };
    this.ConfCodigo= this.ConfCodigo.bind(this);
  }

  componentDidMount() {
    console.log(this.props);
  }
  
  async ConfCodigo(codigo) {
    if(this.state.codigoAplicado){
      alert('Ya se ingreso un codigo de descuento');
      
    }
    else{
      try{
        await axios.get('http://localhost:5001/Codigo/'+ codigo).then((response) => {
            this.setState({
                codi: response.data.name,
                descuento: response.data.descuento,
              
            });
        });
        
        if(parseInt(this.state.descuento)>=1){
          this.state.codigoAplicado= true;
          alert('Codigo de descuento aceptado');
        }
        else{
          alert('Codigo de descuento invalido');
        }
      }catch (err) {
        alert('Codigo de descuento invalido');
      } 
    }
  }

  render() {
    return (
      <Container className="page-selection">
        <Container
          className="bg-faded p-5 rounded"
          style={{ maxWidth: "100%" }}
        >
          <Form>
            <Row>
              <Col>
                <TablaConfirmarPedido
                  carro={this.props.carro}
                  eliminarDeCarro={this.props.eliminarDeCarro}
                />
              </Col>
              <Col>Resumen de Pedido</Col>
            </Row>
            <Row>
              <Col>
                <Form.Group controlId="instrucciones">
                  <Form.Label className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">
                    Instrucciones Adicionales
                  </Form.Label>
                  <div className="p-4">
                    <p className="font-italic mb-4">
                      Si tiene instrucciones adicionales sobre preparación o
                      despacho, escribalas aquí.
                    </p>
                    <Form.Control as="textarea" cols="30" rows="2" />
                  </div>
                </Form.Group>
              </Col>
              <Col>
                Cupon de Descuento
                <ConfirmarCodigo
                  ConfCodigo={this.ConfCodigo}
                  codigoAplicado={this.codigoAplicado}
                  />
                  
              </Col>
            </Row>
            <Button className="float-right">Confirmar</Button>
          </Form>
        </Container>
      </Container>
    );
  }
}

export default ConfirmarPedido;
