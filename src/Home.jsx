import React from "react";
import Logo from "./img/Logo_SC.png";

function Home() {
  return (
    <div >
      <div className="container d-flex justify-content-center align-items-center m-5">
        <img src={Logo} alt="" class="img-fluid w-25" />
      </div>
      <div className="container d-flex justify-content-center align-items-center">
        <h1 className="display-4">¡Bienvenidos a nuestro sitio Web!</h1>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <a className="btn btn-primary btn-lg " href="#" role="button">Consulte la información de los clientes</a>

      </div>

    </div>
  );
}

export default Home;