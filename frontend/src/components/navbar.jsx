import React, { Component } from "react";

const style1 = { fontSize: "20px" };

class NavBar extends Component {
  render() {
    return (
      <nav
        className="navbar navbar-light navbar-expand-lg bg-dark py-lg-4"
        id="mainNav"
      >
        <div className="container">
          <a
            className="navbar-brand text-uppercase d-lg-none text-expanded"
            href="#"
          >
            Donde José Villar
          </a>
          <button
            data-toggle="collapse"
            data-target="#navbarResponsive"
            className="navbar-toggler"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="nav navbar-nav mx-auto">
              <li className="nav-item" role="presentation">
                <a className="nav-link" href="index.html">
                  Inicio
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a className="nav-link" href="about.html">
                  Conócenos
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a className="nav-link" href="products.html">
                  Productos
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <div className="nav-item dropdown">
                  <a
                    className="dropdown-toggle text-white"
                    data-toggle="dropdown"
                    aria-expanded="false"
                    href="#"
                    style={style1}
                  >
                    <i className="fa fa-shopping-bag"></i>
                  </a>
                  <div className="dropdown-menu" role="menu">
                    <a
                      className="dropdown-item"
                      role="presentation"
                      href="bag.html"
                    >
                      <i className="fa fa-shopping-bag"></i>&nbsp; Lista de
                      Compras
                    </a>
                    <a
                      className="dropdown-item"
                      role="presentation"
                      href="acount.html"
                    >
                      <i className="fa fa-gear"></i>&nbsp; Cuenta
                    </a>
                    <a
                      className="dropdown-item"
                      role="presentation"
                      href="signin.html"
                    >
                      <i className="fa fa-user-circle-o"></i>&nbsp; Sign In
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
