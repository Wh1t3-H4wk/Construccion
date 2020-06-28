import Form from "react-bootstrap/Form";
import React, { Component } from "react";
import Button from "react-bootstrap/Button";

class ConfirmarCodigo extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { 
            cod:"",
            //codigoAplicado:false,
            //desc:"",
            //codi:""
        };
        this.handleConf=this.handleConf.bind(this);

      }
      handleCodigo = (e) => {
        let value = e.target.value;
        this.setState({ cod : value});
      };
      handleConf(){
        this.props.ConfCodigo(this.state.cod);
      }
     
      
    render() {
        return (
            <Form >
                <Form.Group controlId="codigo">
                    <Form.Control
                        type="text"
                        onChange={this.handleCodigo}
                    ></Form.Control>
                </Form.Group>
               
                <Button 
                    onClick={this.handleConf}
                    disabled={this.props.codigoAplicado}
                    >
                    ingresar codigo
                </Button>
            </Form>
        );
    }
}

export default ConfirmarCodigo;