import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { questions } from './questions';
import { categories } from './categories';

export function useQuizService() {
  const [id] = useState(uuidv4());
  const [randomQuestions, setRandomQuestions] = useState([]);
  const [organizationId, setOrganizationId] = useState('');
  const [departmentId, setDepartmentId] = useState('');
  const [gener, setGener] = useState('');
  const [age, setAge] = useState('');
  const [educationLevel, setEducationLevel] = useState('');
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [alerts, setAlerts] = useState([]); // Manejo de alertas
  const [showFinish, setShowFinish] = useState(false);
  const [createdAt, setCreatedAt] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);

  // Shuffle questions on mount
  useEffect(() => {
    const shuffledQuestions = [...questions].sort(() => Math.random() - 0.5);
    setRandomQuestions(shuffledQuestions);
    setAnswers(Array(shuffledQuestions.length).fill(null));
  }, []);

  // Timer management
  useEffect(() => {
    if (startTime && !showFinish) {
      const timer = setInterval(() => {
        setElapsedTime(Math.floor((Date.now() - startTime) / 1000));
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [startTime, showFinish]);

  const showAlert = (type, message) => {
    // Verifica si ya hay una alerta activa antes de agregar una nueva
    if (alerts.length > 0) {
      closeAlert(alerts[0].id); // Elimina la alerta activa
    }

    const id = uuidv4();
    setAlerts([{ id, type, message }]); // Solo mantiene una alerta activa
  };

  const closeAlert = (id = null) => {
    if (id) {
      setAlerts((prevAlerts) => prevAlerts.filter((alert) => alert.id !== id));
    } else {
      setAlerts([]); // Limpia todas las alertas
    }
  };

  const handleOptionSelect = (selectedValue) => {
    if (!createdAt) setCreatedAt(new Date().toISOString());
    if (!startTime) setStartTime(Date.now());

    const updatedAnswers = [...answers];
    updatedAnswers[currentStep - 5] = selectedValue;
    setAnswers(updatedAnswers);
    handleNext();
  };

  const handleNext = () => {
    if (currentStep < randomQuestions.length + 4) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep((prevStep) => prevStep - 1);
    }
  };

  const validateForm = () => {
    if (!organizationId || !departmentId || !age || !educationLevel || !gener) {
      showAlert('warning', 'Por favor, completa toda la información requerida antes de continuar.');
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return false;

    const finishAt = new Date().toISOString();

    const sectionResults = randomQuestions.reduce((acc, question, index) => {
      const categoryObj = categories.find((cat) => question.value <= cat.limit);

      if (!categoryObj) {
        console.warn(`No se encontró una categoría para la pregunta con valor ${question.value}`);
        return acc;
      }

      const category = categoryObj.name;
      if (!acc[category]) acc[category] = { category, score: 0 };
      const answerValue = answers[index] || 0;
      acc[category].score += answerValue;
      return acc;
    }, {});

    const formattedAnswers = Object.values(sectionResults).map((section) => ({
      quizId: id,
      category: section.category,
      score: section.score,
    }));

    const body = {
      newQuiz: {
        id,
        organizationId,
        departmentId,
        gener,
        age,
        educationLevel,
        createdAt,
        finishAt,
        elapsedTime: elapsedTime.toString(), // Convertimos a string
        answers: formattedAnswers,
      },
    };

    try {
      console.log('Body enviado al servidor:', JSON.stringify(body, null, 2)); // Inspección
      const response = await fetch('https://axiobk-001-site1.ktempurl.com//api/Quiz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      if (response.ok) {
        showAlert('success', 'Respuestas guardadas con éxito.');
        setShowFinish(true);
        return true;
      } else {
        const errorText = await response.text();
        console.error('Error del servidor:', errorText);
        closeAlert(); // Cierra cualquier alerta previa
        showAlert('error', `Error al guardar las respuestas: ${errorText}`); // Muestra solo una alerta
        return false;
      }
    } catch (error) {
      console.error('Error de conexión:', error);
      closeAlert(); // Cierra cualquier alerta previa
      showAlert('error', 'Error al guardar las respuestas. Por favor, inténtalo de nuevo más tarde.');
      return false;
    }
  };

  const totalSteps = randomQuestions.length + 5;
  const progressPercentage = Math.min(((currentStep + 1) / totalSteps) * 100, 100);

  return {
    id,
    organizationId,
    setOrganizationId,
    departmentId,
    setDepartmentId,
    gener,
    setGener,
    age,
    setAge,
    educationLevel,
    setEducationLevel,
    currentStep,
    setCurrentStep,
    answers,
    setAnswers,
    alerts,
    setAlerts,
    showAlert,
    closeAlert,
    handleOptionSelect,
    handleNext,
    handlePrevious,
    handleSubmit,
    randomQuestions,
    totalSteps,
    progressPercentage,
    elapsedTime,
  };
}
