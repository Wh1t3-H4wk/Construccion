import Form from 'react-bootstrap/Form';
import React from 'react';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGift } from '@fortawesome/free-solid-svg-icons';

class ConfirmarCodigo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cod: "",
      validezCodigo: "",
    };
    this.handleConf = this.handleConf.bind(this);
  }

  handleCodigo = (e) => {
    let value = e.target.value;
    this.setState({ cod: value });
  };

  async handleConf() {
    await this.props.ConfCodigo(this.state.cod);
    this.setState({ validezCodigo: this.props.validezCodigo });
  }

  render() {
    return (
      <Form.Group controlId="codigo">
        <div className="row py-5 p-4 bg-white rounded shadow-sm mb-4">
          <Form.Label
            className="bg-light rounded-pill px-4 py-3 text-uppercase text-center font-weight-bold"
            style={{ width: "100%" }}
          >
            Cupón de Descuento
          </Form.Label>
          <p className="font-italic mb-4 text-center" style={{ width: "100%" }}>
            Si posee un cupón de descuento, porfavor ingréselo en el siguiente
            campo.
          </p>
          <Form.Control
            type="text"
            className="mb-4"
            onChange={this.handleCodigo}
          />
          <div style={{ width: "100%" }}>
            <p className="font-italic mb-3 text-center">
              {this.state.validezCodigo}
            </p>
            <Button
              onClick={this.handleConf}
              disabled={this.state.cod === ""}
              className="float-right"
            >
              <FontAwesomeIcon icon={faGift} className="mr-2"></FontAwesomeIcon>
              Aplicar Código
            </Button>
          </div>
        </div>
      </Form.Group>
    );
  }
}

export default ConfirmarCodigo;
