import React from 'react';
import img from '../../assets/images/waitquiz.png';
import { Link } from 'react-router-dom';

import './Maintenance.css'

const MaintenancePage = () => {
  return (
    <div className="maintenance-container">
      <div className="maintenance-top2">
        <h1 className="maintenance-text">¡Ups! No encontramos quizzes activos en este momento.</h1>
        <p className="maintenance-subtext">
          Si necesitas activar uno, contáctanos haciendo clic en el botón a continuación.
        </p>
        <img src={img} alt="Quiz Activo" className="maintenance-image" />
        <div className="maintenance-contabtn">
          <Link to="/contact">
            <button className="banner-home-btn">Contacto</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MaintenancePage;
