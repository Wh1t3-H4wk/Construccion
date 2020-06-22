import React from 'react';
import Destacados from './Destacados.js';
import Productos from './Productos.js';
import axios from 'axios';

class Catalogo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productos: [],
      isLoaded: false
    };
    this.actualizarProductos = this.actualizarProductos.bind(this);
  }

  async getListaProductos() {
    await axios.get('http://localhost:5001/Producto').then((response) => {
      this.setState({
        productos: response.data,
        isLoaded: true
      });
    });
  }

  actualizarProductos() {
    this.setState({isLoaded: false});
    this.getListaProductos();
  }

  componentDidMount() {
    this.getListaProductos();
  }

  render() {
    return (
      <>
        <Destacados productos={this.state.productos} isLoaded={this.state.isLoaded}/>
        <Productos productos={this.state.productos} isLoaded={this.state.isLoaded} actualizarProductos={this.actualizarProductos}/>
      </>
    );
  }
}

export default Catalogo;
