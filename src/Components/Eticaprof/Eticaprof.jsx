import React from 'react'
import './Eticaprof.css'
import GifWork from '../../assets/images/work-progress.gif'
import imgn1 from '../../assets/images/eticaprof.gif';
import imgn2 from '../../assets/images/eticaprof2.gif';
import banner1 from '../../assets/images/minbanform.png';
const Eticaprof = () => {
  return (
    <div>
      <section className="certif-section-a">
      <p>
      <span>¿Qué significa vivir mejor?</span>   Los principales desafíos 
      sociales que hoy enfrentamos guardan relación con la 
      violencia, la inseguridad, la corrupción, la desigualdad 
      económica y la injusticia.
      </p>
      <img src={imgn1} alt="icon"className='imgn1'/>
      </section>

      <section className="section-gestion-b"> 
      <img src={imgn2} alt="icon"/>
      <p>
      La mejor evaluación de nuestros modelos
       educativos es la realidad. Si los desafíos 
       sociales no se resuelven, y al contrario se 
       agravan, es necesario entonces repensar los modelos 
       educativos contemporáneos y priorizar una formación 
       integral que atienda las causas y logremos altos niveles
        de bienestar para toda la sociedad. 
       
      </p>
      </section>
      <div className="banner-container">
    <img src={banner1} alt="icon" className="minbanner" />
    <div className="banner-text">
        <p className="titulo">En Fundación Axio hemos<br/>desarrollado</p>
        <p className="txt">Un programa formativo integral y<br/>una certificación en “Ética profesional”.</p>

<div className="cardets-container">
    <div className="cardet">
        <div className="cardet-icon">🎯</div>
        <br/>
        <h3 className="cardet-title">OBJETIVO</h3>
        <p className="cardet-text">Nuestro objetivo es formar integralmente a futuros y actuales profesionales para que el desempeño de sus responsabilidades lo hagan con estricto apego a los principios éticos universales.</p>
    </div>
    <div className="cardet">
        <div className="cardet-icon">⚙️</div>
        <br/>
        <h3 className="cardet-title">PROCESO FORMATIVO</h3>
        <p className="cardet-text">Nuestro proceso formativo parte de los principios teóricos de la ética para traducirlos a acciones concretas en beneficio personal y organizacional.</p>
    </div>
    <div className="cardet">
        <div className="cardet-icon">📜</div>
        <br/>
        <h3 className="cardet-title">CERTIFICACIÓN</h3>
        <p className="cardet-text">Nuestra certificación es una herramienta de superación personal, de plenitud y de compromiso social en un mercado laboral competitivo.</p>
    </div>
</div>
</div>
</div>
<br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
    </div>
  );
};


export default Eticaprof
