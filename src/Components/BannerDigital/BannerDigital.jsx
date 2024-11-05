import React from 'react'
import '../BannerDigital/BannerDigital.css'
import googlePlayButton from '../../assets/images/ImgPlay.png'
import appStoreButton from '../../assets/images/ImgStore.png'
import ImgPhone2 from '../../assets/images/phone2.png'
import ImgPhone1 from '../../assets/images/phone1.png'


const BannerDigital = ({title, image}) => {
    const googlePlayLink = 'https://play.google.com/store/apps/details?id=com.iwebsapp.axioparents&hl=es_MX'
    const appStoreLink = 'https://www.apple.com/mx/search/axio?src=globalnav'

  return (
    <div className="banner-digital" style={{ backgroundImage: `url(${image})` }}>
      <div className="banner-digital-container-a">
        <h1 className="banner-digital-title">{title}</h1>
        <p>Descarga nuestra app ahora y conoce la plataforma de Axio.</p>
        <div className="button-container">
          <a href={googlePlayLink} target="_blank" rel="noopener noreferrer">
              <img src={googlePlayButton} alt="Disponible en Google Play" className="btn-store1"/>
          </a>
          <a href={appStoreLink} target="_blank" rel="noopener noreferrer">
            <img src={appStoreButton} alt="Disponible en App Store" className="btn-store2"/>
          </a>
        </div>
      </div>
      <div className="img-phone-container">
        <img src={ImgPhone2} alt="Img Phone 2" className="img-phone-2" />
        <img src={ImgPhone1} alt="Img Phone 1" className="img-phone-1" />
      </div>
    </div>
  )
}

export default BannerDigital
