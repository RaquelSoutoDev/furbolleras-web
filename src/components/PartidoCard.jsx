import PropTypes from "prop-types";
import "../styles/PartidoCard.css";

const PartidoCard = ({ partido }) => {
  const { equipo_1, equipo_2, resultado_equipo_1, resultado_equipo_2, fecha, estado, ubicacion } = partido;


  const formatDateUTC = (fecha) => {
    const date = new Date(fecha);
    const day = String(date.getUTCDate()).padStart(2, "0");
    const month = String(date.getUTCMonth() + 1).padStart(2, "0"); 
    const year = date.getUTCFullYear();
    const hours = String(date.getUTCHours()).padStart(2, "0");
    const minutes = String(date.getUTCMinutes()).padStart(2, "0");
    return `${day}/${month}/${year} ${hours}:${minutes}`;
  };

  const formattedDate = formatDateUTC(fecha);

  return (
    <div className="partido-card card-partido" >
      <h3>{`${equipo_1} vs ${equipo_2}`}</h3>
      <p>
        {resultado_equipo_1 !== null && resultado_equipo_2 !== null
          ? `Resultado: ${resultado_equipo_1} - ${resultado_equipo_2}`
          : "Resultado: Pendiente"}
      </p>
      <p>{`Fecha: ${formattedDate}`}</p>
      <p>{`Estado: ${estado}`}</p>
      <p>
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ubicacion)}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {ubicacion}
        </a>
      </p>
    </div>
  );
};

PartidoCard.propTypes = {
  partido: PropTypes.shape({
    equipo_1: PropTypes.string.isRequired,
    equipo_2: PropTypes.string.isRequired,
    resultado_equipo_1: PropTypes.number,
    resultado_equipo_2: PropTypes.number,
    fecha: PropTypes.string.isRequired,
    estado: PropTypes.string.isRequired,
    tipo_partido: PropTypes.string.isRequired,
    ubicacion: PropTypes.string.isRequired,
  }).isRequired,
};

export default PartidoCard;
