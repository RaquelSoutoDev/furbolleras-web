import { useState } from "react";
import { crearPartido } from "../api/api";
import PropTypes from "prop-types";

const FormPartido = ({ setPartidos }) => {
  const initialState = {
    equipo_1: "",
    equipo_2: "",
    resultado_equipo_1: "",
    resultado_equipo_2: "",
    fecha: "",
    estado: "Pendiente",
    tipo_partido: "Amistoso",
  };

  const [form, setForm] = useState(initialState);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const nuevoPartido = await crearPartido(form);
      setPartidos((prev) => [...prev, nuevoPartido]);
      setForm(initialState);
      alert("Partido creado con éxito");
    } catch (err) {
      console.error("Error del backend:", err.response?.data || err.message);
      alert("Error al crear el partido");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="Formulario">
      <div className="form-group">
        <label className="form-label">Equipo local</label>
        <input
          className="input-cuenta"
          type="text"
          name="equipo_1"
          placeholder="Nombre del equipo local"
          value={form.equipo_1}
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
          placeholder="Nombre del equipo visitante"
          value={form.equipo_2}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label className="form-label">Resultado local</label>
        <input
          className="input-cuenta"
          type="number"
          name="resultado_equipo_1"
          placeholder="— (opcional)"
          value={form.resultado_equipo_1}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label className="form-label">Resultado visitante</label>
        <input
          className="input-cuenta"
          type="number"
          name="resultado_equipo_2"
          placeholder="— (opcional)"
          value={form.resultado_equipo_2}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label className="form-label">Fecha y hora</label>
        <input
          className="input-cuenta"
          type="datetime-local"
          name="fecha"
          value={form.fecha}
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
          placeholder="Campo o instalación"
          value={form.ubicacion}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label className="form-label">Estado</label>
        <select
          className="cuenta-select"
          name="estado"
          value={form.estado}
          onChange={handleChange}
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
          value={form.tipo_partido}
          onChange={handleChange}
        >
          <option value="Amistoso">Amistoso</option>
          <option value="Liga-IMD">Liga-IMD</option>
          <option value="Torneo">Torneo</option>
        </select>
      </div>

      <button type="submit" className="btn-primary">
        Crear partido
      </button>
    </form>
  );
};

FormPartido.propTypes = {
  setPartidos: PropTypes.func.isRequired,
};

export default FormPartido;
