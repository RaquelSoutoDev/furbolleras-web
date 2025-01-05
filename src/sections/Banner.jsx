import { motion } from "framer-motion";
import "../styles/Banner.css";
import bannerDesktop from "../assets/frb.jpeg";
import bannerMobile from "../assets/banner-mobile.png";

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
      <div className="banner-text">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          MENOS CACHITAS Y MÁS CUCHARITAS
        </motion.h2>
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          FURBOLLERAS
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          EQUIPO DE FURBITO DE MUCHACHAS Y DISIDENCIAS EN SEVILLA
        </motion.h2>
      </div>
    </div>
  );
};

export default Banner;
