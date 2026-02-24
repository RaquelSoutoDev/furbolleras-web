import { useState } from "react";
import PropTypes from "prop-types";

const EditablePartido = ({ partido, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedPartido, setEditedPartido] = useState({ ...partido });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedPartido({ ...editedPartido, [name]: value });
  };

  const handleSave = () => {
    onUpdate(editedPartido);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedPartido({ ...partido });
    setIsEditing(false);
  };

  const resultado1 =
    partido.resultado_equipo_1 !== null &&
    partido.resultado_equipo_1 !== undefined
      ? partido.resultado_equipo_1
      : "-";
  const resultado2 =
    partido.resultado_equipo_2 !== null &&
    partido.resultado_equipo_2 !== undefined
      ? partido.resultado_equipo_2
      : "-";

  const estadoClass = partido.estado
    ? `badge badge-${partido.estado.toLowerCase()}`
    : "badge badge-tipo";

  return (
    <li className="formulario_li">
      {isEditing ? (
        <div className="edit-form">
          <div className="edit-row">
            <div className="form-group">
              <label className="form-label">Equipo local</label>
              <input
                className="input-cuenta"
                type="text"
                name="equipo_1"
                value={editedPartido.equipo_1}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">Equipo visitante</label>
              <input
                className="input-cuenta"
                type="text"
                name="equipo_2"
                value={editedPartido.equipo_2}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="edit-row">
            <div className="form-group">
              <label className="form-label">Resultado local</label>
              <input
                className="input-cuenta"
                type="number"
                name="resultado_equipo_1"
                value={editedPartido.resultado_equipo_1 || ""}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Resultado visitante</label>
              <input
                className="input-cuenta"
                type="number"
                name="resultado_equipo_2"
                value={editedPartido.resultado_equipo_2 || ""}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Fecha</label>
            <input
              className="input-cuenta"
              type="datetime-local"
              name="fecha"
              value={editedPartido.fecha.slice(0, 16)}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Ubicación</label>
            <input
              className="input-cuenta"
              type="text"
              name="ubicacion"
              value={editedPartido.ubicacion}
              onChange={handleChange}
              required
            />
          </div>

          <div className="edit-row">
            <div className="form-group">
              <label className="form-label">Estado</label>
              <select
                className="cuenta-select"
                name="estado"
                value={editedPartido.estado}
                onChange={handleChange}
                required
              >
                <option value="Pendiente">Pendiente</option>
                <option value="Jugado">Jugado</option>
                <option value="Pospuesto">Pospuesto</option>
                <option value="Cancelado">Cancelado</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Tipo de partido</label>
              <select
                className="cuenta-select"
                name="tipo_partido"
                value={editedPartido.tipo_partido}
                onChange={handleChange}
                required
              >
                <option value="Amistoso">Amistoso</option>
                <option value="Liga-IMD">Liga-IMD</option>
                <option value="Torneo">Torneo</option>
              </select>
            </div>
          </div>

          <div className="contenedor-button">
            <button className="btn-guardar" onClick={handleSave}>
              Guardar
            </button>
            <button className="btn-cancelar" onClick={handleCancel}>
              Cancelar
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="partido-header">
            <div className="partido-vs">
              <span className="partido-equipo">{partido.equipo_1}</span>
              <span className="partido-score">
                {resultado1} - {resultado2}
              </span>
              <span className="partido-equipo visitante">{partido.equipo_2}</span>
            </div>
          </div>

          <div className="partido-details">
            <div className="detail-item">
              <span className="detail-label">Fecha</span>
              <span className="detail-value">
                {partido.fecha.replace("T", " ").slice(0, 16)}
              </span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Ubicación</span>
              <a
                className="maps-link"
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(partido.ubicacion)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {partido.ubicacion}
              </a>
            </div>
          </div>

          <div className="partido-footer">
            <div className="partido-badges">
              <span className={estadoClass}>{partido.estado}</span>
              <span className="badge badge-tipo">{partido.tipo_partido}</span>
            </div>
            <div className="contenedor-button">
              <button
                className="btn-editar"
                onClick={() => setIsEditing(true)}
              >
                Editar
              </button>
              <button
                className="btn-eliminar"
                onClick={() => onDelete(partido.id)}
              >
                Eliminar
              </button>
            </div>
          </div>
        </>
      )}
    </li>
  );
};

EditablePartido.propTypes = {
  partido: PropTypes.shape({
    id: PropTypes.number.isRequired,
    equipo_1: PropTypes.string.isRequired,
    equipo_2: PropTypes.string.isRequired,
    resultado_equipo_1: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    resultado_equipo_2: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    fecha: PropTypes.string.isRequired,
    estado: PropTypes.string.isRequired,
    tipo_partido: PropTypes.string.isRequired,
    ubicacion: PropTypes.string.isRequired,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default EditablePartido;
