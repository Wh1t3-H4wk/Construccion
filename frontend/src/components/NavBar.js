import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Carro from "./Carro.js";
import { Link } from "react-router-dom";

function NavBar(props) {
  return (
    <Navbar variant="dark" bg="dark" expand="lg" id="mainNav" sticky="top">
      <Navbar.Brand className="text-uppercase d-lg-none text-expanded" as={Link} to="/">Donde José Villar</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse>
        <Nav.Link className="text-white text-uppercase" as={Link} to="/">Inicio</Nav.Link>
        <Nav.Link className="text-white text-uppercase" as={Link} to="/conocenos">Conócenos</Nav.Link>
        <Nav.Link className="text-white text-uppercase" as={Link} to="/registrarse">Regístrate</Nav.Link>
        <Nav.Link className="text-white text-uppercase" as={Link} to="/codigos">Códigos</Nav.Link>
      </Navbar.Collapse>
      <Navbar.Collapse className="justify-content-end">
        <Nav.Link className="text-white text-uppercase" as={Link} to="/cuenta/nacho123@gmail.com">Cuenta</Nav.Link>
      </Navbar.Collapse>
      <Carro carro={props.carro} eliminarDeCarro={props.eliminarDeCarro} />
    </Navbar>
  );
}

export default NavBar;
