import "../styles/Banner.css";
import bannerDesktop from "../assets/Editadas/IMG_4825.jpg";
import bannerMobile from "../assets/Editadas/IMG_4813.jpg";

const Banner = () => {
  return (
    <div className="banner">
      <picture>
        <source srcSet={bannerMobile} media="(max-width: 750px)" />
        <img
          src={bannerDesktop}
          alt="Banner Furbolleras"
          className="banner-img"
          loading="eager"
          {...{ fetchpriority: "high" }}
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
