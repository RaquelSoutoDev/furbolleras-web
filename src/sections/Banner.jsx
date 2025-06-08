import "../styles/Banner.css";
import bannerDesktop from "../assets/Banner-2.jpg";
import bannerMobile from "../assets/Banner-2M.jpg";

const Banner = () => {
  return (
    <div className="banner">
      <picture>
        <source srcSet={bannerMobile} media="(max-width: 750px)" />
        <img
          src={bannerDesktop}
          alt="Banner Furbolleras"
          className="banner-img"
        />
      </picture>
      <div className="banner-content">
        <h1 className="banner-title">FURBOLLERAS</h1>
        <h2 className="banner-subtitle">
          Equipo de furbito de muchachas y disidencias en Sevilla.
        </h2>
      </div>
    </div>
  );
};

export default Banner;
