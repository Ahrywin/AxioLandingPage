import React from 'react';
import img from '../../assets/images/work-progress.gif';

const MaintenancePage = () => {
  return (
    <div style={styles.container}>
      <img
        src={img}
        alt="Carga"
        style={styles.image}
      />
      <h1 style={styles.text}></h1>
      <p style={styles.subtext}></p>
    </div>
  );
};

const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      textAlign: 'center',
      backgroundColor: '#f8f9fa',
      fontFamily: '"Poppins", sans-serif',
      color: '#1E88E5',
      padding: '20px', // Espaciado adicional para dispositivos pequeños
      boxSizing: 'border-box',
    },
    image: {
      maxWidth: '90%', // Reducir un poco el ancho en pantallas pequeñas
      height: 'auto',
      marginBottom: '20px',
    },
    text: {
      fontSize: 'clamp(20px, 5vw, 24px)', // Ajuste dinámico para diferentes tamaños de pantalla
      fontWeight: 'bold',
      textAlign: 'center',
    },
    subtext: {
      fontSize: 'clamp(16px, 4vw, 18px)', // También ajusta dinámicamente
      color: '#6c757d',
      marginTop: '10px',
    },
  };
  

export default MaintenancePage;
