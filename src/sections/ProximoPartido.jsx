import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import "../styles/ProximoPartido.css";


const ProximoPartido = () => {
    const [partido, setPartido] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchProximoPartido = async () => {
            try {
                const response = await fetch("https://backend-frb.onrender.com/partidos");
                const partidos = await response.json();
                const proximoPartido = partidos.find(
                    (p) => new Date(p.fecha) > new Date()
                );
                setPartido(proximoPartido);
            } catch (error) {
                console.error("Error al obtener el próximo partido:", error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchProximoPartido();
    }, []);

    if (isLoading) {
        return <div className="partido-bar">Cargando próximo partido...</div>
    }

    if (!partido) return <div className="partido-bar">Ahora mismo no hay partidos pendientes</div>;

    return (
        <div className="partido-bar">
            <Link 
            className="partido-bar_p"
            to="partidos"
            smooth={true}
            duration={500}
            >
                Próximo Partido: {partido.equipo_1} vs {partido.equipo_2} - {" "}{new Date(partido.fecha).toLocaleDateString()} | {partido.ubicacion}
            </Link>
        </div>
    );
};

export default ProximoPartido;