import React, { Component } from 'react';
import cargandoImagen from '../img/cargando.gif';
import RegistoUsuario from './Formulario';
import './Registros.css';

class Registros extends Component {
  constructor() {
    super();
    this.state = {
      usuarios: {},
      cargando: true,
      paginaActual: 1,
      itemsPorPagina: 10,
      usuarioSeleccionado: null,
      ordenarPor: 'nombre',
      orden: 'desc',
      filtro: '',
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

  mostrarDetalle = (usuario) => {
    this.setState({ usuarioSeleccionado: usuario });
  };

  obtenerColor(estado) {
    return estado === 'Activo' ? 'text-success' : 'text-danger';
  }

  cambiarOrden = (columna) => {
    const { ordenarPor, orden } = this.state;
    if (ordenarPor === columna) {
      this.setState({ orden: orden === 'asc' ? 'desc' : 'asc' });
    } else {
      this.setState({ ordenarPor: columna, orden: 'asc' });
    }
  };

  eventoFiltro = (event) => {
    this.setState({ filtro: event.target.value });
  };

  ordenarUsuarios = () => {
    const { usuarios, ordenarPor, orden, filtro } = this.state;
    const usuariosArray = Object.values(usuarios);

    return usuariosArray
      .filter((usuario) => {
        // Verificar si usuario.documento es una cadena antes de usar includes
        const documento = usuario.documento && typeof usuario.documento === 'string' ? usuario.documento : '';

        return usuario.nombre.toLowerCase().includes(filtro.toLowerCase()) ||
          usuario.apellido.toLowerCase().includes(filtro.toLowerCase()) ||
          documento.includes(filtro) || // Ahora verifica documento antes de usar includes
          usuario.celular.includes(filtro) ||
          usuario.estado.toLowerCase().includes(filtro.toLowerCase())
      })
      .sort((a, b) => {
        if (orden === 'asc') {
          return a[ordenarPor].localeCompare(b[ordenarPor]);
        } else {
          return b[ordenarPor].localeCompare(a[ordenarPor]);
        }
      });
  };

  render() {
    const { cargando, paginaActual, itemsPorPagina, usuarioSeleccionado, filtro } = this.state;

    if (cargando) {
      return (
        <div className="d-flex justify-content-center align-items-center min-vh-100">
          <img src={cargandoImagen} alt="Cargando..." />
        </div>
      );
    }

    const usuariosOrdenados = this.ordenarUsuarios();
    const indexOfLastItem = paginaActual * itemsPorPagina;
    const indexOfFirstItem = indexOfLastItem - itemsPorPagina;
    const usuariosPaginados = usuariosOrdenados.slice(indexOfFirstItem, indexOfLastItem);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(usuariosOrdenados.length / itemsPorPagina); i++) {
      pageNumbers.push(i);
    }

    return (
      <div className='m-3'>
        <div className="text-center fuente h1 m-3">
          <h1>Tabla de Usuarios</h1>
        </div>

        <div className="form-group fuente m-4">
          <label htmlFor="filtro">Filtrar:</label>
          <input
            type="text"
            id="filtro"
            className="campo-filtro m-2"
            value={filtro}
            onChange={this.eventoFiltro}
          />
        </div>

        <div className="table-responsive">
          <table className="table table-hover table-bordered  fuente">
            <thead>
              <tr className='text-center'>
                <th onClick={() => this.cambiarOrden('nombre')}>Nombre</th>
                <th onClick={() => this.cambiarOrden('apellido')}>Apellido</th>
                <th onClick={() => this.cambiarOrden('documento')}>Documento</th>
                <th onClick={() => this.cambiarOrden('celular')}>Celular</th>
                <th onClick={() => this.cambiarOrden('estado')}>Estado</th>
                <th ></th>
              </tr>
            </thead>
            <tbody>
              {usuariosPaginados.map((usuario, index) => (
                <tr key={index}>
                  <td>{usuario.nombre}</td>
                  <td>{usuario.apellido}</td>
                  <td>{usuario.documento}</td>
                  <td>{usuario.celular}</td>
                  <td className={this.obtenerColor(usuario.estado)}>{usuario.estado}</td>
                  <td>
                    <button className="btn btn-sm btn-link fuente" onClick={() => this.mostrarDetalle(usuario)}> + Info </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      <nav>
        <ul className="pagination px-5 pt-4">
          {pageNumbers.map(number => (
            <li key={number} className={`page-item ${paginaActual === number ? 'active' : ''}`}>
              <button className="page-link" onClick={() => this.setState({ paginaActual: number })}>
                {number}
              </button>
            </li>
          ))}
        </ul>
        </nav>
        <div>
          {usuarioSeleccionado && (
            <RegistoUsuario
              usuarioSeleccionado={usuarioSeleccionado}
              onClose={() => this.setState({ usuarioSeleccionado: null })}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Registros;
