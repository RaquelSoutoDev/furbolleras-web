import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/base.css";
import "./assets/fonts/destroy.ttf";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProximoPartido from "./sections/ProximoPartido";
import Banner from "./sections/Banner";
import QuienesSomos from "./sections/QuienesSomos";
import GaleriaAnimada from "./sections/GaleriaAnimada";
import Partidos from "./sections/Partidos";
import PreguntasFrecuentes from "./sections/PreguntasFrecuentes";
import Manifiesto from "./sections/Manifiesto";
import Contacto from "./sections/Contacto";

import Cuenta from "./components/Cuenta";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";

function Home() {
  return (
    <div>
      <Header />
      <ProximoPartido />
      <Banner />
      <QuienesSomos />
      <GaleriaAnimada />
      <Partidos />
      <Manifiesto />
      <PreguntasFrecuentes />
      <Contacto />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/cuenta"
          element={
            <PrivateRoute>
              <Cuenta />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
