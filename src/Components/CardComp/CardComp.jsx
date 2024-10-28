import React from 'react';

import './CardComp.css';

const CardComp = ({ icono, titulo, descripcion }) => {
  return (
    <div className="card-component">
      <img src={icono} alt="Imagen del valor"/>
      <h3>{titulo}</h3>
      <p>{descripcion}</p>
    </div>
  );
}

export default CardComp;
