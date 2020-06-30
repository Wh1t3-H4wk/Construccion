import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';
import { withRouter } from 'react-router-dom';

class EditarCliente extends React.Component {
  constructor(props) {
    super();
    this.onSubmit = this.onSubmit.bind(this);
    this.getDatosCliente = this.getDatosCliente.bind(this);
    this.handleEliminacionCuenta = this.handleEliminacionCuenta.bind(this);
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
    notFound: false,
    mail: "",
  };

  async getDatosCliente() {
    this.setState({ isLoaded: false });
    let cuentaMail = this.getMail();
    let response = null;
    try {
      response = await axios.get(
        `http://localhost:5001/User/cliente/${cuentaMail}`
      );
    } catch (err) {
      response = err;
    } finally {
      if (response.status === 200) {
        this.setState({
          cliente: response.data,
          isLoaded: true,
        });
      } else {
        this.setState({ isLoaded: true, notFound: true });
      }
    }
  }

  async onSubmit(e) {
    e.preventDefault();
    const form = e.target;
    let cuentaMail = this.getMail();
    await axios.put(`https://cafeteriaapi.herokuapp.com/User/cliente/${cuentaMail}`, {
      nombres: form.nombre.value,
      apellidos: form.apellido.value,
      telefono: form.telefono.value,
      direcion: form.direccion.value,
      contraseña: form.contraseña.value,
    });
    this.getDatosCliente();
  }

  async handleEliminacionCuenta() {
    let cuentaMail = this.getMail();
    await axios.delete(`https://cafeteriaapi.herokuapp.com/User/cliente/${cuentaMail}`);
    this.getDatosCliente();
  }

  getMail = () => {
    return this.props.match.params.mail;
  };

  componentDidMount() {
    document.title = "Mi cuenta - Cafetería Donde José Billar";
    this.getDatosCliente();
  }

  render() {
    if (this.state.isLoaded) {
      if (this.state.notFound) {
        return (
          <Container className="page-section cta">
            <div className="row">
              <div className="col-xl-p mx-auto">
                <div className="cta-inner rounded">
                  <h2 className="section-heading mb-5">
                    <span className="section-heading-upper">Error</span>
                    <span className="section-heading-lower">
                      No existe cuenta con este email!
                    </span>
                  </h2>
                </div>
              </div>
            </div>
          </Container>
        );
      } else {
        return (
          <Container className="page-section cta">
            <div className="row">
              <div className="col-xl-p mx-auto">
                <div className="cta-inner rounded">
                  <h2 className="section-heading mb-5">
                    <span className="section-heading-upper">Bienvenido</span>
                    <span className="section-heading-lower">
                      {this.state.cliente.nombres}{" "}
                      {this.state.cliente.apellidos}
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
      }
    } else
      return (
        <Container className="page-section cta">
          <div className="row">
            <div className="col-xl-p mx-auto">
              <div className="cta-inner rounded">
                <Spinner animation="border" role="status">
                  <span className="sr-only">Cargando...</span>
                </Spinner>
              </div>
            </div>
          </div>
        </Container>
      );
  }
}

export default withRouter(EditarCliente);
