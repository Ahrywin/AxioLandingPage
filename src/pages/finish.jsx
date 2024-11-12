import React from 'react';
import runner from '../assets/images/runner.png';

function Finish({ onClose }) {
  return (
    <div style={styles.modalOverlay} onClick={onClose}>
      <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <h1 style={styles.title}>¡Felicidades!</h1>
        <p style={styles.subtitle}>Haz finalizado el SA-92</p>
        <div style={styles.imageContainer}>
          <img src={runner} alt="Runner finishing race" style={styles.image} />
        </div>
        <button style={styles.button} onClick={() => window.location.href = '/'}>
          Regresar al Inicio
        </button>
      </div>
    </div>
  );
}

const styles = {
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo semitransparente
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    textAlign: 'center',
    width: '90%',
    maxWidth: '500px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    fontFamily: '"Poppins", sans-serif',
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
  }
};

export default Finish;
