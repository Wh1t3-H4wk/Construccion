import React from 'react';
import NavBar from "./components/NavBar.js";
import Header from './components/Header.js';
import Catalogo from './components/Catalogo.js';
import Footer from "./components/Footer.js";
import CrearCliente from "./components/CrearCliente.js"
import Codigos from "./components/Codigos.js"
import {
  BrowserRouter as Router,
Switch,
Route,
Link} from "react-router-dom";


function App() {
  return (
    <>
    <Header/>
    <NavBar/>
    <Router>
     
      <Switch>
        <Route path="/about" exact>
          sobre nosotros          
        </Route>
      </Switch>
      <Switch>
        <Route path="/Login" exact>
          <CrearCliente/>
          
        </Route>
      </Switch>
      <Switch>
        <Route path="/" exact>
          estoy en catalogo
          <Codigos/>
        </Route>
      </Switch>
    </Router>
    <Footer/>
      
    </>
  );
}

export default App;
