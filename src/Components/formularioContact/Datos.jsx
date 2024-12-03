// Datos.js
import React, { useEffect } from 'react';

const Datos = () => {
  useEffect(() => {
    const contactData = {
      email1: "contacto.fundacionaxio@gmail.com",
      email2: "admin@fundacionaxio.org",
      phone1: "+52 7717121668",
      phone2: "098-765-4321",
      address: "Privada, Torres de La Fuente #136, Plaza las Torres, 42082 Pachuca de Soto, Hidalgo, México.",
      axioone: "https://axio-one-2c81d.web.app/auth/login",
      axioonenombre :"Axio One"
    };
    localStorage.setItem('contactData', JSON.stringify(contactData));
  }, []);

  return null;
};

export default Datos;
