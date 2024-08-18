import React from 'react'
import './GestionVal.css'
import ImgGest from '../../assets/images/ImgGestion.png'
import { LottieAnim } from '../LottieComp/LottieAnim'
import animationcertif4 from '../LottieComp/animations/animationcertif4.json'

const GestionVal = () => {
  return (
    <div>
      <section className="section-gestion-a">
        <p>Los problemas de corrupción e inseguridad afectan a 
            toda la sociedad y la empresa no es la excepción. 
            El complejo organizacional de la industria privada cumple 
            con un rol fundamental en la transformación social. Su objetivo 
            no puede reducirse a la producción de riqueza; aporta cultura, desarrollo social y humano.</p>
      </section>
      <section className="section-gestion-b">
        <img src={ImgGest} alt="" />
        <p>Una empresa comprometida con una postura ética favorece un clima 
            de satisfacción en los empleados, incrementa la producción y eleva 
            los estándares de calidad y eficacia. Los valores en las organizaciones 
            aportan mucho más que la sola suscripción moral. Definen un crecimiento duradero y sostenido.</p>
      </section>
      <section className="section-gestion-c">
        <div className="gestion-container-a">
          <p>El compromiso ético de la empresa es ahora un gran diferenciador apreciado por un 
              mercado sensible a la necesidad de transformar la sociedad y solidario con las 
              iniciativas encaminadas a fortalecer el tejido social desde la cultura empresarial.</p>
          <p className="gestion-distinction">¡Certifica a tu empresa!</p>
        </div>
        <div className="lottie-gestion-a">
          <LottieAnim animacion={animationcertif4} />
        </div>
      </section>
    </div>
  )
}

export default GestionVal
