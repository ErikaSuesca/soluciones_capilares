import React from 'react';
import './Registros.css';

const RegistroUsuario = ({ usuarioSeleccionado, onClose }) => {
  return (
    <div className="modal fade show" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Información Usuario: {usuarioSeleccionado.nombre} {usuarioSeleccionado.apellido}</h5>
            <button type="button" className="close" onClick={onClose}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">

            <div class="container">
              <div class="row">
                <div>
                  <label><b>Documento: </b> </label>
                  <span> {usuarioSeleccionado.documento}</span>
                </div>
                <div>
                  <label><b>Celular:  </b></label>
                  <span> {usuarioSeleccionado.celular}</span>
                </div>
                <div>
                  <label><b>Email creación:</b> </label>
                  <span> {usuarioSeleccionado.emailCreacion}</span>
                </div>
                <div>
                  <label><b>Email modificación:</b></label>
                  <span> {usuarioSeleccionado.emailModificacion}</span>
                </div>
                <div>
                  <label><b>Fecha Inicio:</b></label>
                  <span> {usuarioSeleccionado.fecha_inicio}</span>
                </div>
                <div>
                  <label><b>Fecha fin:</b></label>
                  <span> {usuarioSeleccionado.fecha_fin}</span>
                </div>
                <div>
                  <label><b>Usuario creación:</b></label>
                  <span> {usuarioSeleccionado.usuarioCreacion}</span>
                </div>
              </div>
              <div>
                <label><b>Usuario modificacion:</b></label>
                <span> {usuarioSeleccionado.usuarioModificacion}</span>
              </div>

            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary fuente" onClick={onClose}>
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>

  );
};

export default RegistroUsuario;
