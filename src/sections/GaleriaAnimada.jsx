import "../styles/GaleriaAnimada.css";
import img1 from "../assets/Animacion-1.jpg";
import img2 from "../assets/Animacion-2.jpg";
import img5 from "../assets/Animacion-3.jpg";
import img4 from "../assets/Animacion-4.jpg"; 
import img3 from "../assets/Animacion-5.jpg";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const images = [
    { src: img1, alt: "Momento 1", rotateMobile: -5, rotateDesktop: -5 },
    { src: img2, alt: "Momento 2", rotateMobile: 8, rotateDesktop: -5 },
    { src: img3, alt: "Momento 3", rotateMobile: -12, rotateDesktop: -5 },
    { src: img4, alt: "Momento 4", rotateMobile: 5, rotateDesktop: -5 },
    { src: img5, alt: "Momento 5", rotateMobile: -8, rotateDesktop: -5 },
];
  
const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 750);
  
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 750);
      };
  
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
    return isMobile;
  };
  
  const GaleriaAnimada = () => {
    const isMobile = useIsMobile();
  
    return (
      <section className="galeria-animada">
        <div className={`galeria-grid ${isMobile ? "mobile-stack" : ""}`}>
          {images.map((image, index) => (
            <motion.img
                key={index}
                src={image.src}
                alt={image.alt}
                className="galeria-img"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                    rotate: isMobile ? image.rotateMobile : image.rotateDesktop,
                }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                    duration: isMobile ? 0.5 : 0.6,
                    delay: index * (isMobile ? 0.8 : 0.3),
                    ease: "easeOut",
                }}
                style={{
                    zIndex: index + 1,
                }}
            />
          ))}
        </div>
      </section>
    );
};
  
export default GaleriaAnimada;
