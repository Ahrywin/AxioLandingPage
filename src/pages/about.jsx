// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import BannerComp from '../Components/BannerComp/BannerComp';
import CardComp from '../Components/CardComp/CardComp';
import ImgQuienes from '../assets/images/quienes-1.jpg';
import ImgMission from '../assets/images/ImgMision.jpg';
import ImgVision from '../assets/images/ImgVision.jpg';
import valor1 from '../assets/images/valores/1Veracidad.jpg';
import valor2 from '../assets/images/valores/2Prudencia.jpg';
import valor3 from '../assets/images/valores/3Justicia.jpg';
import valor4 from '../assets/images/valores/4Legalidad.jpg';
import valor5 from '../assets/images/valores/5Estudiosidad.jpg';
import valor6 from '../assets/images/valores/6Respeto.jpg';
import valor7 from '../assets/images/valores/7Fidelidad.jpg';
import valor8 from '../assets/images/valores/8Perseverancia.png';
import valor9 from '../assets/images/valores/9Gratitud.jpg';
import valor10 from '../assets/images/valores/10Honradez.jpg';

const About = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const totalCards = [
    { icono: valor1, titulo: 'Veracidad', descripcion: 'Hablamos siempre con la verdad con todas las personas con las que tenemos alguna relación. Preferimos una verdad incómoda que a la mentira.' },
    { icono: valor2, titulo: 'Prudencia', descripcion: 'Somos cuidadosos con nuestras decisiones, evitamos la precipitación que conlleva al error, observamos el entorno para ver como impactan nuestras decisiones y somos precavidos.' },
    { icono: valor3, titulo: 'Justicia', descripcion: 'Reconocemos que las buenas relaciones se construyen trabajando para que cada quien reciba lo que merece.' },
    { icono: valor4, titulo: 'Legalidad', descripcion: 'Somos respetuosos de las leyes y normas que regulan nuestro actuar.' },
    { icono: valor5, titulo: 'Estudiosidad', descripcion: 'Reconocemos que la eficacia de nuestra labor depende de la veracidad de nuestros pensamientos, por ello, buscamos formarnos permanentemente para ofrecer los mejores servicios.' },
    { icono: valor6, titulo: 'Respeto', descripcion: 'Reconocemos la valiosa esencia humana que compartimos hombres y mujeres y evitamos cualquier acto de discriminación o atentado a su dignidad.' },
    { icono: valor7, titulo: 'Fidelidad', descripcion: 'Cumplimos a cabalidad los compromisos contraídos sin excusas ni demoras. ¡Nuestra palabra vale mucho!' },
    { icono: valor8, titulo: 'Perseverancia', descripcion: 'Reconocemos que los grandes objetivos implican grandes obstáculos y trabajamos duro para superarlos.' },
    { icono: valor9, titulo: 'Gratitud', descripcion: 'Agradecemos sinceramente todo lo bueno y lo malo que de diferente manera nos reta a superarnos.' },
    { icono: valor10, titulo: 'Honradez', descripcion: 'Somos profundamente respetuosos de la propiedad privada y de la confianza que otras personas nos brindan.' },
  ];

  const updateVisibleCards = (newStartIndex) => {
    setIsAnimating(true);
    setTimeout(() => {
      setVisibleCards([
        ...totalCards.slice(newStartIndex, newStartIndex + 4),
        ...totalCards.slice(0, Math.max(0, (newStartIndex + 4) - totalCards.length)),
      ]);
      setStartIndex(newStartIndex);
      setIsAnimating(false);
    }, 300); // Tiempo de la animación
  };

  useEffect(() => {
    updateVisibleCards(startIndex);
    const interval = setInterval(() => {
      updateVisibleCards((startIndex + 1) % totalCards.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [startIndex]);

  const handlePrevious = () => {
    updateVisibleCards((startIndex - 1 + totalCards.length) % totalCards.length);
  };

  const handleNext = () => {
    updateVisibleCards((startIndex + 1) % totalCards.length);
  };

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
        <div className="navigation-buttons">
          <button onClick={handlePrevious} >←</button>
          <button onClick={handleNext} >→</button>
        </div>
        <div className={`cards-container ${isAnimating ? 'fade' : ''}`}>
          {visibleCards.map((card, index) => (
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
