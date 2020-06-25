import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Catalogo from './Catalogo.js';
import Nav from 'react-bootstrap/Nav';
import {
  BrowserRouter as Router,
Switch,
Route,
Link} from "react-router-dom";

function NavBar(props) {
  return (
    <Router>
      <Navbar variant="dark" bg="dark" expand="lg" id="mainNav" sticky="top">
        <Navbar.Brand className="text-uppercase d-lg-none text-expanded" href="#home">Donde José Villar</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse>
          <div>
            <Link to="/" className="text-white text-uppercase">Inicio </Link>
          </div>
          <div>
            <Link to="/carro"  onClick={() => window.location.reload()} className="text-white text-uppercase">Carro </Link>
          </div>
          <div>
            <Link to="/Login" className="text-white text-uppercase">Login </Link>
          </div>
         
          <div>
            <Link to="/about"  className="text-white text-uppercase">sobre nosotros </Link>
          </div>
      
        </Navbar.Collapse>
      </Navbar>
      
    </Router>
  );
}

export default NavBar;
