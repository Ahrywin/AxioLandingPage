import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import MultipleChoiceQuestion from '../Components/MultipleChoiceQuestion/MultipleChoiceQuestion';
import Alert from '../Components/Alert/Alert';
import './quiz.css';
import ImgDigital1 from '../assets/images/eco.jpg';
import { useNavigate } from 'react-router-dom';
import BannerComp from '../Components/BannerComp/BannerComp';
import Footer from '../Footer';

function Quiz() {
  const questions = [
    {
      question: 'Es una obligación moral consultar a los expertos antes de decidir.',
      value: 1,
      options: [
        { value: 0, label: 'Indiferente' },
        { value: -2, label: 'Totalmente en desacuerdo' },
        { value: -1, label: 'En desacuerdo' },
        { value: 1, label: 'De acuerdo' },
        { value: 2, label: 'Totalmente de acuerdo' },
      ],
    },
    {
      question: 'Antes de tomar una decisión siempre estoy dispuesto a recibir un buen consejo.',
      value: 2,
      options: [
        { value: 0, label: 'Indiferente' },
        { value: -2, label: 'Totalmente en desacuerdo' },
        { value: -1, label: 'En desacuerdo' },
        { value: 1, label: 'De acuerdo' },
        { value: 2, label: 'Totalmente de acuerdo' },
      ],
    },
  ];

  const organizations = [
    { id: 'db4875a9-1587-46c3-a068-12ba39d19250', name: 'ORGANIZACOIN AXIO' },
  ];

  const departments = [
    { id: '8760b3a5-d269-462d-8aa9-e6a6931e58ab', name: 'CA-TEE SISTEMAS' },
  ];

  const [organizationId, setOrganizationId] = useState('');
  const [departmentId, setDepartmentId] = useState('');
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [alerts, setAlerts] = useState([]);
  const navigate = useNavigate();

  const showAlert = (type, message) => {
    const id = uuidv4();
    setAlerts([...alerts, { id, type, message }]);
  };

  const closeAlert = (id) => {
    setAlerts(alerts.filter(alert => alert.id !== id));
  };

  const handleOptionSelect = (selectedValue) => {
    const newAnswers = [...answers];
    newAnswers[currentStep - 2] = selectedValue;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentStep < questions.length + 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    const quizId = uuidv4();

    const results = questions.map((question, index) => ({
      quizId,
      question: question.value,
      answer1: answers[index],
    }));

    const body = {
      id: quizId,
      organizationId,
      departmentId,
      createdAt: new Date().toISOString(),
      answers: results,
    };

    try {
      const response = await fetch('https://axiobk-001-site2.ktempurl.com/api/quiz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      if (response.ok) {
        showAlert('success', 'Respuestas guardadas con éxito.    ');
        navigate('/finish');
      } else {
        showAlert('error', 'Error al guardar las respuestas.    ');
        
      }
    } catch (error) {
      console.error('Error:', error);
      showAlert('error', 'Error al guardar las respuestas.  ');      
    }
  };

  const totalSteps = questions.length + 2;
  const progressPercentage = ((currentStep + 1) / totalSteps) * 100;

  return (
    <div>
      <BannerComp title="Quiz" image={ImgDigital1} />



      <div className="App">
        <div className="progress-bar" style={{ width: `${progressPercentage}%` }}></div>

        {/* Paso de selección de organización */}
        {currentStep === 0 && (
          <div className="question-container">
            <h3>Selecciona una organización para avanzar</h3>
            <select
              value={organizationId}
              onChange={(e) => setOrganizationId(e.target.value)}
              required
              className="organization-select"
            >
              <option value="" disabled>
                Selecciona una organización
              </option>
              {organizations.map((org) => (
                <option key={org.id} value={org.id}>
                  {org.name}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Paso de selección de departamento */}
        {currentStep === 1 && organizationId && (
          <div className="question-container">
            <h3>Selecciona un departamento para avanzar</h3>
            <select
              value={departmentId}
              onChange={(e) => setDepartmentId(e.target.value)}
              required
              className="organization-select"
            >
              <option value="" disabled>
                Selecciona un departamento
              </option>
              {departments.map((dept) => (
                <option key={dept.id} value={dept.id}>
                  {dept.name}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Mostrar preguntas solo si se ha seleccionado la organización y el departamento */}
        {currentStep >= 2 && organizationId && departmentId && (
          <MultipleChoiceQuestion
            question={questions[currentStep - 2].question}
            options={questions[currentStep - 2].options}
            onOptionSelect={handleOptionSelect}
            selectedOption={answers[currentStep - 2]}
            questionIndex={currentStep - 2}
          />
        )}

        {/* Botones de navegación */}
        <div className="button-container">
          <button onClick={handlePrevious} disabled={currentStep === 0} className="qzbutton">
            Anterior
          </button>

          {currentStep < questions.length + 1 && (
            <button onClick={handleNext} disabled={answers[currentStep - 2] === null} className="qzbutton">
              Siguiente
            </button>
          )}

          {currentStep === questions.length + 1 && (
            <button onClick={handleSubmit} disabled={answers[currentStep - 2] === null} className="qzbutton">
              Finalizar
            </button>
          )}
        </div>
              {/* Contenedor de alertas */}
      <div className="alert-container">
        {alerts.map(alert => (
          <Alert
            key={alert.id}
            type={alert.type}
            message={alert.message}
            onClose={() => closeAlert(alert.id)}
          />
        ))}
      </div>
      </div>
      <Footer />
    </div>
  );
}

export default Quiz;
