import React from "react";
import{
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./PaginaPrincipal/Inicio"
import Registros from "./RegistroUsuarios/Registros"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/registros" element={<Registros/>} />
        </Routes>
      </BrowserRouter>
    )
  }

export default App;
