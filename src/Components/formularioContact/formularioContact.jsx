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
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarType, setSnackbarType] = useState("success"); // Nueva variable para controlar el tipo de snackbar
  const [recaptchaValue, setRecaptchaValue] = useState(null); // Estado para el reCAPTCHA

  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value);
  };

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
                href="https://www.google.com.mx/maps/place/Fundaci%C3%B3n+Axio+A.C./@20.0643619,-98.7873803,19z/data=!3m1!4b1!4m6!3m5!1s0x85d1a1cfee309439:0x8db7350c62bc8224!8m2!3d20.0643619!4d-98.7867366!16s%2Fg%2F11ff0r2yyp?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privada, Torres de La Fuente, Plaza las Torres, 42082 Pachuca de Soto, Hidalgo, México.
              </a>
            </div>

            <div className="contact-item">
              <div className="contact-item-header">
                <img src={imgPhone} alt="icon" className="icon" />
                <h3 className="contact-item-title">Teléfono</h3>
              </div>
              <a className="contact-item-text" href="tel:+52 77171216680">+52 771 7121 6680</a>
            </div>

            <div className="contact-item">
              <div className="contact-item-header">
                <img src={imgMail} alt="icon" className="icon" />
                <h3 className="contact-item-title">Correo electrónico</h3>
              </div>
              <a className="contact-item-text" href="mailto:contacto@fundacionaxio.org">contacto@fundacionaxio.org</a>
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

      {/* Sección Soporte Técnico */}
      <div className="contact-section">
        <h1 className="right-title">Soporte Técnico</h1>
        <div className="title-underline"></div>
        <div className="contact-items">
          <div className="contact-item">
            <div className="contact-item-header">
              <img src={imgMail} alt="icon" className="icon" />
              <h3 className="contact-item-title">Correo electrónico</h3>
            </div>
            <a className="contact-item-text" href="mailto:admin@fundacionaxio.org">admin@fundacionaxio.org</a>
          </div>

          <div className="contact-item">
            <div className="contact-item-header">
              <img src={imgPhone} alt="icon" className="icon" />
              <h3 className="contact-item-title">Teléfono</h3>
            </div>
            <a className="contact-item-text" href="tel:+52 77171216680">+52 771 7121 6680</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
