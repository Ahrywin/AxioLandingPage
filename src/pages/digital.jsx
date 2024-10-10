import React from 'react';
import { Helmet } from 'react-helmet';
import BannerDigital from '../Components/BannerDigital/BannerDigital';
import { LottieAnim } from '../Components/LottieComp/LottieAnim';
import animacioneco1 from '../Components/LottieComp/animations/animationeco1.json';
import animacioneco2 from '../Components/LottieComp/animations/animationeco2.json';
import ImgDigital1 from '../assets/images/eco.jpg';
import ImgCirPhone from '../assets/images/CirPhone.png';
import ImgLap from '../assets/images/laptop.png';

const Digital = () => {
  return (
    <div>
      <Helmet>
        <title>Ecosistema Digital - Fundación Axio</title>
        <meta name="description" content="Descubre el Ecosistema Digital de Axio, una plataforma que ofrece recursos formativos en ética, valores y habilidades socioemocionales." />
        <meta name="keywords" content="Ecosistema Digital, Fundación Axio, ética, valores, habilidades socioemocionales, formación" />
        <meta name="author" content="Fundación Axio" />
        <link rel="canonical" href="https://tu-sitio-web.com/digital" />
      </Helmet>
      <BannerDigital title={"Ecosistema Digital"} image={ImgDigital1} />
      <section className="digital-section-a">
        <p>El <span className="distinction-blue">Ecosistema digital Axio</span> es un conjunto de recursos y estrategias que permiten la formación en:</p>
       <div className="digital-section-a">
        
            <ul className="service-card-list">
              <li className="card-service-a">
                Ética
                <br/>
                <img src="../src/assets/images/etica.png" alt="Icono de Ética" className="imgvalores" />
              </li>
              <li className="card-service-b">
                Valores
                <br/>
                <img src="../src/assets/images/valores.png" alt="Icono de Valores" className="imgvalores" />
              </li>
              <li className="card-service-c">
                Habilidades Socioemocionales
                <img src="../src/assets/images/inteligencia_emocional.png" alt="Icono de Habilidades" className="imgvalores" />
              </li>
            </ul>
         
            </div>
        <div className="digital-container-a">
          <div className="lottie-digital-a">
            <LottieAnim animacion={animacioneco1} />
          </div>
          <p>Consta de una <span className="distinction-blue">aplicación para dispositivos móviles</span> con 
            múltiples recursos formativos en valores para alumnos, padres de familia, docentes, 
             servidores públicos y trabajadores
             de la empresa privada.</p>
        </div>
        <div className="digital-container-b">
          <p>Así como de una <span className="distinction-blue">plataforma</span> que permite la 
          implementación de un modelo de gestión basado en valores y así obtener la 
           certificación en la norma correspondiente.</p>
          <div className="lottie-digital-b">
            <LottieAnim animacion={animacioneco2} />
          </div>
        </div>
        <div className="digital-container-c">
          <h2>Aplicación Axio</h2>
          <p>En nuestra App encontrarás:</p>
          <div className="img-list-contain-a">
            <img src={ImgCirPhone} alt="Imagen de aplicación móvil" className="img-cir-phone" />
            <ul>
              <li>Breves y significativas lecciones que favorecen la reflexión y el análisis en casos prácticos.</li>
              <li>Mensajes cotidianos que favorecen la reflexión y guían la acción para hacer vida los valores.</li>
              <li>Contenido de interés que se renueva constantemente a través de blog y noticias.</li>
              <li>Un diccionario pedagógico de valores que nos permite conocer más acerca de un valor y de la 
                forma de llevarlo a la práctica cotidiana.</li>
            </ul>
          </div>
        </div>
        <div className="digital-container-d">
          <h2>Plataforma de gestión en valores</h2>
          <p>En nuestra plataforma encontrarás:</p>
          <div className="img-list-contain-b">
            <ul>
              <li>Un instrumento que te permitirá diagnosticar el desarrollo ético de tu institución.</li>
              <li>Acompañamiento para el desarrollo de una misión, 
                 visión, declaración de valores y códigos de ética.</li>
              <li>Instrumentos para orientar las políticas de recursos humanos hacia el comportamiento ético de sus miembros.</li>
              <li>Acompañamiento para la implementación de un modelo de gestión que hace vida los valores en la cotidianidad.</li>
            </ul>
            <img src={ImgLap} alt="Imagen de laptop" className="img-lap" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Digital;
