import React from "react";
import Introduccion from "./Introduccion";
import BotonRegistro from "./BotonRegistro"
import PieDePagina from "./PieDePagina";
import Logo from "../img/Logo_SC.png";
import './Style.css';


function Home() {
  return (
    <div>
      <div className="container d-flex justify-content-center align-items-center m-auto mt-2">
        <img src={Logo} alt="logoSolucionesCapilares" className="img-fluid w-25" />
      </div>
      <div className="container d-flex justify-content-center align-text-center mb-3 mt-3">
        <h1 className="display-4 fs-4 ">¡Bienvenidos a nuestro sitio Web!</h1>
      </div>
      <Introduccion />
      <BotonRegistro />
      <PieDePagina />

    </div>
  );
}

export default Home;