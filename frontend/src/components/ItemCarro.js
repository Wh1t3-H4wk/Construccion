import React from 'react';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

class ItemCarro extends React.Component {
  constructor(props) {
    super(props);
    this.handleEliminarDeCarro = this.handleEliminarDeCarro.bind(this);
  }

  handleEliminarDeCarro() {
    this.props.eliminarDeCarro(this.props.item.producto.id);
  }

  render() {
    const item = this.props.item;
    return (
      <tr key={item.producto.id}>
        <td>{item.producto.nombre}</td>
        <td>{item.cantidad}</td>
        <td>${item.producto.precio * item.cantidad}</td>
        <td>
          <Button variant="danger" onClick={this.handleEliminarDeCarro}>
            <FontAwesomeIcon icon={faTrash}/>
          </Button>
        </td>
      </tr>
    );
  }
}

export default ItemCarro;
