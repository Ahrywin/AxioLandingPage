import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import runner from '../assets/images/runner.png';

function Finish({ onClose, organizationId, quizData }) {
  const [showConfetti, setShowConfetti] = useState(true);
  const [quizCount, setQuizCount] = useState(0); // Estado para el contador
  const [organizationName, setOrganizationName] = useState(''); // Estado para el nombre de la organización

  const handleOverlayClick = () => {
    // Redirige a la página de inicio
    window.location.href = '/';
    // Cierra el modal
    onClose();
  };

  useEffect(() => {
    // Detener confeti después de 10 segundos
    const timer = setTimeout(() => setShowConfetti(false), 10000);
    return () => clearTimeout(timer); // Limpia el temporizador
  }, []);

  useEffect(() => {
    // Obtén el total de quizzes generados y el nombre de la organización
    const fetchQuizCount = async () => {
      try {
        const response = await fetch('https://axiobk-001-site1.ktempurl.com/api/Quiz/totalCount');
        const data = await response.json();
        // Filtra los datos según la organización seleccionada
        const filteredCount = data.filter(quiz => quiz.OrganizationID === organizationId).length;
        setQuizCount(filteredCount);

        // Encuentra el nombre de la organización en los datos de `quizData`
        const organization = quizData.find(org => org.OrganizationID === organizationId);
        setOrganizationName(organization ? organization.OrganizationName : 'Organización no encontrada');
      } catch (error) {
        console.error('Error fetching quiz count or organization name:', error);
      }
    };

    if (organizationId) {
      fetchQuizCount();
    }
  }, [organizationId, quizData]);

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
        <p style={styles.subtitle}>Has finalizado el SA-92</p>
        <p style={styles.quizCount}>
      Gracias por tu tiempo. Eres la persona número  <strong>{quizCount}</strong> en responder de parte de  " <strong>{organizationName}</strong> ".
        </p>
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
  quizCount: {
    fontSize: '1.2rem',
    color: '#555',
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
