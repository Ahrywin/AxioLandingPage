import React, { useRef, useEffect } from 'react';
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
  const cardsRef = useRef(null);

  const cards = [
    {
      icono: valor1,
      titulo: 'Veracidad',
      descripcion: 'Hablamos siempre con la verdad con todas las personas con las que tenemos alguna relación. Preferimos una verdad incómoda que a la mentira.',
    },
    {
      icono: valor2,
      titulo: 'Prudencia',
      descripcion: 'Somos cuidadosos con nuestras decisiones, evitamos la precipitación que conlleva al error, observamos el entorno para ver como impactan nuestras decisiones y somos precavidos.',
    },
    {
      icono: valor3,
      titulo: 'Justicia',
      descripcion: 'Reconocemos que las buenas relaciones se construyen trabajando para que cada quien reciba lo que merece.',
    },
    {
      icono: valor1,
      titulo: 'Legalidad',
      descripcion: 'Somos respetuosos de las leyes y normas que regulan nuestro actuar.',
    },
    {
      icono: valor2,
      titulo: 'Estudiosidad',
      descripcion: 'Reconocemos que la eficacia de nuestra labor depende de la veracidad de nuestros pensamientos, por ello, buscamos formarnos permanentemente para ofrecer los mejores servicios.',
    },
    {
      icono: valor3,
      titulo: 'Respeto',
      descripcion: 'Reconocemos la valiosa esencia humana que compartimos hombres y mujeres y evitamos cualquier acto de discriminación o atentado a su dignidad.',
    },
    {
      icono: valor1,
      titulo: 'Fidelidad',
      descripcion: 'Cumplimos a cabalidad los compromisos contraídos sin excusas ni demoras. ¡Nuestra palabra vale mucho!',
    },
    {
      icono: valor2,
      titulo: 'Perseverancia',
      descripcion: 'Reconocemos que los grandes objetivos implican grandes obstáculos y trabajamos duro para superarlos.',
    },
    {
      icono: valor3,
      titulo: 'Gratitud',
      descripcion: 'Agradecemos sinceramente todo lo bueno y lo malo que de diferente manera nos reta a superarnos.',
    },
    {
      icono: valor1,
      titulo: 'Honradez',
      descripcion: 'Somos profundamente respetuosos de la propiedad privada y de la confianza que otras personas nos brindan.',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (cardsRef.current) {
        cardsRef.current.scrollBy({ left: 300, behavior: 'smooth' });
      }
    }, 3000); // Cambiar cada 3 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Helmet>
        <title>¿Quiénes Somos? - Fundación Axio</title>
        <meta name="description" content="Conoce quiénes somos en la Fundación Axio, nuestra misión, visión y valores que guían nuestras acciones." />
        <meta name="keywords" content="Fundación Axio, misión, visión, valores, ética, integridad" />
        <meta name="author" content="Fundación Axio" />
        <link rel="canonical" href="https://tu-sitio-web.com/about" />
      </Helmet>
      <BannerComp title={"¿Quiénes Somos?"} image={ImgQuienes} />
      <section className='mission'>
        <div className="txt-container-a">
          <h2>Misión</h2>
          <p>Nuestra misión es impulsar una agenda de ética y valores en el gobierno, la empresa privada y la educación que coadyuve a prevenir el fenómeno de la corrupción, la injusticia, la delincuencia, la violencia y todos aquellos males que lastiman a la sociedad.</p>
        </div>
        <img src={ImgMission} alt="Imagen de Misión" />
      </section>
      <section className='vision'>
        <img src={ImgVision} alt="Imagen de Visión" />
        <div className="txt-container-b">
          <h2>Visión</h2>
          <p>Para 2030 lograremos implementar nuestro ecosistema Axio, nuestra metodología de gestión basada en la integridad y nuestros diagnósticos de cultura de integridad en más de cinco países de Latinoamérica.</p>
        </div>
      </section>
<br/><br/>
      <section className="values">
        <h2>Nuestros Valores</h2>
        <div className="cards-container" ref={cardsRef}>
          {cards.map((card, index) => (
            <CardComp 
              key={index} 
              icono={card.icono} 
              titulo={card.titulo} 
              descripcion={card.descripcion} 
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default About;
