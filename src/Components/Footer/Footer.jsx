import React, { useState, useEffect } from 'react';
import './Footer.css';
import facebookIcon from '../Footer/fb.png'
import xIcon from '../Footer/x.png';
import ytIcon from '../Footer/yt.png';
import logo from '../Footer/axio2.png'


const Footer = () => {
  
  const [Data, setContactData] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('contactData'));
    setContactData(data);
  }, []);

  if (!Data) return null;

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={logo} alt="Logo de la Fundación" />
          <div className="social1-icons">
          <a href="https://www.facebook.com/axiomexico" target="_blank" rel="noopener noreferrer">
              <img src={facebookIcon} alt="Facebook" />
            </a>
            <a href="https://x.com/AxioMexico" target="_blank" rel="noopener noreferrer">
              <img src={xIcon} alt="Twitter" />
            </a>
            <a href="https://www.youtube.com/@axioeducacionconvalores4051" target="_blank" rel="noopener noreferrer">
              <img src={ytIcon} alt="YouTube" />
            </a>
          </div>
        </div>
        <div className="footer-section">
          <h3>CONTÁCTANOS</h3>
          <br/>
          <a  className="text22" href={`mailto:${Data.email1}`}>{Data.email1}</a>
          <br/>
          <a
                className="text22"
                href={`${Data.addressdireccion}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <br/>
                {Data.address}
              </a>
              <br/>
              <br/>
              <a className="text22" href={`tel:${Data.phone1}`}>{Data.phone1}</a>
        </div>
        <div className="footer-section">
          <h3>PRODUCTOS</h3>
          <br/>
          <a className="text22" >Plataforma Fundación Axio</a>
        </div>
        <div className="footer-section">
          <h3>SERVICIOS</h3>
          <br/>
          <a className="text22" href='/quiz'>Diagnóstico SA-92</a>
          <br/> <br/>
          <a className="text22" href='/services#dictamenTecnico'>Dictamen Técnico</a>
          <br/> <br/>
          <a className="text22" href='/services#Formacion'>Formación</a>
          <br/> <br/>
          <a className="text22" href='/services#Temas'>Temas</a>     
        </div>
        <div className="footer-section">
        <h3>AVISOS DE PRIVACIDAD</h3>
          <br/>
          <a className="text22" href='/priv' >Aviso de Privacidad</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Fundación Axio - Todos los derechos reservados. Hidalgo | México</p>
      </div>
    </footer>
  );
};

export default Footer;
