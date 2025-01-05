import { useEffect, useState } from "react";
import "../styles/ProximoPartido.css";


const ProximoPartido = () => {
    const [partido, setPartido] = useState(null);

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
            }
        };
        fetchProximoPartido();
    }, []);
    if (!partido) return <div className="partido-bar">Cargando próximo partido...</div>;

    return (
        <div className="partido-bar">
            <p className="partido-bar_p">
                Próximo Partido: {partido.equipo_1} vs {partido.equipo_2} - {" "}{new Date(partido.fecha).toLocaleDateString()} | {partido.ubicacion}
            </p>
        </div>
    );
};

export default ProximoPartido;