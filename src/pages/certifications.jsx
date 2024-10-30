import React, { useState } from 'react'
import BannerComp from '../Components/BannerComp/BannerComp'
import EducacionVal from '../Components/EducacionVal/EducacionVal'
import GobiernoVal from '../Components/GobiernoVal/GobiernoVal'
import GestionVal from '../Components/GestionVal/GestionVal'
import CertifVal from '../Components/Eticaprof/Eticaprof'
import ImgCertif1 from '../assets/images/certif-1.png'
import Footer from '../Components/Footer/Footer';

const certifications = () => {
  const [activeSection, setActiveSection] = useState('educacionConValores')

  const handleButtonClick = (section) => {
    setActiveSection(section)
  }

  return (
    <div>
      <BannerComp title={"Certificaciones"} image={ImgCertif1} />
      <div className="btn-container">
        <button className={`btn-certif ${activeSection === 'educacionConValores' ? 'active' : ''}`}
          onClick={() => handleButtonClick('educacionConValores')}>
          Educación con Valores
        </button>
        <button className={`btn-certif ${activeSection === 'gobiernoConValores' ? 'active' : ''}`}
        onClick={() => handleButtonClick('gobiernoConValores')}>
        Gobierno con Valores
        </button>
        <button className={`btn-certif ${activeSection === 'gestionPorValores' ? 'active' : ''}`}
        onClick={() => handleButtonClick('gestionPorValores')}>
        Gestión por Valores
        </button>
        <button className={`btn-certif ${activeSection === 'certificacionIndividual' ? 'active' : ''}`}
        onClick={() => handleButtonClick('certificacionIndividual')}>
        Ética profesional
        </button>
      </div>
      <div className="section-container">
        {activeSection === 'educacionConValores' && <EducacionVal />}
        {activeSection === 'gobiernoConValores' && <GobiernoVal />}
        {activeSection === 'gestionPorValores' && <GestionVal />}
        {activeSection === 'certificacionIndividual' && <CertifVal />}
      </div>
      <Footer/>
    </div>
  )
}

export default certifications
