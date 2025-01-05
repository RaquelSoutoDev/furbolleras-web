import { useState, useEffect } from "react";
import PartidoCard from "../components/PartidoCard";
import "../styles/Partidos.css";

const Partidos = () => {
  const [partidos, setPartidos] = useState([]);
  const [filtro, setFiltro] = useState({ tipo: "Todos", estado: "Todos" });
  const [paginaActual, setPaginaActual] = useState(1);
  const [partidosPorPagina, setPartidosPorPagina] = useState(window.innerWidth <= 750 ? 4 : 9);

  useEffect(() => {
    const fetchPartidos = async () => {
      try {
        const response = await fetch("https://backend-frb.onrender.com/partidos");
        const data = await response.json();
        setPartidos(data);
      } catch (error) {
        console.error("Error al cargar los partidos:", error);
      }
    };

    fetchPartidos();

    const handleResize = () => {
        const isMobile = window.innerWidth <= 750;
        setPartidosPorPagina (isMobile ? 4 : 9);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const partidosFiltrados = partidos.filter((p) => {
    const cumpleTipo = filtro.tipo === "Todos" || p.tipo_partido === filtro.tipo;
    const cumpleEstado = filtro.estado === "Todos" || p.estado === filtro.estado;
    return cumpleTipo && cumpleEstado;
  });

  const indiceInicial = (paginaActual - 1) * partidosPorPagina;
  const indiceFinal = indiceInicial + partidosPorPagina;
  const partidosPaginados = partidosFiltrados.slice(indiceInicial, indiceFinal);

  const totalPaginas = Math.ceil(partidosFiltrados.length / partidosPorPagina);

  const cambiarPagina = (nuevaPagina) => {
    if (nuevaPagina > 0 && nuevaPagina <= totalPaginas) {
      setPaginaActual(nuevaPagina);
    }
  };

  return (
    <section className="partidos">
      <h2>Partidos</h2>
      <h5>Temporada 24/25</h5>
      <div className="filtros">
        <button onClick={() => setFiltro({ tipo: "Todos", estado: "Todos" })}>Todos</button>
        <button onClick={() => setFiltro({ ...filtro, tipo: "Liga-IMD" })}>IMD</button>
        <button onClick={() => setFiltro({ ...filtro, tipo: "Amistoso" })}>Amistosos</button>
        <button onClick={() => setFiltro({ ...filtro, tipo: "Torneo" })}>Torneos</button>
        <button onClick={() => setFiltro({ ...filtro, estado: "Pendiente" })}>Pendientes</button>
        <button onClick={() => setFiltro({ ...filtro, estado: "Jugado" })}>Jugados</button>
        <button onClick={() => setFiltro({ ...filtro, estado: "Cancelado" })}>Cancelados</button>
      </div>

      <div className="partidos-grid">
        {partidosPaginados.map((partido) => (
          <PartidoCard key={partido.id} partido={partido} />
        ))}
      </div>

      {/* Paginación */}
      <div className="paginacion">
        <button
          onClick={() => cambiarPagina(paginaActual - 1)}
          disabled={paginaActual === 1}
        >
          Anterior
        </button>
        <span>
          Página {paginaActual} de {totalPaginas}
        </span>
        <button
          onClick={() => cambiarPagina(paginaActual + 1)}
          disabled={paginaActual === totalPaginas}
        >
          Siguiente
        </button>
      </div>
    </section>
  );
};

export default Partidos;
