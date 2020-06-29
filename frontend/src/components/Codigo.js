import React from 'react';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import EliminarCodigo from './EliminarCodigo.js'

class Codigo extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <tr key={this.props.item.name}>
        <td>{this.props.item.name}</td>
        <td>{this.props.item.descuento}%</td>
        <td>
          <EliminarCodigo nameEliminar={this.props.item.name} actualizarCodigo={this.props.actualizarCodigo}/>
        </td>
      </tr>
    );
  }
}

export default Codigo;