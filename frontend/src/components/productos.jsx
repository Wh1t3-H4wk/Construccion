import React, { Component } from "react";
import Destacados from "./destacados";
import Catalogo from "./catalogo";
import Axios from "axios";

class Productos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      productos: [],
      destacados: [],
    };
  }

  fetchListaProductos() {
    fetch("http://localhost:5001/producto")
      .then((res) => res.json())
      .then(
        (result) => {
          let prods = [];
          result.forEach((element) => {
            prods.push(element);
          });
          console.log("resultado:");
          console.log(result);
          this.setState({
            isLoaded: true,
            productos: prods,
          });
        },
        // Nota: es importante manejar errores aquí y no en
        // un bloque catch() para que no interceptemos errores
        // de errores reales en los componentes.
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  fetchListaDestacados() {
    fetch("http://localhost:5001/producto/destacado")
      .then((res) => res.json())
      .then(
        (result) => {
          let prods = [];
          result.forEach((element) => {
            prods.push(element);
          });
          this.setState({
            isLoaded: true,
            destacados: prods,
          });
        },
        // Nota: es importante manejar errores aquí y no en
        // un bloque catch() para que no interceptemos errores
        // de errores reales en los componentes.
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  componentDidMount() {
    this.fetchListaProductos();
    this.fetchListaProductos();
  }

  handleCambiarEstadoDestacado = (producto) => {
    let id = producto.id;
    let value = !producto.destacado;
    (value
      ? Axios.put(`http://localhost:5000/Producto/destacado/${id}`)
      : Axios.delete(`http://localhost:5000/Producto/destacado/${id}`)
    )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })
      .then(() => {
        this.fetchListaProductos();
        this.fetchListaDestacados();
      });
  };

  render() {
    return (
      <React.Fragment>
        <Destacados
          destacados={this.state.destacados}
          onSubmitCambiarDestacado={this.handleCambiarEstadoDestacado}
        />
        <Catalogo
          productos={this.state.productos}
          onSubmitCambiarDestacado={this.handleCambiarEstadoDestacado}
        />
        <section className="page-section">
          <div className="container">
            <div className="product-item"></div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
export default Productos;
