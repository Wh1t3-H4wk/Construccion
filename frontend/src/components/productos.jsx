import React, { Component } from "react";
import Destacados from "./destacados";
import Catalogo from "./catalogo";

class Productos extends Component {
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
    productos: [
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
      {
        id: 3,
        img: "assets/img/products-02.jpg",
        nombre: "Bebida 4",
        precio: "2500",
      },
      {
        id: 4,
        img: "assets/img/products-02.jpg",
        nombre: "Bebida 5",
        precio: "2600",
      },
      {
        id: 5,
        img: "assets/img/products-02.jpg",
        nombre: "Bebida 6",
        precio: "2400",
      },
      {
        id: 6,
        img: "assets/img/products-02.jpg",
        nombre: "Bebida 7",
        precio: "2500",
      },
      {
        id: 7,
        img: "assets/img/products-02.jpg",
        nombre: "Bebida 8",
        precio: "2600",
      },
      {
        id: 8,
        img: "assets/img/products-02.jpg",
        nombre: "Bebida 9",
        precio: "2400",
      },
      {
        id: 9,
        img: "assets/img/products-02.jpg",
        nombre: "Comida 1",
        precio: "2500",
      },
      {
        id: 10,
        img: "assets/img/products-02.jpg",
        nombre: "Comida 2",
        precio: "2600",
      },
      {
        id: 11,
        img: "assets/img/products-02.jpg",
        nombre: "Comida 3",
        precio: "2400",
      },
      {
        id: 12,
        img: "assets/img/products-02.jpg",
        nombre: "Comida 4",
        precio: "2500",
      },
      {
        id: 13,
        img: "assets/img/products-02.jpg",
        nombre: "Comida 5",
        precio: "2600",
      },
      {
        id: 14,
        img: "assets/img/products-02.jpg",
        nombre: "Comida 6",
        precio: "2400",
      },
      {
        id: 15,
        img: "assets/img/products-02.jpg",
        nombre: "Comida 7",
        precio: "2500",
      },
      {
        id: 16,
        img: "assets/img/products-02.jpg",
        nombre: "Comida 8",
        precio: "2600",
      },
      {
        id: 17,
        img: "assets/img/products-02.jpg",
        nombre: "Comida 9",
        precio: "2400",
      },
    ],
  };
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
