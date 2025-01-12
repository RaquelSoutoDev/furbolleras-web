import { useState } from "react";
import "../styles/Contacto.css";

const Contacto = () => {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Evita el comportamiento predeterminado del formulario
    console.log("Formulario enviado:", form); // Depuración en consola
  };

  return (
    <section className="contacto">
      <h2>Contacto</h2>
      <form
        name="contacto"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit} // Aquí se utiliza correctamente
      >
        {/* Campo oculto para Netlify */}
        <input type="hidden" name="form-name" value="contacto" />
        <div style={{ display: "none" }}>
          <label>
            No llenar este campo: <input name="bot-field" />
          </label>
        </div>

        {/* Campo de Nombre */}
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={form.nombre}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Campo de Correo Electrónico */}
        <div className="form-group">
          <label htmlFor="email">Correo electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Campo de Mensaje */}
        <div className="form-group">
          <label htmlFor="mensaje">Mensaje:</label>
          <textarea
            id="mensaje"
            name="mensaje"
            rows="5"
            value={form.mensaje}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>

        {/* Botón de Enviar */}
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};

export default Contacto;
