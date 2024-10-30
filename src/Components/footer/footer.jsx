import React from 'react';
import './Footer.css';
import facebookIcon from '../../assets/images/fb.png';
import xIcon from '../../assets/images/x.png';
import ytIcon from '../../assets/images/yt.png';
import logo from '../../assets/images/axio2.png'

const Footer = () => {
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
          <h3>CONTACTANOS</h3>
          <br/>
          <a  className="text22" href="mailto:contacto@fundacionaxio.org">contacto@fundacionaxio.org</a>
          <br/>
          <a
                className="text22"
                href="https://www.google.com.mx/maps/place/Fundaci%C3%B3n+Axio+A.C./@20.0643619,-98.7873803,19z/data=!3m1!4b1!4m6!3m5!1s0x85d1a1cfee309439:0x8db7350c62bc8224!8m2!3d20.0643619!4d-98.7867366!16s%2Fg%2F11ff0r2yyp?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                <br/>
                Privada, Torres de La Fuente, Plaza las Torres, 42082 Pachuca de Soto, Hidalgo, México.
              </a>
              <br/>
              <br/>
              <a className="text22" href="tel:+52 77171216680">+52 771 7121 6680</a>
        </div>
        <div className="footer-section">
          <h3>PRODUCTOS</h3>
          <br/>
          <a className="text22">Axio App</a>
          <br/>
          <br/>
          <a className="text22" >Plataforma Fundación Axio</a>
        </div>
        <div className="footer-section">
          <h3>SERVICIOS</h3>
          <br/>
          <a className="text22">Diagnóstico SA-92</a>
          <br/> <br/>
          <a className="text22">Dictamen Técnico</a>
          <br/> <br/>
          <a className="text22">Formación</a>
          <br/> <br/>
          <a className="text22">Temas</a>   
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Fundación Axio - Todos los derechos reservados. Hidalgo | México</p>
      </div>
    </footer>
  );
};

export default Footer;
