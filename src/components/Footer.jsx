import "../styles/Footer.css";
import Logo from "../assets/logo_png.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src={Logo} alt="Logo Furbolleras" title="Logo Furbolleras" />
      </div>
      <div className="footer-links">
        <a
          href="https://www.instagram.com/furbolleras.sevilla/"
          target="_blank"
          rel="noopener noreferrer"
          title="Instagram Furbolleras"
        >
          Instagram
        </a>
        <a href="mailto:furbollerassevilla@gmail.com" title="Email de contacto">
          furbollerassevilla@gmail.com
        </a>
        <p>© Furbolleras F.C 2025</p>
      </div>
    </footer>
  );
};

export default Footer;
