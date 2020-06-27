import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

class ConfirmarPedido extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log(this.props);
  }

  generateItemView = (item) => {
    return (
      <tr key={item.producto.id}>
        <td className="border-0 align-middle">
          <img
            src={item.producto.imgUrl}
            alt=""
            width="100%"
            className="img-fluid rounded shadow-sm"
          />
        </td>
        <td className="border-0 align-middle">
          <div className="ml-3 d-inline-block align-middle">
            <h5 className="mb-0 text-dark d-inline-block align-middle">
              {item.producto.nombre}
            </h5>
            <span className="text-muted font-weight-normal font-italic d-block">
              Categoría: {item.producto.categoria}
            </span>
          </div>
        </td>
        <td className="border-0 align-middle">
          <strong>${item.producto.precio}</strong>
        </td>
        <td className="border-0 align-middle">
          <strong>{item.cantidad}</strong>
        </td>
        <td className="border-0 align-middle">
          <Button
            variant="danger"
            onClick={() => this.props.eliminarDeCarro(item.producto.id)}
          >
            <FontAwesomeIcon icon={faTrash} />
          </Button>
        </td>
      </tr>
    );
  };

  renderTable = () => {
    return (
      <Table responsive="sm">
        <thead>
          <th colspan="2" scope="col" className="border-0 bg-light">
            Producto
          </th>
          <th scope="col" className="border-0 bg-light">
            Precio
          </th>
          <th scope="col" className="border-0 bg-light">
            Cantidad
          </th>
          <th scope="col" className="border-0 bg-light">
            Eliminar
          </th>
        </thead>
        <tbody>
          {this.props.carro.map((item) => this.generateItemView(item))}
        </tbody>
      </Table>
    );
  };

  renderNoTable = () => {
    return (
      <div className="col-xl-p mx-auto">
        <div className="cta-inner rounded">
          <h4 class="section-heading mb-5">
            <span class="section-heading-lower">No hay productos</span>
            <span class="section-heading-upper">
              Puede añadir productos al carro de compras desde el catálogo.
            </span>
          </h4>
        </div>
      </div>
    );
  };

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
                <div>
                  {this.props.carro == 0
                    ? this.renderNoTable()
                    : this.renderTable()}
                </div>
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
