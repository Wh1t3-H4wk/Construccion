import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

class ConfirmarPedido extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log(this.props.carro);
  }

  render() {
    return (
      <Container className="page-selection">
        <Container
          className="bg-faded p-5 rounded"
          style={{ maxWidth: "700px" }}
        >
          <Form>
            <Row>
              <Col>Lista de Productos</Col>
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
