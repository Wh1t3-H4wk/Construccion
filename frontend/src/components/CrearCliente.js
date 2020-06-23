import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
class CrearCliente extends React.Component {
    render() {
        return (
        <Container className="page-section">
            <div className="product-item">
              <div className="d-flex product-item-title">
                <div className="d-flex mr-auto bg-faded p-5 rounded" style={{backgroundColor: "rgba(230, 167, 86, 0.82)"}}>
                  <h2 className="section-heading mb-0">
                    <span className="section-heading-upper" style={{color: "rgb(230, 230, 230)",fontSize: "15px"}}>Se parte de nosotros</span>
                    <span className="section-heading-lower" style={{color: "rgb(239, 239, 239)",fontSize: "42px"}}>Crear Cuenta</span>
                  </h2>
                </div>
              </div>
            </div>
            <Container className="bg-faded p-5 rounded" style={{maxWidth: "700px"}}>
                <Form onSubmit={this.onSubmit}>
                    <Row>
                        <Col>
                            <Form.Group controlId="nombre">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control type="text" placeholder="Nombre"  required/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="apellido">
                                <Form.Label>Apellido</Form.Label>
                                <Form.Control type="text" placeholder="Apellido"  required/>
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                        <Form.Group controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="text" placeholder="Email"  required/>
                        </Form.Group>
                        </Col>
                        <Col>
                        <Form.Group controlId="telefono">
                            <Form.Label>Telefono </Form.Label>
                             <Form.Control type="text" placeholder="Telefono"  required/>
                            </Form.Group>
                        </Col>
                    </Row>
                
                
                <Form.Group controlId="direccion">
                    <Form.Label>Dirección</Form.Label>
                    <Form.Control as="textarea" rows="2" placeholder="Dirección" required/>
                </Form.Group>
                <Form.Group controlId="contraseña">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password"   placeholder="Contraseña"  required/>
                </Form.Group>
                <Form.Group controlId="contraseñaValidacion">
                    <Form.Label>Valicion de contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Valicion de contraseña"  required/>
                </Form.Group>
                
                </Form>
                <Button type="submit">Crear Cuenta</Button>
            </Container>
        </Container>
        );
    }
      
}export default CrearCliente;