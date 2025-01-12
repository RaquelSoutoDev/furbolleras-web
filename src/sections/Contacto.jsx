import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import "../styles/Contacto.css";

const Contacto = () => {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const [captchaToken, setCaptchaToken] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleCaptchaChange = (token) => {
    setCaptchaToken(token);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!captchaToken) {
      setErrorMessage("Por favor, verifica el captcha antes de enviar.");
      return;
    }

    try {
      const response = await fetch("https://backend-frb.onrender.com/contacto", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...form, captchaToken }),
      });

      if (response.ok) {
        setSuccessMessage("Mensaje enviado correctamente. ¡Gracias!");
        setErrorMessage("");
        setForm({ nombre: "", email: "", mensaje: "" });
        setCaptchaToken("");
      } else {
        setSuccessMessage("");
        setErrorMessage("Hubo un error al enviar el mensaje. Intenta de nuevo.");
      }
    } catch (error) {
      console.error("Error al enviar el mensaje:", error);
      setSuccessMessage("");
      setErrorMessage("Hubo un error al enviar el mensaje. Intenta de nuevo.");
    }
  };

  return (
    <section className="contacto">
      <h2>Contacto</h2>
      {successMessage && <p className="success-message">{successMessage}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
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

        <div className="captcha-container">
          <ReCAPTCHA
            sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
            onChange={handleCaptchaChange}
          />
        </div>

        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};

export default Contacto;
