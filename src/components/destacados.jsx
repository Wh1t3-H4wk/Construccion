import React, { Component } from "react";
import Producto from "./producto";

const container = {
  backgroundColor: "rgba(230, 167, 86, 0.82)",
};

const sectionHeadingUpperStyle = {
  color: "rgb(230, 230, 230)",
  fontSize: "15px",
};

const sectionHeadingLowerStyle = {
  color: "rgb(239, 239, 239)",
  fontSize: "42px",
};

class Destacados extends Component {
  state = {
    destacados: [
      {
        id: 0,
        img: "assets/img/products-02.jpg",
        nombre: "Bebida 1",
        precio: "2500",
      },
      {
        id: 1,
        img: "assets/img/products-02.jpg",
        nombre: "Bebida 2",
        precio: "2600",
      },
      {
        id: 2,
        img: "assets/img/products-02.jpg",
        nombre: "Bebida 3",
        precio: "2400",
      },
    ],
  };

  render() {
    return (
      <section className="page-section">
        <div className="container">
          <div className="product-item">
            <div className="d-flex product-item-title">
              <div
                className="d-flex mr-auto bg-faded p-5 rounded"
                style={container}
              >
                <h2 className="section-heading mb-0">
                  <span
                    className="section-heading-upper"
                    style={sectionHeadingUpperStyle}
                  >
                    Déjate Impresionar
                  </span>
                  <span
                    className="section-heading-lower"
                    style={sectionHeadingLowerStyle}
                  >
                    Destacados
                  </span>
                </h2>
              </div>
            </div>
            <div className="bg-faded p-5 rounded">
              <div className="card-group">
                {this.state.destacados.map((producto) => (
                  <Producto key={producto.id} producto></Producto>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Destacados;
