import React from 'react';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import ItemCarro from './ItemCarro.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

function Carro(props) {
  let i = 0, precioTotal = 0, cantTotal = 0;
  let itemsCarro = props.carro.map((item) => {
    precioTotal += item.producto.precio * item.cantidad;
    cantTotal += item.cantidad;
    return (
      <ItemCarro key={i++} item={item} eliminarDeCarro={props.eliminarDeCarro}/>
    );
  });
  return (
    <OverlayTrigger trigger="click" key="bottom" placement="bottom" rootClose overlay={
      <Popover id="popover-positioned-bottom" style={{backgroundColor:"rgba(230, 167, 86, 0.82)", maxWidth: "700px"}}>
        <Popover.Content>
          <h3><b>Carro</b></h3>
          <Table responsive>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Cantidad</th>
                <th>Precio</th>
                <th>Eliminar</th>
              </tr>
            </thead>
            <tbody>
              {itemsCarro}
            </tbody>
          </Table>
          <h3>Total: ${precioTotal}</h3>
          <Button disabled={props.carro.length === 0} className="m-2">Confirmar pedido</Button>
        </Popover.Content>
      </Popover>
      }
    >
      <Button>
        <Container>
          <Row>
            <FontAwesomeIcon icon={faShoppingBasket} className="m-1"/>
            <h5 className="m-1">{cantTotal}</h5>
          </Row>
        </Container>
      </Button>
    </OverlayTrigger>
  );
}

export default Carro;
