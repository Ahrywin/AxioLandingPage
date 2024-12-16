import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import runner from '../assets/images/runner.png';

function Finish({ onClose, organizationId, departamentId, quizData }) {
  const [showConfetti, setShowConfetti] = useState(true);
  const [quizCount, setQuizCount] = useState(0);
  const [organizationName, setOrganizationName] = useState('');
  const [departmentName, setDepartmentName] = useState('');

  // Detener confeti después de 10 segundos
  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 10000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const fetchQuizCount = async () => {
      try {
        if (!departamentId) {
          console.error('El ID del departamento no está definido');
          return;
        }

        // Llamada al endpoint para obtener el conteo de cuestionarios
        const response = await fetch(
          `https://axiobk-001-site1.ktempurl.com/api/Quiz/totalCount?id=${departamentId}`,
          { method: 'POST', headers: { 'Content-Type': 'application/json' } }
        );

        if (!response.ok) throw new Error('Error en la respuesta del servidor');

        const data = await response.json();
        if (data.Code === '200') setQuizCount(data.Content);
        else console.error('Error en el servidor:', data.Message);

        // Buscar nombres de organización y departamento
        if (quizData && organizationId) {
          const org = quizData.find((o) => o.OrganizationID === organizationId);
          setOrganizationName(org ? org.OrganizationName : 'Organización no encontrada');

          const dept = quizData.find((d) => d.DepartamentID === departamentId);
          setDepartmentName(dept ? dept.DepartamentName : 'Departamento no encontrado');
        }
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    };

    fetchQuizCount();
  }, [departamentId, organizationId, quizData]);

  return (
    <div style={styles.overlay} onClick={() => window.location.href = '/'}>
      {showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} numberOfPieces={300} gravity={0.2} />}
      <div style={styles.container} onClick={(e) => e.stopPropagation()}>
        <h1 style={styles.title}>¡Felicidades!</h1>
        <p style={styles.subtitle}>Has finalizado el SA-92</p>
        <p style={styles.quizCount}>
          Gracias por tu tiempo. Eres la persona número <strong>{quizCount}</strong> en responder por el departamento "<strong>{departmentName}</strong>" de la organización "<strong>{organizationName}</strong>".
        </p>
        <div style={styles.imageContainer}>
          <img src={runner} alt="Runner finishing race" style={styles.image} />
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
  },
  title: {
    color: '#1E88E5',
    fontSize: '2.5rem',
    fontWeight: 'bold',
  },
  subtitle: { fontSize: '1.2rem', color: '#333', marginBottom: '20px' },
  quizCount: { fontSize: '1.2rem', color: '#555', marginBottom: '20px' },
  imageContainer: { width: '100%', maxWidth: '400px', marginBottom: '30px' },
  image: { width: '100%', height: 'auto' },
  button: {
    backgroundColor: '#1E88E5',
    color: '#fff',
    border: 'none',
    borderRadius: '20px',
    padding: '10px 30px',
    fontSize: '1rem',
    cursor: 'pointer',
  },
};

export default Finish;
