import React from 'react';
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <>
        <Navbar className="bg-dark justify-content-center">
          <Nav.Link>Inicio</Nav.Link>
          <Nav.Link>Productos</Nav.Link>
          <Nav.Link>Conócenos</Nav.Link>
        </Navbar>
      </>
    );
  }
}

export default NavBar;