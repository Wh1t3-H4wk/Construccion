import React from "react";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Table from "react-bootstrap/Table";
import ItemCarro from "./ItemCarro.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Carro(props) {
  let total = 0;
  let itemsCarro = props.carro.map((item) => {
    total += item.producto.precio * item.cantidad;
    return <ItemCarro item={item} eliminarDeCarro={props.eliminarDeCarro} />;
  });
  return (
    <OverlayTrigger
      trigger="click"
      key="bottom"
      placement="bottom"
      rootClose
      overlay={
        <Popover
          id="popover-positioned-bottom"
          style={{
            backgroundColor: "rgba(230, 167, 86, 0.82)",
            maxWidth: "700px",
          }}
        >
          <Popover.Content>
            <h3>
              <b>Carro</b>
            </h3>
            <Table responsive>
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Cantidad</th>
                  <th>Precio</th>
                  <th>Eliminar</th>
                </tr>
              </thead>
              <tbody>{itemsCarro}</tbody>
            </Table>
            <h3>Total: ${total}</h3>
            <Button
              disabled={total === 0}
              className="m-2"
              as={Link}
              to="/confirmarPedido/nacho123@gmail.com"
            >
              Confirmar pedido
            </Button>
          </Popover.Content>
        </Popover>
      }
    >
      <Button>
        <Container>
          <Row>
            <FontAwesomeIcon icon={faShoppingBasket} className="m-1" />
            <h5 className="m-1">{props.carro.length}</h5>
          </Row>
        </Container>
      </Button>
    </OverlayTrigger>
  );
}

export default Carro;
