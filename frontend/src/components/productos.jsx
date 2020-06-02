import React, { Component } from "react";
import Destacados from "./destacados";
import Catalogo from "./catalogo";

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
  componentDidMount() {
    fetch("http://localhost:5001/producto")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log("resultado:");
          console.log(result);
          this.setState({
            isLoaded: true,
            productos: result.items,
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
    fetch("http://localhost:5001/producto/destacado")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            destacados: result.items,
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
  render() {
    return (
      <React.Fragment>
        <Destacados destacados={this.state.destacados} />
        <Catalogo productos={this.state.productos} />
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
