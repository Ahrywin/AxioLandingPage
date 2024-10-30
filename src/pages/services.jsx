import React from 'react';
import { Helmet } from 'react-helmet';
import BannerComp from '../Components/BannerComp/BannerComp';
import ImgService1 from '../assets/images/service-1.png';
import { LottieAnim } from '../Components/LottieComp/LottieAnim';
import animacionservice1 from '../Components/LottieComp/animations/animationservice1.json';
import animacionservice2 from '../Components/LottieComp/animations/animationservice2.json';
import animacionservice3 from '../Components/LottieComp/animations/animationservice3.json';
import etica from '../assets/images/etica.png';
import codcoun from '../assets/images/codigo_conducta.png';
import decvar from '../assets/images/declaracion_valores.png';
import chs from '../assets/images/chicos.gif';
import Footer from '../Components/Footer/Footer.jsx';


const Services = () => {
  return (
    <div>
      <Helmet>
        <title>Servicios - Fundación Axio</title>
        <meta name="description" content="Descubre los servicios de la Fundación Axio, incluyendo diagnóstico de cultura de integridad, formación y más." />
        <meta name="keywords" content="Servicios, Fundación Axio, ética, formación, cultura de integridad, desarrollo organizacional" />
        <meta name="author" content="Fundación Axio" />
        <link rel="canonical" href="https://tu-sitio-web.com/services" />
      </Helmet>
      <BannerComp title={"Servicios"} image={ImgService1} />
      <section className="service-section-a">
        <h2>Diagnóstico De Cultura De Integridad</h2>
        <div className="container-services-a">
          <p>El elemento más influyente en el comportamiento de una persona es la 
            cultura de las organizaciones de las que forma parte. Esta cultura se 
            conforma de axiomas (creencias) que son juicios o afirmaciones que son 
            compartidos por una entidad organizacional.</p>
          <p>Para transformar esta cultura el primer paso es develarla, para después 
            tomar acciones quirúrgicas y metódicas que permitan el éxito en su transformación.</p>
        </div>
        <div className="container-services-b">
          <p>Nuestro instrumento SA-92 permite develar la cultura de una organización en 
            temas de ética e integridad.</p>
          <p >¡Conoce como puedes diagnosticar tu organización!</p>
        </div>
      </section>
      <section className="service-section-b">
        <h2>Dictamen Técnico De Códigos De Ética</h2>
        <p>Con el afán de promover una nueva cultura ética en las organizaciones se han 
            promovido instrumentos de gestión como: </p>
            <div className='servicedumb'>
       {/*<ul className="service-card-list">
          <li className="card-service-a">Códigos de ética</li>
          <li className="card-service-b">Códigos de conducta</li>
          <li className="card-service-c">Declaración de valores</li>
        </ul>
        
 */} 
        <ul className="service-card-list">
              <li className="card-service-a">
              Códigos de ética
                <br/>
                <img src={etica} alt="Icono de Ética" className="imgvalores" />
              </li>
              <li className="card-service-b">
              Códigos de conducta
                <br/>
                <img src={codcoun} alt="Icono de Valores" className="imgvalores" />
              </li>
              <li className="card-service-c">
              Declaración de valores
                <img src={decvar} alt="Icono de Habilidades" className="imgvalores" />
              </li>
            </ul>
            </div>
            <br/><br/>  
        <p>Que buscan ser un referente próximo de la conducta de las personas. Para garantizar 
          la eficacia de estos instrumentos de gestión, es necesario que reúnan las condiciones 
          mínimas y necesarias para que sin ambigüedades y sólidos fundamentos se constituyan en 
          un referente del actuar basado en la ética.</p>
        <p>El dictamen técnico de estos instrumentos es fundamental para garantizar que cumplan con su objetivo.</p>
        <p className="distinction-blue">Conoce como puedes dictaminar tu código de ética</p>
      </section>
      <section className="service-section-c">
        <h2>Formación</h2>
        <div className="container-service-b">
          <div className="lottie-service-a">
            <LottieAnim animacion={animacionservice1} />
          </div>
          <p>No es posible lograr la transformación de una entidad organizacional sin el proceso de detección 
            y sustitución de axiomas erróneos por verdaderos y eso se logra a través de procesos formativos.</p>
        </div>
        <div className="container-service-c">
          <p>La formación tiene como objetivo trasladar los principios especulativos en los que se fundamenta la ética y 
          la axiología a acciones concretas que enriquezcan la toma de decisiones en el plano personal y organizacional</p>
          <div className="lottie-service-b">
            <LottieAnim animacion={animacionservice2} />
          </div>
        </div>
      </section>
      <section className="service-section-d">
        <h2>Temas</h2>
        <ul className="card-list-temas">
          <li className="word-1">Sistemas Axiomáticos</li>
          <li className="word-1">La Naturaleza de los Valores</li>
          <li className="word-2">Ética General</li>
          <li className="word-2">Ética Especial</li>
          <li className="word-3">Liderazgo Basado en Valores</li>
          <li className="word-3">Equipos de Trabajo con Valores</li>
          <li className="word-4">Filosofía de la Educación</li>
          <li className="word-4">Combate a la Corrupción</li>
          <li className="word-5">Prevención de la Violencia en Entornos Escolares</li>
          <li className="word-5">Valores y Virtudes</li>
          <li className="word-6">Inteligencia y Valores</li>
          <li className="word-6">Valores en el Hogar</li>
          <li className="word-7">Autoestima</li>
          <li className="word-7">El Poder de la Palabra</li>
          <li className="word-8">Comunicación en el Hogar</li>
          <li className="word-8">La Naturaleza Humana</li>
          <li className="word-9">Axiología</li>
          <li className="word-9">Metafísica</li>
          <li className="word-10">Ontología</li>
          <li className="word-10">Gnoseología</li>
          <li className="word-11">Cultura Organizacional</li>
          <li className="word-11">Dirección y Desarrollo de Equipos de Alto Rendimiento</li>
          <li className="word-12">El Papel Docente</li>
          <li className="word-12">Desarrollo de la Inteligencia</li>
        </ul>
        
      </section>
      <div className='imajv'>
      <img src={chs}  className="imgjovenes" />
      </div>
      <br/> <br/> <br/> <br/>
      <Footer/>
    </div>
  );
}

export default Services;
