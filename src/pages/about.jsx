
import BannerComp from '../Components/BannerComp/BannerComp'
import CardComp from '../Components/CardComp/CardComp'
import ImgQuienes from '../assets/images/quienes-1.jpg'
import ImgMission from '../assets/images/ImgMision.jpg'
import ImgVision from '../assets/images/ImgVision.jpg'
import valor1 from '../assets/images/valor1.png'
import valor2 from '../assets/images/valor2.png'
import valor3 from '../assets/images/valor3.png'
import React, { useState } from 'react';
import Slider from 'react-slick';


const about = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const cards = [
    {
      image: valor1,
      title: 'Card 1',
      text: 'This is the first card',
    },
    {
      image: valor2,
      title: 'Card 2',
      text: 'This is the second card',
    },
    {
      image: valor3,
      title: 'Card 3',
      text: 'This is the third card',
    },
  ];
  const settings = {
    dots: true,
    infinite: false,
    speed: 0,
    slidesToShow: 3,
    slidesToScroll: 1,
    afterChange: (index) => setActiveIndex(index),
  };

  return (
    <div>
      <BannerComp title={"¿Quíenes Somos?"} image={ImgQuienes} />
      <section className='mission'>        
        <div className="txt-container-a">
          <h2>Misión</h2>
          <p>Nuestra misión es impulsar una agenda de ética y valores en el gobierno, la empresa privada 
           y la educación que coadyuve a prevenir el fenómeno de la corrupción, la injustica, la delincuencia, 
           la violencia y todos aquellos males que lastiman a la sociedad.</p>
        </div>
        <img src={ImgMission} alt="" />
      </section>
      <section className='vision'>
        <img src={ImgVision} alt="" />
        <div className="txt-container-b">
          <h2>Visión</h2>
          <p>Para 2030 lograremos implementar nuestro ecosistema Axio, nuestra metodología de gestión basada en 
           la integridad y nuestros diagnósticos de cultura de integridad en más de cinco países de Latinoamérica</p>
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
    <div>
      
    </div>

      </section>
    </div>
  )
}

export default about
