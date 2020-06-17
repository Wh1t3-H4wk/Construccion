import React from 'react';
import {Container, Button, Modal, Form} from 'react-bootstrap';
import axios from 'axios';
class EliminarProducto extends React.Component {
    constructor(props) {
      super();
      
      this.state = {
        modal: false
      }
  
      this.toggle = this.toggle.bind(this);
    }
  
    toggle() {
      this.setState(prevState => ({
        modal: !prevState.modal
      }));
    }
  
    handleModalEliminar(){
        console.log("elimine");
        {/*agregar codigo que elimine las cosas en la base de datos
        */}
        this.setState({modal:!this.state.modal})
      }
render() {
    return (
        <Container>
            <Button  variant="danger" onClick={this.toggle} >eliminar</Button>
              <Modal show={this.state.modal} onHide={this.toggle}>
              <Modal.Header  >Eliminar prodcuto</Modal.Header>
              <Modal.Body>
                Esta seguro que desea eliminar este producto
              </Modal.Body> 
              <Modal.Footer>
              <Button variant="danger"onClick={()=>{this.handleModalEliminar()}}>
                  eliminar
                </Button>
                <Button onClick={this.toggle}>Cancelar</Button>
              </Modal.Footer>
            </Modal>
        </Container>
    );
  }
}
export default EliminarProducto;