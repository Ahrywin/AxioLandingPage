import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import MultipleChoiceQuestion from '../Components/MultipleChoiceQuestion/MultipleChoiceQuestion';
import Alert from '../Components/Alert/Alert';
import './quiz.css';
import ImgDigital1 from '../assets/images/eco.jpg';
import { useNavigate } from 'react-router-dom';
import BannerComp from '../Components/BannerComp/BannerComp';

function Quiz() {
  const categories = [
    { limit: 4, name: "Consejo" },
    { limit: 8, name: "Juicio" },
    { limit: 12, name: "Perio" },
    { limit: 16, name: "Memoria del pasado" },
    { limit: 20, name: "Circunspección" },
    { limit: 24, name: "Cautela" },
    { limit: 28, name: "Perseverancia" },
    { limit: 32, name: "Constancia" },
    { limit: 36, name: "Paciencia" },
    { limit: 40, name: "Magnanimidad" },
    { limit: 44, name: "Cultura de la legalidad" },
    { limit: 48, name: "Justicia distributiva" },
    { limit: 52, name: "Justicia conmutativa" },
    { limit: 56, name: "Gratitud" },
    { limit: 60, name: "Fidelidad" },
    { limit: 64, name: "Respeto" },
    { limit: 68, name: "Liberalidad" },
    { limit: 72, name: "Honestidad" },
    { limit: 76, name: "Moderación" },
    { limit: 80, name: "Sobriedad" },
    { limit: 84, name: "Humildad" },
    { limit: 88, name: "Simplicidad" },
    { limit: 90, name: "Estudiosidad" },
  ];

  const questions = [
    {
      //consejo
      question: 'Es una obligación moral consultar a los expertos antes de decidir.',
      value: 1, // Value for this question
      options: [
        { value: 0, label: 'Indiferente' },
        { value: -2, label: 'Totalmente en desacuerdo' },
        { value: -1, label: 'En desacuerdo' },
        { value: 1, label: 'De acuerdo' },
        { value: 2, label: 'Totalmente de acuerdo' }
      ]
    },
    {
      question: 'Antes de tomar una decisión siempre estoy dispuesto a recibir un buen consejo.',
      value: 2, // Value for this question
      options: [
        { value: 0, label: 'Indiferente' },
        { value: -2, label: 'Totalmente en desacuerdo' },
        { value: -1, label: 'En desacuerdo' },
        { value: 1, label: 'De acuerdo' },
        { value: 2, label: 'Totalmente de acuerdo' }
      ]
    }
  ];

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
  const newAnswers = [...answers];
  newAnswers[currentStep - 5] = selectedValue; // Adjust step for age and education
  setAnswers(newAnswers);
};

const handleNext = () => {
  if (currentStep < randomQuestions.length + 4) {  // Adjusted total steps
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

  // Asignar la categoría correspondiente a cada pregunta
  const results = randomQuestions.map((question, index) => {
    // Determinar la categoría de la pregunta
    const category = categories.find(cat => question.value <= cat.limit).name;

    return {
      quizId,
      question: question.value,
      answer: answers[index],
      category: category  // Asignamos la categoría aquí
    };
  });

  const sectionResults = randomQuestions.reduce((acc, question, index) => {
    const category = categories.find(cat => question.value <= cat.limit).name;  // Asignamos la categoría
    if (!acc[category]) acc[category] = { category, answers: [] };
    acc[category].answers.push(answers[index]);
    return acc;
  }, {});

  const body = {
    organizationId,
    departmentId,
    gender,
    age,
    educationLevel,
    answers: results,
    sectionResults: Object.values(sectionResults)
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

const totalSteps = randomQuestions.length + 5;  // Adjusted total steps to include age and education level
const progressPercentage = ((currentStep + 1) / totalSteps) * 100;


return (
  <div>
    <BannerComp title="SA-92" image={ImgDigital1} />
    <div className="instrucciones-container1">
      <h3>INSTRUCCIONES:</h3>
      </div>
      <div className="instrucciones-container">
  <p>
    El presente cuestionario tiene como objetivo develar la cultura organizacional asociada a la ética y los valores en las organizaciones.
    Tus respuestas son totalmente anónimas y solo solicitamos datos generales con fines estadísticos. El instrumento <strong>NO</strong> pretende evaluar a nadie en lo personal, por lo que te rogamos respondas con total honestidad.
  </p>
</div>

    <div className="App">
      <div className="progress-bar" style={{ width: `${progressPercentage}%` }}></div>

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
            <option value="db4875a9-1587-46c3-a068-12ba39d19250">ORGANIZACIÓN AXIO</option>
          </select>
        </div>
      )}

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
            <option value="8760b3a5-d269-462d-8aa9-e6a6931e58ab">CA-TEE SISTEMAS</option>
          </select>
        </div>
      )}

      {currentStep === 2 && organizationId && departmentId && (
        <div className="question-container">
          <h3>Selecciona tu género para avanzar</h3>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
            className="organization-select"
          >
            <option value="" disabled>
              Selecciona tu género
            </option>
            <option value="male">Masculino</option>
            <option value="female">Femenino</option>
            <option value="other">Otro</option>
          </select>
        </div>
      )}

      {currentStep === 3 && gender && (
        <div className="question-container">
          <h3>Selecciona tu edad</h3>
          <select
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
            className="organization-select"
          >
            <option value="" disabled>Selecciona tu edad</option>
            <option value="18-25">18 a 25</option>
            <option value="26-30">26 a 30</option>
            <option value="31-50">31 a 50</option>
            <option value="51+">51 o más</option>
          </select>
        </div>
      )}

      {currentStep === 4 && age && (
        <div className="question-container">
          <h3>Selecciona tu nivel de estudios</h3>
          <select
            value={educationLevel}
            onChange={(e) => setEducationLevel(e.target.value)}
            required
            className="organization-select"
          >
            <option value="" disabled>Selecciona tu nivel de estudios</option>
            <option value="primaria">Primaria</option>
            <option value="secundaria">Secundaria</option>
            <option value="preparatoria">Preparatoria</option>
            <option value="superior">Superior</option>
            <option value="maestria">Maestría</option>
            <option value="doctorado">Doctorado</option>
            <option value="postDoctorado">Post doctorado</option>
          </select>
        </div>
      )}

      {currentStep >= 5 && organizationId && departmentId && gender && age && educationLevel && (
        <MultipleChoiceQuestion
          question={randomQuestions[currentStep - 5].question}
          options={randomQuestions[currentStep - 5].options}
          onOptionSelect={handleOptionSelect}
          selectedOption={answers[currentStep - 5]}
          questionIndex={currentStep - 5}
        />
      )}

      <div className="button-container">
        <button onClick={handlePrevious} disabled={currentStep === 0} className="qzbutton">
          Anterior
        </button>

        {currentStep < randomQuestions.length + 4 && (
          <button onClick={handleNext} disabled={answers[currentStep - 5] === null} className="qzbutton">
            Siguiente
          </button>
        )}

        {currentStep === randomQuestions.length + 4 && (
          <button onClick={handleSubmit} disabled={answers[currentStep - 5] === null} className="qzbutton">
            Finalizar
          </button>
          
        )}
      </div>

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
  </div>
);
}

export default Quiz;
