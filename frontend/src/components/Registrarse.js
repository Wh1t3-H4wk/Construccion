import React, { Component } from "react";
import Container from "react-bootstrap/Container";

class Registrarse extends Component {
  state = {};
  render() {
    return (
      <Container className="page-section cta">
        <div className="row">
          <div className="col-xl-9 mx-auto">
            <div className="cta-inner rounded">
              <h2 class="section-heading mb-5">
                <span class="section-heading-upper">Bienvenido</span>
                <span class="section-heading-lower">Crea Tu Cuenta</span>
              </h2>
              <div className="row">
                <div className="col"></div>
                <div className="col"></div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default Registrarse;
