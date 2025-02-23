import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/Antiliga.css";
import "../styles/base.css"
import bannerDesktop from "../assets/Banner-antiliga-escritorio.jpeg";
import bannerMobile from "../assets/Banner-antiliga-movil.jpeg";
import equipo1 from "../assets/logo_png.png";
import colab1 from "../assets/Ladys.png";

function Antiliga() {
    return (
        <div>
            <Header />
            <main className="main">
                <div className="banner">
                    <picture>
                        <source srcSet={bannerMobile} media="(max-width: 775px)" />
                        <img
                            src={bannerDesktop}
                            alt="Banner Antiliga"
                            className="banner-img"
                        />
                    </picture>
                    <div className="titulo">
                        <h1 className="banner-h1">ANTILIGA</h1>
                    </div>
                </div>
                <section className="section-info">
                    <h2>¿Qué es la antiliga?</h2>
                    <p>La antiliga es un torneo de fútbol sala donde va a predominar el buenrrollismo, pasarlo bien y la diversión. Además tendremos convivencia, rifas, juegos, baile y muchas sorpresas.</p>
                    <p>Los equipos serán elegidos de forma interna pero si tienes un equipo super chulo y quieres participar contáctanos por redes o a través del formulario de contacto de nuestra web.</p>
                    <p>Por otro lado, este es un evento para que vengais a conocernos, no solo a nosotras, sino a los pedazos de equipos que os vamos a traer, a que nos animéis y a que después del torneo comamos, bailemos y juguemos todes juntes.</p>
                    <h2 className="right">¿Dónde y cuándo?</h2>
                    <p>En el <a href="https://g.co/kgs/oD8ibF3">Centro Deportivo Tejares</a> el 9 de Marzo de 2025 de 10am a 3pm.</p>
                    <p>Para llegar hasta allí tenéis una parada de Tussam justo en frente y muy cerca queda Chapina para les que vengáis en bus desde los pueblos.</p>
                    <h2>Organiza</h2>
                    <div>
                        <div>
                            <img
                                src={equipo1}
                                alt="Logo Furbolleras" 
                                className="logo-equipo"
                            />
                        </div>
                    </div>
                    <h2 className="right">Colaboran</h2>
                    <div className="colaboraciones">
                        <div className="contenedor-img">
                            <img
                                src={colab1}
                                alt="Logo Furbolleras" 
                                className="logo-equipo"
                            />
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default Antiliga;