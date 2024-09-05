import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import "./formularioContact.css"; // Importamos los estilos del formulario
import imgGps from '../../assets/images/gps.png'
import imgMail from '../../assets/images/mail.png'
import imgPhone from '../../assets/images/phone.png'
import facebookIcon from '../../assets/images/facebookIcon.png'
import xIcon from '../../assets/images/xIcon.png'

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar los datos del formulario
    console.log({ email, message });
  };

  return (
    <div>
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
              <p className="contact-item-text">Privada, Torres de La Fuente, Plaza las Torres, 42082 Pachuca de Soto, Hidalgo, México.</p>
            </div>

              
            <div className="contact-item">
              <div className="contact-item-header">
                <img src={imgPhone} alt="icon" className="icon" />
                <h3 className="contact-item-title">Teléfono</h3>
              </div>
              <p className="contact-item-text">771 148 6170</p>
            </div>
              
            <div className="contact-item">
              <div className="contact-item-header">
                <img src={imgMail} alt="icon" className="icon" />
                <h3 className="contact-item-title">Correo eléctronico</h3>
              </div>
              <p className="contact-item-text">fundacionaxiomexico@gmail.com</p>
            </div>

       
          </div>
        </div>
      </div>

      {/* Sección Encuéntranos */}
      <div className="find-us-section">
        <h2 className="find-us-title">Encuéntranos</h2>
        <div className="social-icons">
          <img
            src={facebookIcon}
            alt="Facebook"
            className="social-icon"
          />
          <img src={xIcon} alt="X" className="social-icon" />
        </div>
      </div>

      <div className="contact-section">
      <h1 className="right-title">Soporte Técnico</h1>
      <div className="title-underline"></div>
      <div className="contact-items">
                
      <div className="contact-item">
              <div className="contact-item-header">
                <img src={imgMail} alt="icon" className="icon" />
                <h3 className="contact-item-title">Correo eléctronico</h3>
              </div>
              <p className="contact-item-text">axio.valores@gmail.com</p>
            </div>
        </div>

                     
          
        <div className="contact-item">
              <div className="contact-item-header">
                <img src={imgPhone} alt="icon" className="icon" />
                <h3 className="contact-item-title">Teléfono</h3>
              </div>
              <p className="contact-item-text">771 148 6170</p>
            </div>

      </div>

    </div>
  );
};

export default ContactForm;
