import React from 'react';
import runner from '../assets/images/runner.png'
import Footer from '../Footer';
function Finish() {
  return (
    <div>
    <div style={styles.container}>
      <h1 style={styles.title}>¡Felicidades!</h1>
      <p style={styles.subtitle}>haz finalizado el SA-92</p>
      <div style={styles.imageContainer}>
        {/* You can replace this with an <img> tag to include an actual image */}
        <img 
          src={runner} 
          alt="Runner finishing race" 
          style={styles.image}
        />
      </div>
      <button style={styles.button} onClick={() => window.location.href = '/'}>
        Regresar al Inicio
      </button>
      
    </div>
    <Footer />
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    padding: '20px',
    textAlign: 'center',
    fontFamily: '"Poppins", sans-serif'
  },
  title: {
    color: '#1E88E5',
    fontSize: '2.5rem',
    fontWeight: 'bold',
    margin: '0 0 10px 0'
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#333',
    marginBottom: '20px'
  },
  imageContainer: {
    width: '100%',
    maxWidth: '400px',
    marginBottom: '30px'
  },
  image: {
    width: '100%',
    height: 'auto'
  },
  button: {
    backgroundColor: '#1E88E5',
    color: '#fff',
    border: 'none',
    borderRadius: '20px',
    padding: '10px 30px',
    fontSize: '1rem',
    cursor: 'pointer',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
  },
  '@media (max-width: 768px)': {
    title: {
      fontSize: '2rem',
    },
    subtitle: {
      fontSize: '1rem',
    },
    button: {
      padding: '8px 20px',
      fontSize: '0.9rem',
    },
    imageContainer: {
      maxWidth: '300px',
    },
  },
  '@media (max-width: 480px)': {
    title: {
      fontSize: '1.8rem',
    },
    subtitle: {
      fontSize: '0.9rem',
    },
    button: {
      padding: '6px 15px',
      fontSize: '0.8rem',
    },
    imageContainer: {
      maxWidth: '250px',
    },
  },
};

export default Finish;
