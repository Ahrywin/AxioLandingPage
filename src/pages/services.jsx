import React from 'react';
import { Helmet } from 'react-helmet';
import BannerComp from '../Components/BannerComp/BannerComp';
import ImgService1 from '../assets/images/service-1.png';
import { LottieAnim } from '../Components/LottieComp/LottieAnim';
import animacionservice1 from '../Components/LottieComp/animations/animationservice1.json';
import animacionservice2 from '../Components/LottieComp/animations/animationservice2.json';
import animacionservice3 from '../Components/LottieComp/animations/animationservice3.json';

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
          <p className="distinction-green">¡Conoce como puedes diagnosticar tu organización!</p>
        </div>
      </section>
      <section className="service-section-b">
        <h2>Dictamen Técnico De Códigos De Ética</h2>
        <p>Con el afán de promover una nueva cultura ética en las organizaciones se han 
            promovido instrumentos de gestión como: </p>
        <ul className="service-card-list">
          <li className="card-service-a">Códigos de ética</li>
          <li className="card-service-b">Códigos de conducta</li>
          <li className="card-service-c">Declaración de valores</li>
        </ul>
        
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
          <li className="color-card-a">Sistemas Axiomaticos</li>
          <li className="color-card-a">La Naturaleza De Los Valores</li>
          <li className="color-card-b">Ética General</li>
          <li className="color-card-b">Ética Especial</li>
          <li className="color-card-c">Liderazgo Basado En Valores</li>
          <li className="color-card-c">Equipos De Trabajo Con Valores</li>
          <li className="color-card-d">Filosofía De La Educación</li>
          <li className="color-card-d">Combate A La Corrupción</li>
          <li className="color-card-e">Prevención De La Violencia En Entornos Escolares</li>
          <li className="color-card-e">Valores Y Virtudes</li>
          <li className="color-card-f">Inteligencia Y Valores</li>
          <li className="color-card-f">Valores En El Hogar</li>
          <li className="color-card-g">Autoestima</li>
          <li className="color-card-g">El Poder De La Palabra</li>
          <li className="color-card-h">Comunicación En El Hogar</li>
          <li className="color-card-h">La Naturaleza Humana</li>
          <li className="color-card-i">Axiología</li>
          <li className="color-card-i">Metafísica</li>
          <li className="color-card-j">Ontología</li>
          <li className="color-card-j">Gnoseología</li>
          <li className="color-card-k">Cultura Organizacional</li>
          <li className="color-card-k">Dirección Y Desarrollo De Equipos De Alto Rendimiento</li>
          <li className="color-card-l">El Papel Docente</li>
          <li className="color-card-l">Desarrollo De La Inteligencia</li>
        </ul>
      </section>
    </div>
  );
}

export default Services;
