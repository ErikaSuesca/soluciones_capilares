import React from "react";
import Introduccion from "./Introduccion";
import Logo from "./img/Logo_SC.png";


function Home() {
  return (
    <div >
      <div className="container d-flex justify-content-center align-items-center m-auto mt-2">
        <img src={Logo} alt="" class="img-fluid w-25" />
      </div>
      <div className="container d-flex justify-content-center align-text-center mb-3 mt-3">
        <h1 className="display-4 fs-4">¡Bienvenidos a nuestro sitio Web!</h1>
      </div>
      <Introduccion />
      <div className="d-flex justify-content-center align-items-center">
        <a className="btn btn-primary btn-sm " href="#" role="button">Consulte la información de los clientes</a>

      </div>

    </div>
  );
}

export default Home;