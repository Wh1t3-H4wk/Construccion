import React, { Component } from "react";
import {Button, Modal,Form} from 'react-bootstrap'

class Producto extends Component {
  constructor(){
    super()
    this.state={
      showEdit:false,
      showEliminar:false,
      estado:false
      }
  }



  
  handleModalAbrirEliminar(){
    this.setState({showEliminar:!this.state.showEliminar})
  }
  handleModalEliminar(){
    console.log("elimine");
    {/*agregar codigo que elimine las cosas en la base de datos
    */}
    this.setState({showEliminar:!this.state.showEliminar})
  }
  handleModalAbrirEdit(){
    this.setState({showEdit:!this.state.showEdit})
  }
  handleModalEdit(e){
    console.log("edite");


    {/*agregar codigo que edite las cosas en la base de datos
    */}

    this.setState({showEdit:!this.state.showEdit})
  }
  render() {
    return (
      <div className="card">
        <img
          className="card-img-top w-100 d-block"
          src={this.props.producto.imgUrl}
        />
        <div className="card-body">
          <h4 className="card-title">{this.props.producto.nombre}</h4>
          <p>Precio:{this.props.producto.precio}</p>
          <input
            type="text"
            style={{
              width: "33px",
              height: "38px",
            }}
          />
          <div className="btn-group" role="group">
            <button className="btn btn-primary" type="button">
              -
            </button>
            <button className="btn btn-primary" type="button">
              +
            </button>
            {/*-----------------modal editar-----------------------*/}
            <Button onClick={()=>{this.handleModalAbrirEdit()}} >edit</Button>
            <Modal show={this.state.showEdit} >
              <Modal.Header >
                  Editar producto
              </Modal.Header>
              <Modal.Body>
              <Form>
                <Form.Group controlId="formGroupEditar">
                  <Form.Label>nombre</Form.Label>
                  <Form.Control id="nombre" type="text"  value={this.props.producto.nombre}/>
                </Form.Group>
                <Form.Group controlId="formGroupEditar">
                  <Form.Label>precio</Form.Label>
                  <Form.Control id="precio" type="text" value={this.props.producto.precio} />
                </Form.Group>
                <Form.Group controlId="formGroupEditar">
                  <Form.Label>Descripcion</Form.Label>
                  <Form.Control id="descripcion" as="textarea" rows="3" value={this.props.producto.descripcion}/>
                </Form.Group>
                <Form.Group controlId="formGroupEditar">
                  <Form.File id="Imagen" label="Imagen"  />
                </Form.Group>
              </Form>
              </Modal.Body> 
              <Modal.Footer>
              <Button onClick={()=>{this.handleModalEdit()}}>
                  aplicar cambios
                </Button>
                <Button onClick={()=>{this.handleModalAbrirEdit()}}>
                  cancelar
                </Button>
              </Modal.Footer>
            </Modal>

            {/*--------------modal eliminar----------------------------*/}
            <Button  variant="danger" onClick={()=>{this.handleModalAbrirEliminar()}} >eliminar</Button>
              <Modal show={this.state.showEliminar}>
              <Modal.Header  >Eliminar prodcuto</Modal.Header>
              <Modal.Body>
                Esta seguro que desea eliminar este producto
              </Modal.Body> 
              <Modal.Footer>
              <Button variant="danger"onClick={()=>{this.handleModalEliminar()}}>
                  eliminar
                </Button>
                <Button onClick={()=>{this.handleModalAbrirEliminar()}}>
                cancelar
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
          <Form.Check
            type="checkbox"
            className="my-1 mr-sm-2"
            
            label="visible"
            
          />
        </div>
      </div>
    );
  }
}

export default Producto;
