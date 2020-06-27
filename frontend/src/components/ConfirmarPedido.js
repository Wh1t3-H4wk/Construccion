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
    this.state = {};
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
              <Col>Instrucciones de Preparacion</Col>
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
