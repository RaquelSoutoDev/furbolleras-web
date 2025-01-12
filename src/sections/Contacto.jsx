import { useState } from "react";
import "../styles/Contacto.css";

const Contacto = () => {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const [captchaVerified, setCaptchaVerified] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleCaptcha = () => {
    setCaptchaVerified(true);
  };

  const handleSubmit = (e) => {
    if (!captchaVerified) {
      alert("Por favor, verifica el captcha antes de enviar.");
      e.preventDefault();
      return;
    }
  }

  return (
    <section className="contacto">
      <h2>Contacto</h2>
      <form
        onSubmit={handleSubmit}
        name="contacto"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contacto" />
        <div style={{ display: "none" }}>
          <label>
            No llenar este campo: <input name="bot-field" />
          </label>
        </div>
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

        <div className="captcha-container" data-sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}>
          <button type="button" onClick={handleCaptcha}>
            Verificar Captcha
          </button>
        </div>

        <button type="submit" disabled={!captchaVerified}>
          Enviar
        </button>
      </form>
    </section>
  );
};

export default Contacto;
