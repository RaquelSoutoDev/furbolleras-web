import { useState } from "react";
import "../styles/PreguntasFrecuentes.css";

const preguntas = [
  {
    pregunta: "¿Cómo puedo unirme a Furbolleras?",
    respuesta: "Puedes escribirnos al correo electrónico y si el grupo de WhatsApp está abierto te añadimos. Para participar en la liga, es importante asistir a entrenamientos.",
  },
  {
    pregunta: "¿Qué es el fútbol sala?",
    respuesta: "El fútbol sala es una variante del fútbol con 5 jugadoras por equipo. El partido dura 40 minutos divididos en dos partes de 20 minutos.",
  },
  {
    pregunta: "¿Hay que pagar para unirse al equipo?",
    respuesta: "No es obligatorio, pero es un equipo autogestionado. Las aportaciones ayudan a cubrir gastos como pistas, balones y más.",
  },
  {
    pregunta: "¿Qué es el IMD?",
    respuesta: "El IMD es el Instituto Municipal de Deportes de Sevilla. Furbolleras participa en la categoría Única Femenina del distrito Nervión-San Pablo.",
  },
  {
    pregunta: "¿Cada cuánto jugáis?",
    respuesta: "Organizamos pachangas los martes y entrenamos los jueves. Los partidos de liga suelen ser los fines de semana.",
  },
];

const PreguntasFrecuentes = () => {
  const [activo, setActivo] = useState(null);

  const togglePregunta = (index) => {
    setActivo((prev) => (prev === index ? null : index));
  };

  return (
    <section className="preguntas-frecuentes">
      <h2>Preguntas Frecuentes</h2>
      <div className="acordeon">
        {preguntas.map((item, index) => (
          <div key={index} className="acordeon-item">
            <div className="acordeon-header" onClick={() => togglePregunta(index)}>
              <h3>{item.pregunta}</h3>
              <span className="icono">
                <div className="linea horizontal" />
                <div
                  className={`linea vertical ${activo === index ? "" : "abierto"}`}
                />
              </span>
            </div>
            {activo === index && (
              <div className="acordeon-body">
                <p>{item.respuesta}</p>
              </div>
            )}
            <div className="linea-separador" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PreguntasFrecuentes;
