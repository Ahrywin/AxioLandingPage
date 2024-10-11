import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import "./formularioContact.css"; // Importamos los estilos del formulario
import imgGps from '../../assets/images/gps.png';
import imgMail from '../../assets/images/mail.png';
import imgPhone from '../../assets/images/phone.png';
import facebookIcon from '../../assets/images/facebookIcon.png';
import xIcon from '../../assets/images/xIcon.png';
import ytIcon from '../../assets/images/yticon.png';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [snackbarVisible, setSnackbarVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_email: email,
      message: message,
    };

    emailjs.send('service_vtg818f', 'template_nlaarop', templateParams, 'Q50hqWUqP14JWpVbC')
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        // Limpiar el formulario
        setEmail('');
        setMessage('');
        
        // Mostrar el snackbar
        setSnackbarVisible(true);
        setTimeout(() => {
          setSnackbarVisible(false);
        }, 3000); // Ocultar después de 3 segundos
      }, (error) => {
        console.error('Failed to send email:', error);
      });
  };

  return (
    <div>
      {snackbarVisible && (
        <div className="snackbar">
          ¡Te has puesto en contacto exitosamente!
        </div>
      )}
      <div className="contact-section">
        {/* Div izquierdo - Formulario */}
        <div className="left-section">
          <h2 className="left-title">Envíanos un mensaje</h2>
          <p className="left-text">
            Si tienes dudas o sugerencias acerca de los servicios, las
            certificaciones, el ecosistema digital o acerca de nosotros
          </p>
          <form onSubmit={handleSubmit} className="contact-form">
            <label htmlFor="email">Correo</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label htmlFor="message">Mensaje</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              style={{ height: "60px" }}
            />

            <button type="submit" className="submit-button">
              Enviar
            </button>
          </form>
        </div>

        {/* Div derecho - Información de Contacto */}
        <div className="right-section">
          <h1 className="right-title">Contáctanos</h1>
          <div className="title-underline"></div>
          <div className="contact-items">
            <div className="contact-item">
              <div className="contact-item-header">
                <img src={imgGps} alt="icon" className="icon" />
                <h3 className="contact-item-title">Dirección</h3>
              </div>
              <a   className="contact-item-text" href="https://www.google.com.mx/maps/place/Torres+de+La+Fuente/@20.0652137,-98.7903439,17z/data=!4m7!3m6!1s0x85d1a0fe10c376cd:0x850389c4bcd28ec6!4b1!8m2!3d20.0652137!4d-98.787769!16s%2Fg%2F1tg35khj?entry=ttu&g_ep=EgoyMDI0MTAwMi4xIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">Privada, Torres de La Fuente, Plaza las Torres, 42082 Pachuca de Soto, Hidalgo, México.</a>

            </div>

            <div className="contact-item">
              <div className="contact-item-header">
                <img src={imgPhone} alt="icon" className="icon" />
                <h3 className="contact-item-title">Teléfono</h3>
              </div>
              {/*modificación 1 que nos lleva directo a la app de telefono*/}
              <a className="contact-item-text" href="tel:+52 7711486170">+52 771 148 6170</a>
            </div>
            
            <div className="contact-item">
              <div className="contact-item-header">
                <img src={imgMail} alt="icon" className="icon" />
                <h3 className="contact-item-title">Correo electrónico</h3>
              </div>
              {/*modificación 2 con mailto que nos lleva directo a la app de correo */}
              <a className="contact-item-text" href="mailto:fundacionaxiomexico@gmail.com">fundacionaxiomexico@gmail.com</a>
            </div>
          </div>
        </div>
      </div>

      {/* Sección Encuéntranos */}
      <div className="find-us-section">
        <h2 className="find-us-title">Encuéntranos</h2>
        <div className="social-icons">
        <a href="https://www.facebook.com/axiomexico" target="_blank" rel="noopener noreferrer">
          <img src={facebookIcon} alt="Facebook" className="social-icon" />
          </a>
          <a href="https://x.com/AxioMexico" target="_blank" rel="noopener noreferrer">
          <img src={xIcon} alt="X" className="social-icon" />
          </a>
          <a href="https://www.youtube.com/@axioeducacionconvalores4051" target="_blank" rel="noopener noreferrer">
          <img src={ytIcon} alt="Youtube" className="social-icon" />
          </a>
        </div>
      </div>

      <div className="contact-section">
        <h1 className="right-title">Soporte Técnico</h1>
        <div className="title-underline"></div>
        <div className="contact-items">
          <div className="contact-item">
            <div className="contact-item-header">
              <img src={imgMail} alt="icon" className="icon" />
              <h3 className="contact-item-title">Correo electrónico</h3>
            </div>
            {/*modificación 3 con mailto que nos lleva directo a la app de correo */}
            <a className="contact-item-text" href="mailto:axio.valores@gmail.com">axio.valores@gmail.com</a>
          </div>

          <div className="contact-item">
            <div className="contact-item-header">
              <img src={imgPhone} alt="icon" className="icon" />
              <h3 className="contact-item-title">Teléfono</h3>
            </div>
            {/*modificación 4 con mailto que nos lleva directo a la app de telefono*/}
            <a className="contact-item-text" href="tel:+52 7717121668">+52 771 148 6170</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
