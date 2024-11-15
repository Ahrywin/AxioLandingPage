import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import runner from '../assets/images/runner.png';

function Finish({ onClose }) {
  const [showConfetti, setShowConfetti] = useState(true);

  const handleOverlayClick = () => {
    // Redirige a la página de inicio
    window.location.href = '/';
    // Cierra el modal
    onClose();
  };

  useEffect(() => {
    // Detener confeti después de 5 segundos
    const timer = setTimeout(() => setShowConfetti(false), 10000);
    return () => clearTimeout(timer); // Limpia el temporizador
  }, []);

  return (
    <div style={styles.overlay} onClick={handleOverlayClick}>
      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          numberOfPieces={300}
          gravity={0.2}
        />
      )}
      <div style={styles.container} onClick={(e) => e.stopPropagation()}>
        <h1 style={styles.title}>¡Felicidades!</h1>
        <p style={styles.subtitle}>has finalizado el SA-92</p>
        <div style={styles.imageContainer}>
          <img
            src={runner}
            alt="Runner finishing race"
            style={styles.image}
          />
        </div>
        <button
          style={styles.button}
          onClick={() => {
            // Redirige a la página de inicio
            window.location.href = '/';
            // Cierra el modal
            onClose();
          }}
        >
          Regresar al Inicio
        </button>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
    fontFamily: '"Poppins", sans-serif',
  },
  container: {
    backgroundColor: '#fff',
    borderRadius: '10px',
    padding: '20px',
    textAlign: 'center',
    maxWidth: '500px',
    width: '100%',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    fontFamily: '"Poppins", sans-serif',
  },
  title: {
    color: '#1E88E5',
    fontSize: '2.5rem',
    fontWeight: 'bold',
    margin: '0 0 10px 0',
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#333',
    marginBottom: '20px',
  },
  imageContainer: {
    width: '100%',
    maxWidth: '400px',
    marginBottom: '30px',
  },
  image: {
    width: '100%',
    height: 'auto',
  },
  button: {
    backgroundColor: '#1E88E5',
    color: '#fff',
    border: 'none',
    borderRadius: '20px',
    padding: '10px 30px',
    fontSize: '1rem',
    cursor: 'pointer',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  },
};

export default Finish;
