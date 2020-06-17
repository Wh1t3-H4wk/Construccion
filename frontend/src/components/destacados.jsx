import React, { Component } from "react";
import Producto from "./producto";

class Destacados extends Component {
  state = {};

  render() {
    return (
      <section className="page-section">
        <div className="container">
          <div className="product-item">
            <div className="d-flex product-item-title">
              <div
                className="d-flex mr-auto bg-faded p-5 rounded"
                style={{
                  backgroundColor: "rgba(230, 167, 86, 0.82)",
                }}
              >
                <h2 className="section-heading mb-0">
                  <span
                    className="section-heading-upper"
                    style={{
                      color: "rgb(230, 230, 230)",
                      fontSize: "15px",
                    }}
                  >
                    Déjate Impresionar
                  </span>
                  <span
                    className="section-heading-lower"
                    style={{
                      color: "rgb(239, 239, 239)",
                      fontSize: "42px",
                    }}
                  >
                    Destacados
                  </span>
                </h2>
              </div>
            </div>
            <div className="bg-faded p-5 rounded">
              <div className="card-group">
                {this.props.destacados.map((producto) => (
                  <Producto
                    key={producto.id}
                    producto={producto}
                    enDestacado={true}
                  ></Producto>
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
