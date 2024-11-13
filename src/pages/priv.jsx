import React, { useState, useEffect } from 'react';
import './quiz.css';
import { Helmet } from 'react-helmet';
import BannerComp from '../Components/BannerComp/BannerComp';
import ImgDigital1 from '../assets/images/priv.png';

const Priv = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const [Data, setContactData] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('contactData'));
    setContactData(data);
  }, []);

  if (!Data) return null;
  return (
<div>
<Helmet>
    <title>Fundación Axio - Haciendo Vida los Valores</title>
    <meta name="description" content="Fundación Axio es una organización sin fines de lucro que busca crear una mejor sociedad libre de violencia y desigualdad." />
    <meta name="keywords" content="Fundación Axio, organización sin fines de lucro, académicos, investigadores, líderes de opinión, valores sociales" />
    <meta name="author" content="Fundación Axio" />
    <link rel="canonical" href="https://tu-sitio-web.com/home" />
     </Helmet>
    <BannerComp title="Avisos de Privacidad" image={ImgDigital1} />
    <div className="accordion">
      <div className="accordion-item">
        <div
          className="accordion-header"
          onClick={() => toggleAccordion(0)}
        >
          1. Información General
        </div>
        {activeIndex === 0 && (
          <div className="accordion-content">
            En Fundación Axio, nos comprometemos a proteger tu privacidad y a gestionar tus datos personales de manera responsable y conforme a la legislación vigente en materia de protección de datos. Este Aviso de Privacidad describe cómo recopilamos, usamos y protegemos la información personal que nos proporcionas al visitar nuestra página web.
          </div>
        )}
      </div>

      <div className="accordion-item">
        <div
          className="accordion-header"
          onClick={() => toggleAccordion(1)}
        >
          2. Datos Personales que Recopilamos
        </div>
        {activeIndex === 1 && (
          <div className="accordion-content">
            Recopilamos los siguientes datos personales a través de formularios, suscripciones a boletines, donaciones y otros medios interactivos:
            Información de navegación (como la dirección IP y cookies).
          </div>
        )}
      </div>

      <div className="accordion-item">
        <div
          className="accordion-header"
          onClick={() => toggleAccordion(2)}
        >
          3. Finalidades del Tratamiento de Datos Personales
        </div>
        {activeIndex === 2 && (
          <div className="accordion-content">
            Los datos personales que recopilamos serán utilizados para las siguientes finalidades:
            <ul>
              <li>Gestionar y procesar donaciones o pagos.</li>
              <li>Enviar comunicaciones informativas, boletines y actualizaciones sobre nuestras actividades y proyectos.</li>
              <li>Personalizar la experiencia de usuario en nuestro sitio web.</li>
              <li>Mejorar nuestros servicios y realizar análisis de la actividad de nuestros usuarios.</li>
              <li>Cumplir con nuestras obligaciones legales y fiscales.</li>
            </ul>
          </div>
        )}
      </div>

      <div className="accordion-item">
        <div
          className="accordion-header"
          onClick={() => toggleAccordion(3)}
        >
          4. ¿Cómo Utilizamos tus Datos Personales?
        </div>
        {activeIndex === 3 && (
          <div className="accordion-content">
            Los datos que nos proporcionas se utilizan principalmente para gestionar nuestra relación contigo, incluyendo el procesamiento de donaciones, el envío de información sobre nuestras actividades, y la personalización de tu experiencia en nuestro sitio web. También utilizamos estos datos para mejorar nuestros servicios y asegurarnos de cumplir con nuestras obligaciones legales.
          </div>
        )}
      </div>

      <div className="accordion-item">
        <div
          className="accordion-header"
          onClick={() => toggleAccordion(4)}
        >
          5. Compartir tus Datos con Terceros
        </div>
        {activeIndex === 4 && (
          <div className="accordion-content">
            Tu información personal no será compartida con terceros sin tu consentimiento, salvo en los siguientes casos:
            <ul>
              <li>Para cumplir con nuestras obligaciones legales, fiscales o judiciales.</li>
              <li>Con proveedores de servicios que nos ayuden a procesar donaciones, pagos, y comunicaciones.</li>
              <li>Con plataformas de análisis y marketing (como Google Analytics) que nos ayuden a entender el comportamiento de los usuarios en nuestro sitio web.</li>
            </ul>
          </div>
        )}
      </div>

      <div className="accordion-item">
        <div
          className="accordion-header"
          onClick={() => toggleAccordion(5)}
        >
          6. Cookies y Tecnologías Similares
        </div>
        {activeIndex === 5 && (
          <div className="accordion-content">
            Utilizamos cookies y tecnologías similares para mejorar tu experiencia en nuestro sitio web. Las cookies nos permiten:
            <ul>
              <li>Recordar tus preferencias y configuraciones.</li>
              <li>Analizar cómo los usuarios interactúan con nuestro sitio para mejorar la navegación.</li>
              <li>Personalizar el contenido y los anuncios que ves.</li>
            </ul>
            Puedes configurar tu navegador para que bloquee las cookies o te avise cuando se estén utilizando, pero ten en cuenta que algunas funcionalidades del sitio podrían no funcionar correctamente si desactivas las cookies.
          </div>
        )}
      </div>

      <div className="accordion-item">
        <div
          className="accordion-header"
          onClick={() => toggleAccordion(6)}
        >
          7. Derechos de los Titulares de los Datos
        </div>
        {activeIndex === 6 && (
          <div className="accordion-content">
            Como titular de los datos personales, tienes derecho a:
            <ul>
              <li>Acceder a tus datos personales y obtener una copia de los mismos.</li>
              <li>Rectificar datos incorrectos o incompletos.</li>
              <li>Cancelar o suprimir tus datos cuando ya no sean necesarios.</li>
              <li>Oponerte al tratamiento de tus datos en determinadas circunstancias.</li>
              <li>Solicitar la portabilidad de tus datos a otro proveedor de servicios.</li>
            </ul>
            Para ejercer cualquiera de estos derechos, por favor contacta con nosotros utilizando los medios proporcionados en la sección Contacto.
          </div>
        )}
      </div>

      <div className="accordion-item">
        <div
          className="accordion-header"
          onClick={() => toggleAccordion(7)}
        >
          8. Seguridad de los Datos Personales
        </div>
        {activeIndex === 7 && (
          <div className="accordion-content">
            En Fundación Axio, implementamos medidas de seguridad razonables para proteger tus datos personales contra el acceso no autorizado, pérdida, alteración o divulgación. Estas medidas incluyen el uso de encriptación y controles de acceso restrictivos.
          </div>
        )}
      </div>

      <div className="accordion-item">
        <div
          className="accordion-header"
          onClick={() => toggleAccordion(8)}
        >
          9. Retención de Datos Personales
        </div>
        {activeIndex === 8 && (
          <div className="accordion-content">
            Retendremos tus datos personales únicamente durante el tiempo necesario para cumplir con las finalidades para las que fueron recopilados, a menos que se requiera un plazo de conservación más largo para cumplir con obligaciones legales o fiscales.
          </div>
        )}
      </div>

      <div className="accordion-item">
        <div
          className="accordion-header"
          onClick={() => toggleAccordion(9)}
        >
          10. Transferencias Internacionales de Datos
        </div>
        {activeIndex === 9 && (
          <div className="accordion-content">
            En algunos casos, es posible que tus datos sean transferidos a servidores fuera de tu país de residencia, especialmente cuando utilizamos servicios de terceros que operan globalmente. En tales casos, nos aseguraremos de que los datos se manejen con un nivel adecuado de protección, conforme a la legislación aplicable.
          </div>
        )}
      </div>

      <div className="accordion-item">
        <div
          className="accordion-header"
          onClick={() => toggleAccordion(10)}
        >
          11. Modificaciones al Aviso de Privacidad
        </div>
        {activeIndex === 10 && (
          <div className="accordion-content">
            Fundación Axio se reserva el derecho de modificar este Aviso de Privacidad en cualquier momento, para adaptarlo a nuevos requerimientos legales, cambios en nuestros servicios o en nuestras prácticas de privacidad. Cualquier modificación será publicada en nuestro sitio web, y la fecha de la última actualización se indicará al final del aviso.
          </div>
        )}
      </div>

      <div className="accordion-item">
        <div
          className="accordion-header"
          onClick={() => toggleAccordion(11)}
        >
          12. Contacto
        </div>
        {activeIndex === 11 && (
          <div className="accordion-content">
            Si tienes preguntas sobre este Aviso de Privacidad o deseas ejercer cualquiera de tus derechos, puedes ponerte en contacto con nosotros a través de los siguientes medios:
            <ul>
              <li>Correo electrónico: <a href={`mailto:${Data.email1}`}>{Data.email1}</a></li>
              <li>Teléfono:  <a href={`tel:${Data.phone1}`}>{Data.phone1}</a></li>
              <li>Dirección:<a
                href={`${Data.addressdireccion}`}
                target="_blank"
                rel="noopener noreferrer"
              > 
                {Data.address}
              </a></li>
            </ul>
          </div>
        )}
      </div>
    </div>
</div>
  );
};

export default Priv;
