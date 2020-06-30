import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import Spinner from 'react-bootstrap/Spinner';

class CrearCliente extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pass: "",
      valPass: "",
      isPasswordInvalid: true,
      isValidMail: false,
      isValidPhone: false,
      status: ""
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.validateTelefono = this.validateTelefono.bind(this);
    this.renderButtonContent = this.renderButtonContent.bind(this);
  }


  componentDidMount() {
    document.title = "Registrarse - Cafetería José Billar";
  }

  handlePassChange = (e) => {
    let value = e.target.value;
    this.setState({ pass: value }, () => this.handleValidatePassword());
  };

  handleValPassChange = (e) => {
    this.setState({ valPass: e.target.value }, () =>
      this.handleValidatePassword()
    );
  };

  handleValidatePassword = () => {
    let value = !(this.state.pass === this.state.valPass);
    this.setState({ isPasswordInvalid: value });
  };

  validateEmail(e) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let email = e.target.value;
    if (re.test(email)) 
      this.setState({isValidMail: true});
    else
      this.setState({isValidMail: false});
  }

  validateTelefono(e) {
    const re = /(\+56)?\d{9}/gm;
    let phone = e.target.value;
    if (re.test(phone))
      this.setState({isValidPhone: true});
    else
      this.setState({isValidPhone: false});
  }

  async onSubmit(e) {
    e.preventDefault();
    if (this.state.isPasswordInvalid || !this.state.isValidMail)
      return;
    const form = e.target;
    this.setState({status: "waiting"});
    let response = null;
    try {
      response = await axios.post("https://cafeteriaapi.herokuapp.com/User/cliente", {
        telefono: form.telefono.value,
        direcion: form.direccion.value,
        nombres: form.nombre.value,
        apellidos: form.apellido.value,
        mail: form.email.value,
        contraseña: form.contraseña.value,
        rol: "Cliente",
      });
    } catch (err) {
      response = err;
    } finally {
      if (response.status === 200)
        this.setState({status: "ok"});
      else
        this.setState({status: "error"});
    }
  }

  renderButtonContent() { 
    if (this.state.status === "") {
      return "Crear cuenta";
    } else if (this.state.status === "waiting") {
      return (
        <Spinner animation="border" role="status">
          <span className="sr-only">Procesando...</span>
        </Spinner>
      );
    } else {
      return (
        <>
          <FontAwesomeIcon className="mr-2" icon={this.state.status === "ok" ? faCheck : faTimes}/>
          {this.state.status === "ok" ? "Listo!" : "Error"}
        </>
      );
    }
  }

  render() {
    return (
      <Container className="page-section">
        <div className="product-item">
          <div className="d-flex product-item-title">
            <div
              className="d-flex mr-auto bg-faded p-5 rounded"
              style={{ backgroundColor: "rgba(230, 167, 86, 0.82)" }}
            >
              <h2 className="section-heading mb-0">
                <span
                  className="section-heading-upper"
                  style={{ color: "rgb(230, 230, 230)", fontSize: "15px" }}
                >
                  Sé parte de nosotros
                </span>
                <span
                  className="section-heading-lower"
                  style={{ color: "rgb(239, 239, 239)", fontSize: "42px" }}
                >
                  Crear Cuenta
                </span>
              </h2>
            </div>
          </div>
        </div>
        <Container
          className="bg-faded p-5 rounded"
          style={{ maxWidth: "700px" }}
        >
          <Form
            id="myForm"
            className="form"
            ref={(form) => (this.messageForm = form)}
            onSubmit={this.onSubmit}
          >
            <Row>
              <Col>
                <Form.Group controlId="nombre">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control type="text" placeholder="Nombre" maxLength="20" required />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="apellido">
                  <Form.Label>Apellido</Form.Label>
                  <Form.Control type="text" placeholder="Apellido" maxLength="20" required />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="text" placeholder="Email" isInvalid={!this.state.isValidMail} onChange={this.validateEmail} required />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="telefono">
                  <Form.Label>Teléfono </Form.Label>
                  <Form.Control type="text" placeholder="Telefono" isInvalid={!this.state.isValidPhone} onChange={this.validateTelefono} maxLength="12" required />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group controlId="direccion">
              <Form.Label>Dirección</Form.Label>
              <Form.Control
                as="textarea"
                rows="2"
                placeholder="Dirección"
                maxLength="120"
                required
              />
            </Form.Group>
            <Form.Group controlId="contraseña">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Contraseña"
                required
                onChange={this.handlePassChange}
              />
            </Form.Group>
            <Form.Group controlId="contraseñaValidacion">
              <Form.Label>Validación de contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Validación de contraseña"
                required
                onChange={this.handleValPassChange}
                isInvalid={this.state.isPasswordInvalid}
              />
            </Form.Group>
            <Button className="float-right" type="submit" disabled={(this.state.isPasswordInvalid || !this.state.isValidPhone || !this.state.isValidMail) || (this.state.status === "ok")}>{this.renderButtonContent()}</Button>
          </Form>
        </Container>
      </Container>
    );
  }
}
export default CrearCliente;
