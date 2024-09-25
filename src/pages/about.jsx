import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import BannerComp from '../Components/BannerComp/BannerComp';
import CardComp from '../Components/CardComp/CardComp';
import ImgQuienes from '../assets/images/quienes-1.jpg';
import ImgMission from '../assets/images/ImgMision.jpg';
import ImgVision from '../assets/images/ImgVision.jpg';
import valor1 from '../assets/images/valor1.png';
import valor2 from '../assets/images/valor2.png';
import valor3 from '../assets/images/valor3.png';

const About = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const cards = [
    {
      image: valor1,
      title: 'Card 1',
      text: 'Este es el primer valor.',
    },
    {
      image: valor2,
      title: 'Card 2',
      text: 'Este es el segundo valor.',
    },
    {
      image: valor3,
      title: 'Card 3',
      text: 'Este es el tercer valor.',
    },
  ];

  return (
    <div>
      <Helmet>
        <title>¿Quiénes Somos? - Fundación Axio</title>
        <meta name="description" content="Conoce quiénes somos en la Fundación Axio, nuestra misión, visión y valores que guían nuestras acciones." />
        <meta name="keywords" content="Fundación Axio, misión, visión, valores, ética, integridad" />
        <meta name="author" content="Fundación Axio" />
        <link rel="canonical" href="https://tu-sitio-web.com/about" />
      </Helmet>
      <BannerComp title={"¿Quíenes Somos?"} image={ImgQuienes} />
      <section className='mission'>        
        <div className="txt-container-a">
          <h2>Misión</h2>
          <p>Nuestra misión es impulsar una agenda de ética y valores en el gobierno, la empresa privada 
           y la educación que coadyuve a prevenir el fenómeno de la corrupción, la injusticia, la delincuencia, 
           la violencia y todos aquellos males que lastiman a la sociedad.</p>
        </div>
        <img src={ImgMission} alt="Imagen de Misión" />
      </section>
      <section className='vision'>
        <img src={ImgVision} alt="Imagen de Visión" />
        <div className="txt-container-b">
          <h2>Visión</h2>
          <p>Para 2030 lograremos implementar nuestro ecosistema Axio, nuestra metodología de gestión basada en 
           la integridad y nuestros diagnósticos de cultura de integridad en más de cinco países de Latinoamérica.</p>
        </div>
      </section>

      <section className="values">
        <h2>Nuestros Valores</h2>
        <div className="cards-container">
          {cards.map((card, index) => (
            <div key={index} className="card">
              <img src={card.image} alt={card.title} />
              <h2>{card.title}</h2>
              <p>{card.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default About;
