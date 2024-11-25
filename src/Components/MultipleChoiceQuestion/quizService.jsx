import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { questions } from './questions';
import { categories } from './categories';

export function useQuizService() {
  const [id] = useState(uuidv4());
  const [randomQuestions, setRandomQuestions] = useState([]);
  const [organizationId, setOrganizationId] = useState('');
  const [departmentId, setDepartmentId] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [educationLevel, setEducationLevel] = useState('');
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [alerts, setAlerts] = useState([]);
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

      return () => clearInterval(timer); // Clear interval on unmount or finish
    }
  }, [startTime, showFinish]);

  const showAlert = (type, message) => {
    const id = uuidv4();
    setAlerts((prevAlerts) => [...prevAlerts, { id, type, message }]);
  };

  const closeAlert = (id) => {
    setAlerts((prevAlerts) => prevAlerts.filter((alert) => alert.id !== id));
  };

  const handleOptionSelect = (selectedValue) => {
    if (!createdAt) setCreatedAt(new Date().toISOString());
    if (!startTime) setStartTime(Date.now());

    const updatedAnswers = [...answers];
    updatedAnswers[currentStep - 5] = selectedValue; // Index offset for initial steps
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
    if (!organizationId || !departmentId || !age || !educationLevel || !gender) {
      showAlert('warning', 'Por favor, completa toda la información requerida antes de continuar.');
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return false;

    const finishAt = new Date().toISOString();

    // Calculate section results
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
      id,
      organizationId,
      departmentId,
      gender,
      age,
      educationLevel,
      createdAt,
      finishAt,
      elapsedTime,
      answers: formattedAnswers,
    };

    try {
      const response = await fetch('https://axiobk-001-site1.ktempurl.com/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      if (response.ok) {
        showAlert('success', 'Respuestas guardadas con éxito.');
        setShowFinish(true);
        return true; // Éxito
      } else {
        const errorText = await response.text();
        showAlert('error', `Error al guardar las respuestas: ${errorText}`);
        return false; // Error
      }
    } catch (error) {
      console.error('Error:', error);
      showAlert('error', 'Error al guardar las respuestas. Por favor, inténtalo de nuevo más tarde.');
      return false; // Error
    }
  };

  const totalSteps = randomQuestions.length + 5;
  const progressPercentage = Math.min(((currentStep + 1) / totalSteps) * 100, 100);

  return {
    id,
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
    elapsedTime,
  };
}
