import React from 'react'
import './GobiernoVal.css'
import { LottieAnim } from '../LottieComp/LottieAnim'
import animacioncertif3 from '../LottieComp/animations/animationcertif3.json'
import VideoPlayer from '../VideoComp/VideoPlayer'


const GobiernoVal = () => {
  return (
    <div>
      <section className="section-gob-a">
        <div className="section-container-a">
          <p>La principal demanda social hacia sus gobernantes 
            es el fortalecimiento de las instituciones a través 
            de la conducta ética de las personas servidoras públicas.</p>
          <p>Prevenir actos de corrupción e ineficacia en el gobierno son 
            las acciones más valoradas por una sociedad cansada de escándalos de abusos y deshonestidad.</p>
        </div>
        <VideoPlayer videoSrc="../src/assets/videos/gobiernos.mp4" />
      </section>
      <section className="section-gob-b">
        <div className="lottie-gob-a">
          <LottieAnim animacion={animacioncertif3} />
        </div>
        <div className="section-container-b">
          <p>La certificación en la norma <span className="gob-distinction-blue"> “Gobierno con Valores” </span> tiene como objetivo acreditar, 
            reconocer y promover un modelo de gestión pública que tiene como eje la conducta íntegra 
            de los funcionarios gubernamentales.</p>
          <p >¡Certifica a tu institución de gobierno!</p>
          </div>
      </section>
    </div>
  )
}

export default GobiernoVal
