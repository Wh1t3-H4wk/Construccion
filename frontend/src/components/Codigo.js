import React from 'react';
import EliminarCodigo from './EliminarCodigo.js'

class Codigo extends React.Component {
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
