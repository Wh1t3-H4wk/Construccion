import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

class EditarCliente extends React.Component {
  constructor(props) {
    super();
    this.onSubmit = this.onSubmit.bind(this);
  }

  state = {
    cliente: {
      nombres: "",
      apellidos: "",
      telefono: "",
      direcion: "",
      contraseña: "",
    },
    isLoaded: false,
  };

  async getDatosCliente() {
    this.setState({ isLoaded: false });
    let cuentaMail = "nacho123@gmail.com";
    await axios
      .get(`http://localhost:5001/User/cliente/${cuentaMail}`)
      .then((response) => {
        this.setState({
          cliente: response.data,
          isLoaded: true,
        });
        console.log(response.data);
      });
  }

  async onSubmit(e) {
    e.preventDefault();
    const form = e.target;
    let cuentaMail = "nacho123@gmail.com";
    await axios.put(`http://localhost:5001/User/cliente/${cuentaMail}`, {
      nombres: form.nombre.value,
      apellidos: form.apellido.value,
      telefono: form.telefono.value,
      direcion: form.direccion.value,
      contraseña: form.contraseña.value,
    });
    this.getDatosCliente();
  }

  async handleEliminacionCuenta() {
    let cuentaMail = "nacho123@gmail.com";
    await axios.delete(`http://localhost:5001/User/cliente/${cuentaMail}`);
    this.getDatosCliente();
  }

  componentDidMount() {
    this.getDatosCliente();
  }

  render() {
    if (this.state.isLoaded)
      return (
        <Container className="page-section cta">
          <div className="row">
            <div className="col-xl-p mx-auto">
              <div className="cta-inner rounded">
                <h2 class="section-heading mb-5">
                  <span class="section-heading-upper">Bienvenido</span>
                  <span class="section-heading-lower">
                    {this.state.cliente.nombres} {this.state.cliente.apellidos}
                  </span>
                  <Button variant="info">Mis Pedidos</Button>
                </h2>
                <Form onSubmit={this.onSubmit}>
                  <Row>
                    <Col>
                      <Form.Group controlId="nombre">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control
                          type="text"
                          defaultValue={this.state.cliente.nombres}
                        ></Form.Control>
                      </Form.Group>
                      <Form.Group controlId="apellido">
                        <Form.Label>Apellido</Form.Label>
                        <Form.Control
                          type="text"
                          defaultValue={this.state.cliente.apellidos}
                        ></Form.Control>
                      </Form.Group>
                      <Form.Group controlId="contraseña">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control
                          type="password"
                          defaultValue={this.state.cliente.contraseña}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group controlId="telefono">
                        <Form.Label>Teléfono</Form.Label>
                        <Form.Control
                          type="text"
                          defaultValue={this.state.cliente.telefono}
                        />
                      </Form.Group>
                      <Form.Group controlId="direccion">
                        <Form.Label>Dirección</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows="2"
                          defaultValue={this.state.cliente.direcion}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Button
                    className="btn btn-danger btn-lg"
                    style={{ marginTop: "15px" }}
                    onClick={this.handleEliminacionCuenta}
                  >
                    Eliminar Cuenta
                  </Button>
                  <Button
                    type="submit"
                    className="btn btn-primary btn-lg float-right"
                    style={{ marginTop: "15px" }}
                  >
                    Modificar datos
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </Container>
      );
    else
      return (
        <Container className="page-section cta">
          <div className="row">
            <div className="col-xl-p mx-auto">
              <div className="cta-inner rounded">
                <h2 class="section-heading mb-5">
                  <span class="section-heading-upper">Error</span>
                  <span class="section-heading-lower">
                    No existe cuenta con este email!
                  </span>
                </h2>
              </div>
            </div>
          </div>
        </Container>
      );
  }
}

export default EditarCliente;
