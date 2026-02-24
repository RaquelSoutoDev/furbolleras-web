import "../styles/GaleriaAnimada.css";
import img1 from "../assets/Animacion-1.jpg";
import img2 from "../assets/Animacion-2.jpg";
import img5 from "../assets/Animacion-3.jpg";
import img4 from "../assets/Animacion-4.jpg";
import img3 from "../assets/Animacion-5.jpg";

const images = [
  { src: img1, alt: "Momento 1", rotate: -5 },
  { src: img2, alt: "Momento 2", rotate: 3 },
  { src: img3, alt: "Momento 3", rotate: -7 },
  { src: img4, alt: "Momento 4", rotate: 4 },
  { src: img5, alt: "Momento 5", rotate: -3 },
];

// Duplicamos para el loop infinito sin saltos
const allImages = [...images, ...images];

const GaleriaAnimada = () => (
  <section className="galeria-animada">
    <div className="galeria-wrapper">
      <div className="galeria-grid">
        {allImages.map((image, index) => (
          <div
            key={index}
            className="galeria-item"
            style={{ "--rotate": `${image.rotate}deg` }}
          >
            <img src={image.src} alt={image.alt} className="galeria-img" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GaleriaAnimada;