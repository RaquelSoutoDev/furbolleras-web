import { useState } from "react";
import "../styles/Manifiesto.css";
import manifiestoImg from "../assets/Editadas/IMG_4847.jpg";

const manifiestoTexto = [
  "Furbolleras es un equipo de fútbol que surge por la necesidad de romper con todos aquellos escenarios de violencia que nos han ido sacando une a une de este deporte para poder generar un espacio amable lejos de toda competitividad y machiruladas. Nos nombramos como un lugar disidente dentro de este deporte, por lo que si todavía sientes que hay algo en ti que te conecta al fútbol y estás cansade de tanto patriarcado, vente, que aquí celebramos más los “casi gol” que los goles.",
  "Mientras somos nos autogestionamos, lo cual implica un esfuerzo por parte de sus componentes para que pueda funcionar, tanto desde el alquiler de las pistas para echar una pachanga como la gestión de una liga. Es por esto que funcionamos con a una línea de compromiso donde la base sería la pachanga, que ya de por sí requiere de una responsabilidad puesto que si se decide ir a una pachanga y se apunta une en la lista pedimos que se asista, por todo lo que supone avisar la misma tarde, o con poco tiempo, de que no se puede ir. Es lo que tiene la autogestión.",
  "Si el compromiso mínimo nos permite disfrutar de las pachangas, eres bienvenide. Si te apetece compartir más, organizamos entrenos que también requieren de un esfuerzo y de una logística, y también de una compa que se los prepara en base a las personas que se apuntan. Y si te apetece ponerle la guinda al pastel, formamos parte también de una liga donde el no compromiso influye mucho más, por lo que sí pedimos que haya humildad y honestidad a la hora de saber dónde ubicarse.",
  "La vida es un caos, lo asumimos, y solo por esto nos comprendemos y nos acompañamos. Todes tenemos movidas, curros inestables, taritas personales y una amalgama emocional considerable que nos lleva a querer que esto sea un espacio cómodo, teniendo presente todo el rato la importancia de lo colectivo.",
  "Este equipo es un espacio asambleario y antiautoritario, donde se confrontarán las prácticas racistas, machistas, homófobas, clasistas, tránsfobas y cualquier violencia que suponga la opresión o la incomodidad de une persone. Estamos cansades de la competitividad de este deporte, venimos a divertirnos, a mover la cuerpa y a dejar los juicios fuera.",
];

const Manifiesto = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const nextPage = () => {
    if (currentPage < manifiestoTexto.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <section id="manifiesto" className="manifiesto">
      <h2>Manifiesto</h2>
      <div className="manifiesto-content-wrapper">
        <div className="manifiesto-img-container">
          <img src={manifiestoImg} alt="Furbolleras en círculo" />
        </div>
        <div className="manifiesto-contenido">
          <p>{manifiestoTexto[currentPage]}</p>
          <div className="manifiesto-navegacion">
            <button onClick={prevPage} disabled={currentPage === 0}>
              Anterior
            </button>
            <span>{`${currentPage + 1} / ${manifiestoTexto.length}`}</span>
            <button
              onClick={nextPage}
              disabled={currentPage === manifiestoTexto.length - 1}
            >
              Siguiente
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Manifiesto;
