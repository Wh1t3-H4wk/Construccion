import React from 'react';
import Destacados from './Destacados.js';
import Productos from './Productos.js';

function Catalogo(props) {
  return (
    <>
      <Destacados productos={props.productos} isLoaded={props.isLoaded}/>
      <Productos isAdmin={props.isAdmin} productos={props.productos} isLoaded={props.isLoaded} anadirACarro={props.anadirACarro} actualizarProductos={props.actualizarProductos}/>
    </>
  );
}

export default Catalogo;
