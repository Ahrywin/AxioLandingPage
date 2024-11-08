import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import "./formularioContact.css"; // Importamos los estilos del formulario
import imgGps from '../../assets/images/gps.png';
import imgMail from '../../assets/images/mail.png';
import imgPhone from '../../assets/images/phone.png';
import facebookIcon from '../../assets/images/facebookIcon.png';
import xIcon from '../../assets/images/xIcon.png';
import ytIcon from '../../assets/images/yticon.png';
import contacto from '../../assets/images/contacto.gif';
import emailjs from 'emailjs-com';
import Footer from '../Footer/Footer'

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarType, setSnackbarType] = useState("success"); // Nueva variable para controlar el tipo de snackbar
  const [recaptchaValue, setRecaptchaValue] = useState(null); // Estado para el reCAPTCHA

  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value);
  };

  const contactData = window.contactData;

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación del reCAPTCHA
    if (!recaptchaValue) {
      setSnackbarMessage("Por favor, completa el reCAPTCHA.");
      setSnackbarType("error"); // Mostrar alerta roja
      setSnackbarVisible(true);
      setTimeout(() => setSnackbarVisible(false), 3000); // Ocultar después de 3 segundos
      return;
    }

    const templateParams = {
      email: email,
      message: message,
    };

    // Envío de correo usando EmailJS
    emailjs.send('service_lng4z2r', 'template_hfdwhqa', templateParams, 'bR1wTogcjUSlkftVF')
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        // Limpiar el formulario
        setEmail('');
        setMessage('');
        setRecaptchaValue(null); // Reiniciar reCAPTCHA

        // Mostrar el snackbar de éxito
        setSnackbarMessage("¡Te has puesto en contacto exitosamente!");
        setSnackbarType("success"); // Mostrar alerta verde
        setSnackbarVisible(true);
        setTimeout(() => setSnackbarVisible(false), 3000); // Ocultar después de 3 segundos
      }, (error) => {
        console.error('Failed to send email:', error);
        // Mostrar el snackbar de error
        setSnackbarMessage("Error al enviar el formulario. Inténtalo de nuevo.");
        setSnackbarType("error"); // Mostrar alerta roja
        setSnackbarVisible(true);
        setTimeout(() => setSnackbarVisible(false), 3000); // Ocultar después de 3 segundos
      });
  };

  return (
    <div>
      {snackbarVisible && (
        <div className={`snackbar ${snackbarType === "error" ? "snackbar-error" : ""}`}>
          {snackbarMessage}
        </div>
      )}
      <div className="contact-section">
        {/* Div izquierdo - Formulario */}
        <div className="left-section">
          <h2 className="left-title">Envíanos un mensaje</h2>
          <p className="left-text">
            Si tienes dudas o sugerencias acerca de los servicios, las certificaciones, el ecosistema digital o acerca de nosotros
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

            {/* Componente de reCAPTCHA */}
            <ReCAPTCHA
              sitekey="6LcHX2IqAAAAANzea9edUkwdPZRb1vUGyZ5p5Uhy"
              onChange={handleRecaptchaChange}
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
              <a
                className="contact-item-text"
                href={`${contactData.addressdireccion}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {contactData.address}
              </a>
            </div>

            <div className="contact-item">
              <div className="contact-item-header">
                <img src={imgPhone} alt="icon" className="icon" />
                <h3 className="contact-item-title">Teléfono</h3>
              </div>
              <a className="contact-item-text" href={`tel:${contactData.phone1}`}>{contactData.phone1}</a>
            </div>

            <div className="contact-item">
              <div className="contact-item-header">
                <img src={imgMail} alt="icon" className="icon" />
                <h3 className="contact-item-title">Correo electrónico</h3>
              </div>
              <a className="contact-item-text" href={`mailto:${contactData.email1}`}>{contactData.email1}</a>
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
  <div className="left-section">
    <h1 className="right-title">Soporte Técnico</h1>
    <div className="title-underline"></div>
    <div className="contact-items">
      <div className="contact-item">
        <div className="contact-item-header">
          <img src={imgMail} alt="icon" className="icon" />
          <h3 className="contact-item-title">Correo electrónico</h3>
        </div>
        <a className="contact-item-text" href={`mailto:${contactData.email1}`}>
          {contactData.email2}
        </a>
      </div>
      <div className="contact-item">
        <div className="contact-item-header">
          <img src={imgPhone} alt="icon" className="icon" />
          <h3 className="contact-item-title">Teléfono</h3>
        </div>
        <a className="contact-item-text" href={`tel:${contactData.phone1}`}> {/*Necesario cambiar el href */}
          {contactData.phone1}
        </a>
      </div>
    </div>
  </div>
  <img src={contacto} alt="icon" className="right-section-image" />
</div>

    </div>
  );
};

export default ContactForm;
