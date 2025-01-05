import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import "../styles/QuienesSomos.css";

const textos = [
  "Furbolleras FC es un equipo de fútbol sala femenino fundado en Sevilla en 2022.",
  "Nuestro objetivo es crear un espacio seguro e inclusivo para personas LGTBQ+ en el deporte.",
  "Creemos en la igualdad, la diversidad y el respeto dentro y fuera de la cancha.",
];

const QuienesSomos = () => {
  const [index, setIndex] = useState(0); 
  const [isActive, setIsActive] = useState(false); 
  const sectionRef = useRef(null); 

  
  useEffect(() => {
    let interval;
    if (isActive && index < textos.length - 1) {
      interval = setInterval(() => {
        setIndex((prev) => prev + 1);
      }, 3000); // Cambia cada 3 segundos
    }

    return () => clearInterval(interval); 
  }, [isActive, index]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIndex(0); 
          setIsActive(true); 
        } else {
          setIsActive(false); 
        }
      },
      { threshold: 0.5 } 
    );

    const currentSection = sectionRef.current;
    if (currentSection) observer.observe(currentSection);

    return () => {
      if (currentSection) observer.unobserve(currentSection);
    };
  }, []);

  return (
    <section className="quienes-somos" ref={sectionRef}>
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.8 }}
        className="texto-container"
      >
        <p className="texto">{textos[index]}</p>
        {index === textos.length - 1 && (
          <a href="#manifiesto" className="boton-manifiesto">
            Conoce nuestro manifiesto
          </a>
        )}
      </motion.div>
    </section>
  );
};

export default QuienesSomos;
