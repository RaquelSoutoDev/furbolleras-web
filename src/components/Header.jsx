import { useState, useEffect, useRef } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import "../styles/Header.css";
import HamburguesaIcon from "../assets/hamburguesa.svg";
import CuentaIcon from "../assets/cuenta.svg";
import TiendaIcon from "../assets/tienda.svg";
import Logo from "../assets/Logo-furbolleras-colores.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null); 

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  const handleClickOutside = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      !buttonRef.current.contains(event.target) 
    ) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="header">
      <button
        ref={buttonRef}
        className="menu-btn"
        onClick={toggleMenu}
      >
        <img
          src={HamburguesaIcon}
          alt="Menú"
          className="icon"
          title="Menú desplegable"
          loading="lazy"
        />
      </button>
      <div className="logo">
        <RouterLink to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <img src={Logo} alt="Logo" title="Logo Furbolleras" loading="lazy" />
        </RouterLink>
      </div>
      <div>
      <button
        className="login-btn"
        onClick={() =>
          (window.location.href = "https://furbolleras.myshopify.com/")
        }
      >
        <img
          src={TiendaIcon}
          alt="Tienda"
          className="icon"
          title="Tienda Furbolleras"
          loading="lazy"
        />
      </button>
      <button
        className="login-btn"
        onClick={() =>
          (window.location.href = "/cuenta")
        }
      >
        <img
          src={CuentaIcon}
          alt="Cuenta"
          className="icon"
          title="Cuenta Furbollera"
          loading="lazy"
        />
      </button>
      </div>

      <nav
        ref={menuRef}
        className={`menu ${menuOpen ? "open" : ""}`}
      >
        <ul>
          <li>
            <ScrollLink
              to="quienes-somos"
              smooth={true}
              duration={500}
              onClick={() => setMenuOpen(false)}
            >
              Quienes somos
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="partidos"
              smooth={true}
              duration={500}
              onClick={() => setMenuOpen(false)}
            >
              Partidos
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="manifiesto"
              smooth={true}
              duration={500}
              onClick={() => setMenuOpen(false)}
            >
              Manifiesto
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="preguntas-frecuentes"
              smooth={true}
              duration={500}
              onClick={() => setMenuOpen(false)}
            >
              Preguntas Frecuentes
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="contacto"
              smooth={true}
              duration={500}
              onClick={() => setMenuOpen(false)}
            >
              Contacto
            </ScrollLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
