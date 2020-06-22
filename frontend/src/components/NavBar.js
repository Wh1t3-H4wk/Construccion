import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function NavBar(props) {
  return (
    <Navbar variant="dark" bg="dark" expand="lg" id="mainNav" sticky="top">
      <Navbar.Brand className="text-uppercase d-lg-none text-expanded" href="#home">Donde José Villar</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse>
        <Nav.Link className="text-white text-uppercase">Inicio</Nav.Link>
        <Nav.Link className="text-white text-uppercase">Productos</Nav.Link>
        <Nav.Link className="text-white text-uppercase">Conócenos</Nav.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;