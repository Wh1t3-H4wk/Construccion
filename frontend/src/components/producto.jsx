import React, { Component } from "react";
import {Button, Modal,Form} from 'react-bootstrap'
import axios from 'axios'

class Producto extends Component {
  constructor(){
    super()
    this.state={
      showEdit:false,
      showEliminar:false,
      estado:false,
      nombre: '',
      precio: '',
      descripcion: '',
      imagen: '',
      }
  }



  onChangeNombre = e => {
    this.setState({
        nombre: e.target.value
        
        
    })
    console.log(this.state.nombre);
  }
  onChangePrecio = e => {
    this.setState({
        precio: e.target.value
    })
  }
  onChangeDescripcion = e => {
    this.setState({
        descripcion: e.target.value
    })
  }
  onChangeImagen = e => {
    this.setState({
        imagen: e.target.value
    })
  }
  onSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5001/producto/', {
      nombre: this.state.nombre,
      precio: this.state.precio,
      descripcion: this.state.descripcion,
      imagen: this.state.imagen

  });
    console.log("HOLA");
    
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
              <Form onSubmit={this.onSubmit}>
                <Form.Group controlId="formGroupEditar">
                  <Form.Label>nombre</Form.Label>
                  <Form.Control id="nombre" type="text"   onChange={this.onChangeNombre}/>
                </Form.Group>
                <Form.Group controlId="formGroupEditar">
                  <Form.Label>precio</Form.Label>
                  <Form.Control id="precio" type="text" onChange={this.onChangePrecio}/>
                </Form.Group>
                <Form.Group controlId="formGroupEditar">
                  <Form.Label>Descripcion</Form.Label>
                  <Form.Control id="descripcion" as="textarea" rows="3" onChange={this.onChangeDescripcion}/>
                </Form.Group>
                <Form.Group controlId="formGroupEditar "  onChange={this.onChangeImagen}>
                  <Form.File id="Imagen" label="Imagen"  />
                </Form.Group>
                <Button type="submit" className="btn btn-primary" onClick={()=>{this.handleModalEdit()}}>
                  aplicar
                </Button>
              </Form>
              </Modal.Body> 
              <Modal.Footer>
              
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
