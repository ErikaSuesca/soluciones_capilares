import React, { Component } from 'react';
import cargandoImagen from '../img/cargando.gif';
import './Registros.css';

class Registros extends Component {
  constructor() {
    super();
    this.state = {
      usuarios: {},
      cargando: true,
      currentPage: 1,
      itemsPerPage: 10,
    };
  }

  componentDidMount() {
    fetch('https://639c781616d1763ab14ae929.mockapi.io/test/front-end/lista')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({ usuarios: data, cargando: false });
      })
      .catch(error => {
        console.error('Error al obtener los datos:', error);
        this.setState({ cargando: false });
      });
  }

  // Función para cambiar el color del texto en función del estado
  getColorForEstado(estado) {
    return estado === 'Activo' ? 'text-success' : 'text-danger';
  }

  render() {
    const { usuarios, cargando, currentPage, itemsPerPage } = this.state;

    if (cargando) {
      return (
        <div className="d-flex justify-content-center align-items-center min-vh-100">
          <img src={cargandoImagen} alt="Cargando..." />
        </div>
      );
    }

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const usuariosArray = Object.values(usuarios).slice(indexOfFirstItem, indexOfLastItem);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(Object.keys(usuarios).length / itemsPerPage); i++) {
      pageNumbers.push(i);
    }

    return (
      <div>
        <div className="text-center fuente">
          <h1 >Tabla de Usuarios</h1>
        </div>

        <div className="table-responsive">
          <table className="table table-striped fuente">
            <thead>
              <tr className='text-center'>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Documento</th>
                <th>Celular</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              {usuariosArray.map((usuario, index) => (
                <tr key={index}>
                  <td>{usuario.nombre}</td>
                  <td>{usuario.apellido}</td>
                  <td>{usuario.documento}</td>
                  <td>{usuario.celular}</td>
                  <td className={this.getColorForEstado(usuario.estado)}>{usuario.estado}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <ul className="pagination">
          {pageNumbers.map(number => (
            <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
              <button className="page-link" onClick={() => this.setState({ currentPage: number })}>
                {number}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Registros;