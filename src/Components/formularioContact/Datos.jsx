// Datos.js
import React, { useEffect } from 'react';

const Datos = () => {
  useEffect(() => {
    const contactData = {
      email1: "contacto@fundacionaxio.org",
      email2: "admin@fundacionaxio.org",
      phone1: "+52 7717121668",
      phone2: "098-765-4321",
      address: "Privada, Torres de La Fuente #136, Plaza las Torres, 42082 Pachuca de Soto, Hidalgo, México."
    };
    localStorage.setItem('contactData', JSON.stringify(contactData));
  }, []);

  return null;
};

export default Datos;
