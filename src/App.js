import React from "react";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import Productos from "./components/productos";

function App() {
  return (
    <React.Fragment>
      <h1 className="text-center text-white d-none d-lg-block site-heading">
        <span className="text-primary site-heading-upper mb-3">
          <strong>Cafetería</strong>
        </span>
        <span className="site-heading-lower">Donde José Billar</span>
      </h1>
      <NavBar />
      <Productos />
      <Footer />
    </React.Fragment>
  );
}

export default App;
