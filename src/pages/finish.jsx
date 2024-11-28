import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import runner from '../assets/images/runner.png';

function Finish({ onClose, organizationId, departamentId, quizData }) {
  const [showConfetti, setShowConfetti] = useState(true);
  const [quizCount, setQuizCount] = useState(0);
  const [organizationName, setOrganizationName] = useState('');

  useEffect(() => {
    // Detener confeti después de 10 segundos
    const timer = setTimeout(() => setShowConfetti(false), 10000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const fetchQuizCount = async () => {
      try {
        if (!departamentId) {
          console.error('El ID del departamento no está definido');
          setQuizCount(0);
          return;
        }
  
        console.log('ID del departamento recibido en Finish:', departamentId);
  
        // Realiza la solicitud POST al endpoint con el id como query param
        const response = await fetch(`https://axiobk-001-site1.ktempurl.com/api/Quiz/totalCount?id=${departamentId}`, {
          method: 'POST', // Usamos POST como requerido
          headers: {
            'Content-Type': 'application/json', // Establecemos el Content-Type como JSON
          },
        });
  
        if (!response.ok) {
          console.error('Error en la respuesta del servidor:', response.status, response.statusText);
          setQuizCount(0);
          return;
        }
  
        // Convertimos la respuesta en JSON
        const data = await response.json();
        console.log('Respuesta del servidor:', data);
  
        if (data.Code === "200") {
          console.log('Conteo de cuestionarios recibido:', data.Content);
          setQuizCount(data.Content); // Actualiza correctamente el estado con el conteo
        } else {
          console.error('Error en la respuesta del servidor:', data.Message);
          setQuizCount(0);
        }
  
        // Encuentra el nombre de la organización basado en organizationId
        if (quizData && organizationId) {
          const organization = quizData.find(org => org.OrganizationID === organizationId);
          setOrganizationName(organization ? organization.OrganizationName : 'Organización no encontrada');
        } else {
          console.error('No se encontraron datos en quizData o el organizationId no es válido.');
          setOrganizationName('Organización no encontrada');
        }
      } catch (error) {
        console.error('Error al obtener los datos del cuestionario:', error);
        setQuizCount(0);
        setOrganizationName('Organización no encontrada');
      }
    };
  
    fetchQuizCount();
  }, [departamentId, organizationId, quizData]);
  
  

  return (
    <div style={styles.overlay} onClick={() => {
      window.location.href = '/';
      onClose();
    }}>
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
          Gracias por tu tiempo. Eres la persona número{' '}
          <strong>{quizCount}</strong> en responder de parte de "<strong>{organizationName}</strong>".
        </p>
        {quizCount === 0 && (
          <p style={{ color: 'red' }}>
            Asegúrate de que el departamento seleccionado tenga cuestionarios asociados.
          </p>
        )}
        {organizationName === 'Organización no encontrada' && (
          <p style={{ color: 'red' }}>
            Asegúrate de que la organización seleccionada sea válida.
          </p>
        )}
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
            window.location.href = '/';
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
