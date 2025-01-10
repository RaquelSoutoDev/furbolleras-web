import "../styles/Banner.css";
import bannerDesktop from "../assets/Banner-1.png";
import bannerMobile from "../assets/Banner-1M.png";

const Banner = () => {
  return (
    <div className="banner">
      <picture>
        <source srcSet={bannerMobile} media="(max-width: 775px)" />
        <img
          src={bannerDesktop}
          alt="Banner Furbolleras"
          className="banner-img"
        />
      </picture>
    </div>  
  );
};

export default Banner;
