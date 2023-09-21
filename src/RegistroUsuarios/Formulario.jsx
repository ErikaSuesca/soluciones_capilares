import React from 'react';

const RegistroUsuario = ({ usuarioSeleccionado, onClose }) => {
  return (
    <div className="modal fade show" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Detalles del Registro</h5>
            <button type="button" className="close" onClick={onClose}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div>
              <label>Nombre: </label>
              <span>{usuarioSeleccionado.nombre}</span>
            </div>
            <div>
              <label>Apellido: </label>
              <span>{usuarioSeleccionado.apellido}</span>
            </div>
            <div>
              <label>Documento: </label>
              <span>{usuarioSeleccionado.documento}</span>
            </div>
            <div>
              <label>Celular: </label>
              <span>{usuarioSeleccionado.celular}</span>
            </div>
            <div>
              <label>Estado: </label>
              <span
                className={
                  usuarioSeleccionado.estado === 'Activo' ? 'text-success' : 'text-danger'
                }
              >
                {usuarioSeleccionado.estado}
              </span>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistroUsuario;
