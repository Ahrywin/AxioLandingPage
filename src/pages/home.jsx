import React from 'react';
import { Helmet } from 'react-helmet';

import BannerHome from '../Components/BannerHome/BannerHome';
import { LottieAnim } from '../Components/LottieComp/LottieAnim';
import animacion2 from '../Components/LottieComp/animations/animation2.json';
import animacion3 from '../Components/LottieComp/animations/animation3.json';
import VideoPlayer from '../Components/VideoComp/VideoPlayer'
import Footer from '../Components/Footer/Footer.jsx';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Fundación Axio - Haciendo la Diferencia</title>
        <meta name="description" content="Fundación Axio es una organización sin fines de lucro que busca crear una mejor sociedad libre de violencia y desigualdad." />
        <meta name="keywords" content="Fundación Axio, organización sin fines de lucro, académicos, investigadores, líderes de opinión, valores sociales" />
        <meta name="author" content="Fundación Axio" />
        <link rel="canonical" href="https://tu-sitio-web.com/home" />
      </Helmet>
      <BannerHome />
      <section className='home-container-a'>
        <div className='home-text'>
          <h2 className='home-title'>Fundación Axio</h2>
          <div className='text-home-axio-principal'>
          <p>Es una organización sin fines de lucro fundada en 2013 que agrupa a
            académicos, investigadores,
            líderes de opinión y personas comprometidas 
            en coadyuvar en la creación de una mejor sociedad, libre de violencia,
            corrupción, desigualdad y discriminación.</p>
            </div>
        </div>
        <div className="lottie-animation-a">
          <LottieAnim animacion={animacion2}/>
        </div>
      </section>
      <section className='home-container-b'>
        <div className="lottie-animation-b">
          <LottieAnim animacion={animacion3}/>
        </div>
        <div className='home-text'>
        <div className='text-home-axio-principal'>
          <p>Para cumplir con nuestro objetivo hemos desarrollado diversos instrumentos, 
            recursos formativos, metodologías de gestión y certificaciones que permiten hacer 
            vida los valores en la cotidianidad.</p>
            </div>
        </div>
      </section>
      <section className="view-home-container">
        <h3>¡Conoce lo que Axio puede hacer por ti y por tu organización!</h3>
       
      </section>
      <div className='videohome vhcontenedor-video '>
       <VideoPlayer videoSrc="../src/assets/videos/video6.mp4"/>
       </div>
      <Footer/>
    </div>
  );
}

export default Home;
