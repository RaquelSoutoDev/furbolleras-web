import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/base.css';
import './assets/fonts/DESTROY_.TFF'
import Footer from './components/Footer';

//Importaciones de la HOME
import Header from "./components/Header";
import ProximoPartido from "./sections/ProximoPartido";
import Banner from "./sections/Banner";
import QuienesSomos from './sections/QuienesSomos';
import Partidos from './sections/Partidos';
import PreguntasFrecuentes from './sections/PreguntasFrecuentes';
import Manifiesto from './sections/Manifiesto';
import Contacto from './sections/Contacto';

// import Mantenimiento from './components/Mantenimiento';

import Antiliga from './pages/Antiliga';

function Home() {
  return (
    <div>
      {/* <Mantenimiento /> */}
      <Header />
      <ProximoPartido />
      <Banner />
      <QuienesSomos />
      <Partidos />
      <PreguntasFrecuentes />
      <Manifiesto />
      <Contacto />
      <Footer />
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/antiliga' element={<Antiliga />} />
      </Routes>
    </Router>
  )
}

export default App
