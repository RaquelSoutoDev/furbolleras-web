import { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import "../styles/Header.css";
import HamburguesaIcon from "../assets/hamburguesa.svg";
import CuentaIcon from "../assets/cuenta.svg";
import Logo from "../assets/logo_png.png";

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
        <img src={Logo} alt="Logo" title="Logo Furbolleras" loading="lazy" />
      </div>
      <button
        className="login-btn"
        onClick={() =>
          (window.location.href = "https://furbolleras-app.onrender.com")
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

      <nav
        ref={menuRef}
        className={`menu ${menuOpen ? "open" : ""}`}
      >
        <ul>
          <li>
            <Link
              to="quienes-somos"
              smooth={true}
              duration={500}
              onClick={() => setMenuOpen(false)}
            >
              Quienes somos
            </Link>
          </li>
          <li>
            <Link
              to="partidos"
              smooth={true}
              duration={500}
              onClick={() => setMenuOpen(false)}
            >
              Partidos
            </Link>
          </li>
          <li>
            <Link
              to="manifiesto"
              smooth={true}
              duration={500}
              onClick={() => setMenuOpen(false)}
            >
              Manifiesto
            </Link>
          </li>
          <li>
            <Link
              to="preguntas-frecuentes"
              smooth={true}
              duration={500}
              onClick={() => setMenuOpen(false)}
            >
              Preguntas Frecuentes
            </Link>
          </li>
          <li>
            <Link
              to="contacto"
              smooth={true}
              duration={500}
              onClick={() => setMenuOpen(false)}
            >
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
