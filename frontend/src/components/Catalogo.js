import React from 'react';
import Destacados from './Destacados.js';
import Productos from './Productos.js';

class Catalogo extends React.Component {
  componentDidMount() {
    document.title = "Cafetería Donde José Billar - Productos";
  }

  render() {
    return (
      <>
        <Destacados productos={this.props.productos} isLoaded={this.props.isLoaded}/>
        <Productos isAdmin={this.props.isAdmin} productos={this.props.productos} isLoaded={this.props.isLoaded} anadirACarro={this.props.anadirACarro} actualizarProductos={this.props.actualizarProductos}/>
      </>
    );
  }
}

export default Catalogo;
