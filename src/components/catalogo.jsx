import React, { Component } from "react";

class Catalogo extends Component {
  state = {
    pagina: 0,
    numProductos: 10,
  };

  rebanarProductos = () => {};

  handleCantProd = (e) => {
    this.state.numProductos = e.target.value;
  };

  bottomNavBar = () => {
    return (
      <nav class="float-right">
        <ul class="pagination">
          <li class="page-item">
            <a class="page-link" aria-label="Previous">
              <span aria-hidden="true">«</span>
            </a>
          </li>
          <li class="page-item">
            <a class="page-link">1</a>
          </li>
          <li class="page-item">
            <a class="page-link">2</a>
          </li>
          <li class="page-item">
            <a class="page-link">3</a>
          </li>
          <li class="page-item">
            <a class="page-link">4</a>
          </li>
          <li class="page-item">
            <a class="page-link">5</a>
          </li>
          <li class="page-item">
            <a class="page-link" aria-label="Next">
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
                      <option value="10">10</option>
                      <option value="25">25</option>
                      <option value="50">50</option>
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
              <div className="card-group">
                {/* Acá va un producto */}
                {/* Acá va un producto */}
                {/* Acá va un producto */}
              </div>
              <div className="card-group">
                {/* Acá va un producto */}
                {/* Acá va un producto */}
                {/* Acá va un producto */}
              </div>
              <div className="card-group">
                {/* Acá va un producto */}
                {/* Acá va un producto */}
                {/* Acá va un producto */}
              </div>
              {this.bottomNavBar()}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Catalogo;
