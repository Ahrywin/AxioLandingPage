import React, { useState } from 'react';

import BannerComp from '../Components/BannerComp/BannerComp'
import ImgContact from '../assets/images/contact.jpg'
import GifWork from '../assets/images/work-progress.gif'

const contact = () => {
  return (
    <div>
      <BannerComp title={"Contacto"} image={ImgContact}/>
      <section className="contact-section-a">
       
        <div style={{ width: '100%', height: '450px', textAlignLast:'center'}}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3747.667458667578!2d-98.78931152422457!3d20.064366920201145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1a1cfee309439%3A0x8db7350c62bc8224!2sFundaci%C3%B3n%20Axio%20A.C.!5e0!3m2!1ses!2smx!4v1725455593194!5m2!1ses!2smx"
        width="100%"
        height="100%"
        style={{ border: '0' }}
        allowFullScreen={true}
        loading="lazy"
        title="Google Map"
      ></iframe>
   <ContactForm />



    </div>
      </section>

     
  
    </div>
    
  )
}

export default contact



import ContactForm from '../Components/formularioContact/formularioContact'
