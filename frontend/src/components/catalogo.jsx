import React, { Component } from "react";
import Producto from "./producto";

class Catalogo extends Component {
  state = {
    pagina: 0,
    numProductos: 12,
  };

  rebanarProductos = () => {
    const pagina = this.state.pagina;
    const numProductos = this.state.numProductos;
    let sliced = this.props.productos.slice(
      pagina * numProductos,
      pagina * numProductos + numProductos
    );

    let content = [];

    for (let index = 0; index < sliced.length; index += 3) {
      let subslice = sliced.slice(index, index + 3);
      console.log(subslice);
      content.push(
        <div className="card-group" key={index}>
          {subslice.map((producto) => (
            <Producto
              key={producto.id}
              producto={producto}
              enDestacado={false}
            />
          ))}
        </div>
      );
    }

    return <React.Fragment>{content}</React.Fragment>;
  };

  handleCantProd = (e) => {
    this.setState({ numProductos: e.target.value });
  };

  bottomNavBar = () => {
    return (
      <nav className="float-right">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" aria-label="Previous">
              <span aria-hidden="true">«</span>
            </a>
          </li>
          <li className="page-item">
            <a className="page-link">1</a>
          </li>
          <li className="page-item">
            <a className="page-link">2</a>
          </li>
          <li className="page-item">
            <a className="page-link">3</a>
          </li>
          <li className="page-item">
            <a className="page-link">4</a>
          </li>
          <li className="page-item">
            <a className="page-link">5</a>
          </li>
          <li className="page-item">
            <a className="page-link" aria-label="Next">
              <span aria-hidden="true">»</span>
            </a>
          </li>
        </ul>
      </nav>
    );
  };

  render() {
    return (
      <section className="page-section">
        <div className="container">
          <div className="product-item">
            <div className="d-flex product-item-title">
              <div
                className="d-flex ml-auto bg-faded p-5 rounded"
                style={{ backgroundColor: "rgba(230,167,86,0.82)" }}
              >
                <h2 className="section-heading mb-0">
                  <span
                    className="section-heading-upper"
                    style={{ color: "rgb(230,230,230)", fontSize: "15px" }}
                  >
                    Hechos con dedicación
                  </span>
                  <span
                    className="section-heading-lower"
                    style={{
                      color: "rgb(239,239,239)",
                      fontSize: "42px",
                    }}
                  >
                    Nuestros Productos
                  </span>
                </h2>
              </div>
            </div>
            <div className="bg-faded p-5 rounded">
              <div className="row">
                <div className="col">
                  <div>
                    <select
                      style={{
                        marginTop: "7px",
                      }}
                      value={this.state.numProductos}
                      onChange={this.handleCantProd}
                    >
                      <option value="12">12</option>
                      <option value="24">24</option>
                      <option value="48">48</option>
                    </select>
                  </div>
                </div>
                <div className="col">
                  <div>
                    <button
                      className="btn btn-primary float-right"
                      type="button"
                    >
                      <i className="fa fa-search"></i>
                    </button>
                    <input
                      type="search"
                      className="float-right"
                      placeholder="Buscar..."
                      style={{
                        width: "134px",
                        height: "37px",
                      }}
                    />
                  </div>
                </div>
              </div>
              {this.rebanarProductos()}
              {this.bottomNavBar()}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Catalogo;
