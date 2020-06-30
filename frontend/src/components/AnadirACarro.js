import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import FormControl from "react-bootstrap/FormControl";
import Row from "react-bootstrap/Row";

class AnadirACarro extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cantidad: 1 };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.handleAnadirACarro = this.handleAnadirACarro.bind(this);
  }

  increment() {
    this.setState({ cantidad: this.state.cantidad + 1 });
  }

  decrement() {
    this.setState({
      cantidad: this.state.cantidad > 1 ? this.state.cantidad - 1 : 1,
    });
  }

  handleAnadirACarro() {
    this.props.anadir(this.state.cantidad);
  }

  render() {
    return (
      <Row className="m-1">
        <InputGroup className="mr-1" style={{ width: "79.8375%" }}>
          <InputGroup.Prepend>
            <Button disabled={!this.props.disponible} onClick={this.decrement}>
              <FontAwesomeIcon icon={faMinus} />
            </Button>
          </InputGroup.Prepend>
          <FormControl
            className="text-center"
            value={this.state.cantidad}
            readOnly
          />
          <InputGroup.Append>
            <Button disabled={!this.props.disponible} onClick={this.increment}>
              <FontAwesomeIcon icon={faPlus} />
            </Button>
          </InputGroup.Append>
        </InputGroup>
        <Button
          disabled={!this.props.disponible}
          onClick={this.handleAnadirACarro}
        >
          <FontAwesomeIcon icon={faCartPlus} />
        </Button>
      </Row>
    );
  }
}

export default AnadirACarro;
