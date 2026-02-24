import { useState, useEffect, useMemo } from "react";
import PartidoCard from "../components/PartidoCard";
import "../styles/Partidos.css";

const Partidos = () => {
  const [partidos, setPartidos] = useState([]);
  const [filtro, setFiltro] = useState({ tipo: "Todos", estado: "Pendiente", año: "Todos" });
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
      setPartidosPorPagina(isMobile ? 4 : 9);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Resetear paginación cuando cambia el filtro
  useEffect(() => {
    setPaginaActual(1);
  }, [filtro]);

  // Años disponibles extraídos de los datos
  const años = useMemo(() => {
    const yearsSet = new Set(partidos.map((p) => new Date(p.fecha).getUTCFullYear()));
    return [...yearsSet].sort((a, b) => b - a);
  }, [partidos]);

  const partidosFiltrados = useMemo(() => {
    const filtered = partidos.filter((p) => {
      const cumpleTipo = filtro.tipo === "Todos" || p.tipo_partido === filtro.tipo;
      const cumpleEstado = filtro.estado === "Todos" || p.estado === filtro.estado;
      const cumpleAño =
        filtro.año === "Todos" || new Date(p.fecha).getUTCFullYear() === Number(filtro.año);
      return cumpleTipo && cumpleEstado && cumpleAño;
    });

    return [...filtered].sort((a, b) => {
      const isAPendiente = a.estado === "Pendiente";
      const isBPendiente = b.estado === "Pendiente";

      if (isAPendiente && !isBPendiente) return -1;
      if (!isAPendiente && isBPendiente) return 1;

      if (isAPendiente && isBPendiente) {
        // Pendientes: el más cercano a hoy primero
        return new Date(a.fecha) - new Date(b.fecha);
      }

      // Resto: los más recientes primero
      return new Date(b.fecha) - new Date(a.fecha);
    });
  }, [partidos, filtro]);

  const totalPaginas = Math.ceil(partidosFiltrados.length / partidosPorPagina);
  const indiceInicial = (paginaActual - 1) * partidosPorPagina;
  const partidosPaginados = partidosFiltrados.slice(indiceInicial, indiceInicial + partidosPorPagina);

  const cambiarPagina = (nuevaPagina) => {
    if (nuevaPagina > 0 && nuevaPagina <= totalPaginas) {
      setPaginaActual(nuevaPagina);
    }
  };

  return (
    <section className="partidos">
      <h2>Partidos</h2>

      <div className="filtros">
        <div className="filtros-grupo">
          <button
            className={filtro.tipo === "Todos" && filtro.estado === "Todos" && filtro.año === "Todos" ? "filtro-activo" : ""}
            onClick={() => setFiltro({ tipo: "Todos", estado: "Todos", año: "Todos" })}
          >
            Todos
          </button>
          <button
            className={filtro.tipo === "Liga-IMD" ? "filtro-activo" : ""}
            onClick={() => setFiltro({ ...filtro, tipo: "Liga-IMD" })}
          >
            IMD
          </button>
          <button
            className={filtro.tipo === "Amistoso" ? "filtro-activo" : ""}
            onClick={() => setFiltro({ ...filtro, tipo: "Amistoso" })}
          >
            Amistosos
          </button>
          <button
            className={filtro.tipo === "Torneo" ? "filtro-activo" : ""}
            onClick={() => setFiltro({ ...filtro, tipo: "Torneo" })}
          >
            Torneos
          </button>
        </div>

        <div className="filtros-grupo">
          <button
            className={filtro.estado === "Pendiente" ? "filtro-activo" : ""}
            onClick={() => setFiltro({ ...filtro, estado: "Pendiente" })}
          >
            Pendientes
          </button>
          <button
            className={filtro.estado === "Jugado" ? "filtro-activo" : ""}
            onClick={() => setFiltro({ ...filtro, estado: "Jugado" })}
          >
            Jugados
          </button>
          <button
            className={filtro.estado === "Cancelado" ? "filtro-activo" : ""}
            onClick={() => setFiltro({ ...filtro, estado: "Cancelado" })}
          >
            Cancelados
          </button>
        </div>

        {años.length > 0 && (
          <div className="filtros-grupo">
            <button
              className={filtro.año === "Todos" ? "filtro-activo" : ""}
              onClick={() => setFiltro({ ...filtro, año: "Todos" })}
            >
              Todos los años
            </button>
            {años.map((año) => (
              <button
                key={año}
                className={filtro.año === String(año) ? "filtro-activo" : ""}
                onClick={() => setFiltro({ ...filtro, año: String(año) })}
              >
                {año}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="partidos-grid">
        {partidosPaginados.length > 0 ? (
          partidosPaginados.map((partido) => (
            <PartidoCard key={partido.id} partido={partido} />
          ))
        ) : (
          <p className="sin-partidos">No hay partidos con estos filtros</p>
        )}
      </div>

      {totalPaginas > 1 && (
        <div className="paginacion">
          <button onClick={() => cambiarPagina(paginaActual - 1)} disabled={paginaActual === 1}>
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
      )}
    </section>
  );
};

export default Partidos;