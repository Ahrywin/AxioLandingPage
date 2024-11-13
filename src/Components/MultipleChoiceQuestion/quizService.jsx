// quizService.js
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { questions } from './questions';
import { categories } from './categories';
import { useNavigate } from 'react-router-dom';

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
    const [createdAt, setCreatedAt] = useState(null); // Nuevo estado para createdAt
    const navigate = useNavigate();
  
    useEffect(() => {
      const shuffledQuestions = [...questions].sort(() => Math.random() - 0.5);
      setRandomQuestions(shuffledQuestions);
      setAnswers(Array(shuffledQuestions.length).fill(null));
    }, []);
  
    const showAlert = (type, message) => {
      const id = uuidv4();
      setAlerts([...alerts, { id, type, message }]);
    };
  
    const closeAlert = (id) => {
      setAlerts(alerts.filter(alert => alert.id !== id));
    };
  
    const handleOptionSelect = (selectedValue) => {
      if (!createdAt) setCreatedAt(new Date().toISOString()); // Registra el inicio si aún no está establecido
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
      };
  
      try {
        const response = await fetch('https://axiobk-001-site2.ktempurl.com/api/quiz', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        });
  
        if (response.ok) {
          showAlert('success', 'Respuestas guardadas con éxito.');
          navigate('/finish');
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
    };
  }
  