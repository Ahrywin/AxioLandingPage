// Datos.js
import React, { useEffect } from 'react';

const Datos = () => {
  useEffect(() => {
    // Definir los datos en el objeto window.contactData
    window.contactData = {
      email1: "contacto@fundacionaxio.org",
      email2: "admin@fundacionaxio.org",
      phone1: "+52 7717121668",
      phone2: "098-765-4321",
      address: "Privada, Torres de La Fuente #136, Plaza las Torres, 42082 Pachuca de Soto, Hidalgo, México.",
      addressdireccion: 'https://www.google.com.mx/maps/place/Fundaci%C3%B3n+Axio+A.C./@20.0643619,-98.7873803,19z/data=!3m1!4b1!4m6!3m5!1s0x85d1a1cfee309439:0x8db7350c62bc8224!8m2!3d20.0643619!4d-98.7867366!16s%2Fg%2F11ff0r2yyp?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D'
    };
  }, []); // Se ejecuta solo una vez cuando el componente se monta

  return null; // Si no necesitas mostrar nada, puedes retornar null
};

export default Datos;
