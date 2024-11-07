import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; // Importa la función para generar UUIDs
import MultipleChoiceQuestion from '../Components/MultipleChoiceQuestion/MultipleChoiceQuestion';
import './quiz.css';
import ImgDigital1 from '../assets/images/eco.jpg';

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
    { id: 'db4875a9-1587-46c3-a068-12ba39d19250', name: 'ORGANIZACOIN AXIO' }
  ];

  const departments = [
    { id: '8760b3a5-d269-462d-8aa9-e6a6931e58ab', name: 'CA-TEE SISTEMAS' }
  ];

  const [organizationId, setOrganizationId] = useState('');
  const [departmentId, setDepartmentId] = useState('');
  const [currentStep, setCurrentStep] = useState(0); // Controla todos los pasos: organización, departamento, preguntas
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));

  const handleOptionSelect = (selectedValue) => {
    const newAnswers = [...answers];
    newAnswers[currentStep - 2] = selectedValue; // Ajustar el índice para almacenar la respuesta correcta
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentStep < questions.length + 1) { // Asegúrate de que solo avance hasta las preguntas
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    const quizId = uuidv4(); // Genera un nuevo ID único para cada quiz

    const results = questions.map((question, index) => {
      return {
        quizId,  // El quizId ahora es dinámico
        question: question.value,  // Enviar solo el valor de la pregunta
        answer1: answers[index],     // Enviar la respuesta seleccionada
      };
    });

    const body = {
      id: quizId,  // El id es el mismo que el quizId
      organizationId,
      departmentId, // Enviar solo el ID del departamento
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
        alert('Respuestas guardadas con éxito.');
      } else {
        alert('Error al guardar las respuestas.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error al guardar las respuestas.');
    }
  };

  const totalSteps = questions.length + 2; // Incluyendo los pasos de organización y departamento
  const progressPercentage = ((currentStep + 1) / totalSteps) * 100;

  return (
    <div>
      <BannerComp title={'Quiz'} image={ImgDigital1} />
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
          <button onClick={handlePrevious} disabled={currentStep === 0} className='qzbutton'>
            Anterior
          </button>

          {/* Mostrar "Siguiente" solo si no estamos en el último paso */}
          {currentStep < questions.length + 1 && (
            <button onClick={handleNext} disabled={answers[currentStep - 2] === null} className='qzbutton'>
              Siguiente
            </button>
          )}

          {/* Mostrar "Finalizar" en la última pregunta */}
          {currentStep === questions.length + 1 && (
            <button onClick={handleSubmit} disabled={answers[currentStep - 2] === null} className='qzbutton'>
              Finalizar
            </button>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Quiz;
