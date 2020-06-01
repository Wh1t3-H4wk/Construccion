import React from "react";
import NavBar from "./components/navbar";
import Destacados from "./components/destacados";
import Catalogo from "./components/catalogo";
import Footer from "./components/footer";

function App() {
  return (
    <React.Fragment>
      <body>
        <h1 className="text-center text-white d-none d-lg-block site-heading">
          <span className="text-primary site-heading-upper mb-3">
            <strong>Cafetería</strong>
          </span>
          <span className="site-heading-lower">Donde José Billar</span>
        </h1>
        <NavBar />
        <Destacados />
        <Catalogo />
        <section class="page-section">
          <div class="container">
            <div class="product-item"></div>
          </div>
        </section>
        <Footer />
      </body>
    </React.Fragment>
  );
}

export default App;
