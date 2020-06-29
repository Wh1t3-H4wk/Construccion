import React from "react";
import NavBar from "./components/NavBar.js";
import Header from "./components/Header.js";
import Catalogo from "./components/Catalogo.js";
import Footer from "./components/Footer.js";
import axios from "axios";
import CrearCliente from "./components/CrearCliente.js";
import EditarCuenta from "./components/EditarCliente.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ConfirmarPedido from "./components/ConfirmarPedido.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productos: [],
      isLoaded: false,
      carro: [],
      isAdmin: true,
    };
    this.actualizarProductos = this.actualizarProductos.bind(this);
    this.anadirACarro = this.anadirACarro.bind(this);
    this.eliminarDeCarro = this.eliminarDeCarro.bind(this);
  }

  async getListaProductos() {
    await axios.get("http://localhost:5001/Producto").then((response) => {
      this.setState({
        productos: response.data,
        isLoaded: true,
      });
    });
  }

  actualizarProductos() {
    this.setState({ isLoaded: false });
    this.getListaProductos();
  }

  componentDidMount() {
    this.getListaProductos();
  }

  anadirACarro(productoAnadido) {
    const nuevoCarro = [];
    let exists = false;
    this.state.carro.forEach((item) => {
      if (item.producto.id === productoAnadido.id) {
        nuevoCarro.push({
          producto: item.producto,
          cantidad: item.cantidad + 1,
        });
        exists = true;
      } else nuevoCarro.push(item);
    });
    if (!exists) nuevoCarro.push({ producto: productoAnadido, cantidad: 1 });
    this.setState({ carro: nuevoCarro });
  }

  eliminarDeCarro(idProducto) {
    const nuevoCarro = [];
    this.state.carro.forEach((item) => {
      if (item.producto.id !== idProducto)
        nuevoCarro.push({ producto: item.producto, cantidad: item.cantidad });
    });
    this.setState({ carro: nuevoCarro });
  }

  render() {
    return (
      <>
        <BrowserRouter>
          <NavBar
            carro={this.state.carro}
            eliminarDeCarro={this.eliminarDeCarro}
          />
          <Header />
          <Switch>
            <Route exact path="/">
              <Catalogo
                isAdmin={this.state.isAdmin}
                productos={this.state.productos}
                isLoaded={this.state.isLoaded}
                anadirACarro={this.anadirACarro}
                actualizarProductos={this.actualizarProductos}
              />
            </Route>
            <Route exact path="/registrarse">
              <CrearCliente />
            </Route>
            <Route exact path="/cuenta/:mail">
              <EditarCuenta />
            </Route>
            <Route exact path="/confirmarPedido">
              <ConfirmarPedido
                carro={this.state.carro}
                eliminarDeCarro={this.eliminarDeCarro}
              />
            </Route>
            <Route
              render={function () {
                return <h1>404 Not found</h1>;
              }}
            />
          </Switch>
          <Footer />
        </BrowserRouter>
      </>
    );
  }
}

export default App;
