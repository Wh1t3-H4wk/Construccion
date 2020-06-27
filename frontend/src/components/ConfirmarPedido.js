import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import TablaConfirmarPedido from "./TablaConfirmarPedido";

class ConfirmarPedido extends Component {
  constructor(props) {
    super(props);
    this.state = { instruccionesPreparacion: "" };
  }

  componentDidMount() {
    console.log(this.props);
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
              <Col>Cupon de Descuento</Col>
            </Row>
            <Button className="float-right">Confirmar</Button>
          </Form>
        </Container>
      </Container>
    );
  }
}

export default ConfirmarPedido;
