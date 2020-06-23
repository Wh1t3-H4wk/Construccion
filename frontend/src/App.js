import React from "react";
import NavBar from "./components/NavBar.js";
import Header from "./components/Header.js";
import Catalogo from "./components/Catalogo.js";
import Footer from "./components/Footer.js";
import CrearCliente from "./components/CrearCliente.js";
import EditarCuenta from "./components/EditarCliente.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Header />
        <Switch>
          <Route exact path="/" component={Catalogo} />
          <Route exact path="/registrarse" component={CrearCliente} />
          <Route exact path="/cuenta" component={EditarCuenta} />
          <Route
            render={function () {
              return <p>Not found</p>;
            }}
          />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
