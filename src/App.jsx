import './styles/base.css';
import Header from "./components/Header";
import ProximoPartido from "./sections/ProximoPartido";
import Banner from "./sections/Banner";
import QuienesSomos from './sections/QuienesSomos';
import Partidos from './sections/Partidos';
import PreguntasFrecuentes from './sections/PreguntasFrecuentes';
// import Mantenimiento from './components/Mantenimiento';

function App() {
  return (
    <div>
      {/* <Mantenimiento /> */}
      <Header />
      <ProximoPartido />
      <Banner />
      <QuienesSomos />
      <Partidos />
      <PreguntasFrecuentes />
    </div>
  )
}

export default App
