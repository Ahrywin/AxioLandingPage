import React from 'react';
import img from '../../assets/images/waitquiz.png';
import { Link } from 'react-router-dom' 
import '../../Components/BannerHome/BannerHome.css'

const MaintenancePage = () => {
  return (
    <div style={styles.container}>
      <div style={styles.top2}> 
    <h1 style={styles.text}>¡Ups! No encontramos quizzes activos en este momento.</h1>
    <p style={styles.subtext}>Si necesitas activar uno, contáctanos haciendo clic en el botón a continuación.</p>
    <div style={styles.contabtn}>
      <Link to="/contacto">
          <button className="banner-home-btn">Contacto</button>
        </Link>
        </div>
      <img
        src={img}
        alt="Quiz Activo"
        style={styles.image}
      />
        
        </div>
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
      maxWidth: '40%', // Reducir un poco el ancho en pantallas pequeñas
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
    top2:{
      marginTop: '20%',
      marginBottom: '15%'
    },
    contabtn:{
      marginBottom: '-5%'
    }
  };
  

export default MaintenancePage;
