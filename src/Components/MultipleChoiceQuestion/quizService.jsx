import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { questions } from './questions';
import { categories } from './categories';

export function useQuizService() {
  const [Id] = useState(uuidv4());
  const [randomQuestions, setRandomQuestions] = useState([]);
  const [organizationId, setOrganizationId] = useState('');
  const [departmentId, setDepartmentId] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [educationLevel, setEducationLevel] = useState('');
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [alerts, setAlerts] = useState([]);
  const [setShowFinish] = useState(false);
  const [createdAt, setCreatedAt] = useState(null);
  const [startTime, setStartTime] = useState(null); // Estado para el inicio del quiz
  const [elapsedTime, setElapsedTime] = useState(0); // Estado para el tiempo transcurrido

  useEffect(() => {
    const shuffledQuestions = [...questions].sort(() => Math.random() - 0.5);
    setRandomQuestions(shuffledQuestions);
    setAnswers(Array(shuffledQuestions.length).fill(null));
  }, []);

  useEffect(() => {
    if (startTime) {
      const timer = setInterval(() => {
        setElapsedTime(Math.floor((Date.now() - startTime) / 1000)); // Actualiza el tiempo cada segundo
      }, 1000);

      // Limpiar el intervalo cuando el quiz termine
      return () => clearInterval(timer);
    }
  }, [startTime]);

  const showAlert = (type, message) => {
    const id = uuidv4();
    setAlerts([...alerts, { id, type, message }]);
  };

  const closeAlert = (id) => {
    setAlerts(alerts.filter(alert => alert.id !== id));
  };

  const handleOptionSelect = (selectedValue) => {
    if (!createdAt) setCreatedAt(new Date().toISOString()); // Registra el inicio si aún no está establecido
    if (!startTime) setStartTime(Date.now()); // Inicia el contador de tiempo solo la primera vez que se selecciona una respuesta

    const newAnswers = [...answers];
    newAnswers[currentStep - 5] = selectedValue;
    setAnswers(newAnswers);
    handleNext();
  };

  const handleNext = () => {
    if (currentStep < randomQuestions.length + 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    const finishAt = new Date().toISOString();

    const sectionResults = randomQuestions.reduce((acc, question, index) => {
      const category = categories.find(cat => question.value <= cat.limit).name;
      if (!acc[category]) acc[category] = { category, answers: [], score: 0 };
      const answerValue = answers[index] || 0;
      acc[category].answers.push(answerValue);
      acc[category].score += answerValue;
      return acc;
    }, {});

    const body = {
      Id,
      organizationId,
      departmentId,
      gender,
      age,
      educationLevel,
      sectionResults: Object.values(sectionResults),
      createdAt, // Utiliza el valor establecido al inicio del quiz
      finishAt,
      elapsedTime, // Agrega el tiempo transcurrido
    };

    try {
      const response = await fetch('http://localhost:3001/saveAnswers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      if (response.ok) {
        showAlert('success', 'Respuestas guardadas con éxito.');
        setShowFinish(true);
      } else {
        showAlert('error', 'Error al guardar las respuestas.');
      }
    } catch (error) {
      console.error('Error:', error);
      showAlert('error', 'Error al guardar las respuestas.');
    }
  };

  const totalSteps = randomQuestions.length + 5;
  const progressPercentage = ((currentStep + 1) / totalSteps) * 100;

  return {
    Id,
    organizationId, setOrganizationId,
    departmentId, setDepartmentId,
    gender, setGender,
    age, setAge,
    educationLevel, setEducationLevel,
    currentStep, setCurrentStep,
    answers, setAnswers,
    alerts, setAlerts,
    showAlert, closeAlert,
    handleOptionSelect,
    handleNext, handlePrevious,
    handleSubmit,
    randomQuestions,
    totalSteps,
    progressPercentage,
    elapsedTime, // Devuelve el tiempo transcurrido
  };
}
