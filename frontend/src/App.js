import React from "react";
import NavBar from "./components/NavBar.js";
import Footer from "./components/footer";
import Catalogo from './components/Catalogo.js';
//import NavBarCancino from './components/navbarCancino'

function App() {
  return (
    <>
      <h1 className="text-center text-white d-none d-lg-block site-heading">
        <span className="text-primary site-heading-upper mb-3">
          <strong>Cafetería</strong>
        </span>
        <span className="site-heading-lower">Donde José Billar</span>
      </h1>
      <>
        <NavBar/>
        {/*<NavBarCancino/>*/}
      </>
      <Catalogo/>
      <Footer/>
    </>
  );
}

export default App;
