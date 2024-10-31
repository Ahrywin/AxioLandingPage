import React, { useState } from 'react';
import MultipleChoiceQuestion from '../Components/MultipleChoiceQuestion/MultipleChoiceQuestion';
import './quiz.css';
import ImgDigital1 from '../assets/images/eco.jpg';

import BannerComp from '../Components/BannerComp/BannerComp'
import Footer from '../Footer'
function Quiz() {
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
    },
    {
      question: 'La toma de decisiones es un asunto personal y no se requiere el consejo de nadie.',
      value: 3, // Value for this question
      options: [
        { value: 0, label: 'Indiferente' },
        { value: 2, label: 'Totalmente en desacuerdo' },
        { value: 1, label: 'En desacuerdo' },
        { value: -1, label: 'De acuerdo' },
        { value: -2, label: 'Totalmente de acuerdo' }
      ]
    },
    {
      question: 'No me interesa el consejo de otras personas, porque nadie conoce la realidad que vivo mejor que yo.',
      value: 4, // Value for this question
      options: [
        { value: 0, label: 'Indiferente' },
        { value: 2, label: 'Totalmente en desacuerdo' },
        { value: 1, label: 'En desacuerdo' },
        { value: -1, label: 'De acuerdo' },
        { value: -2, label: 'Totalmente de acuerdo' }
      ]
    },
    //juicio
    {
      question: 'No me interesa el consejo de otras personas, porque nadie conoce la realidad que vivo mejor que yo.',
      value: 5, // Value for this question
      options: [
        { value: 0, label: 'Indiferente' },
        { value: -2, label: 'Totalmente en desacuerdo' },
        { value: -1, label: 'En desacuerdo' },
        { value: 1, label: 'De acuerdo' },
        { value: 2, label: 'Totalmente de acuerdo' }
      ]
    },
    {
      question: 'Me incomoda tener que tomar decisiones sin reflexionar.',
      value: 6, // Value for this question
      options: [
        { value: 0, label: 'Indiferente' },
        { value: -2, label: 'Totalmente en desacuerdo' },
        { value: -1, label: 'En desacuerdo' },
        { value: 1, label: 'De acuerdo' },
        { value: 2, label: 'Totalmente de acuerdo' }
      ]
    },
    {
      question: 'Las mejores decisiones son aquellas que salen del corazón.',
      value: 7, // Value for this question
      options: [
        { value: 0, label: 'Indiferente' },
        { value: 2, label: 'Totalmente en desacuerdo' },
        { value: 1, label: 'En desacuerdo' },
        { value: -1, label: 'De acuerdo' },
        { value: -2, label: 'Totalmente de acuerdo' }
      ]
    } 
  ];


  const [email, setEmail] = useState('');
  const [emailSubmitted, setEmailSubmitted] = useState(false); // Para controlar si se ha ingresado el email
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));

  const handleOptionSelect = (selectedValue) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = selectedValue;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmit = async () => {
    const sectionResults = {}; // Guardará los resultados por categoría

    const results = questions.map((question, index) => {
        const category = getCategory(question.value);
        
        // Inicializa la categoría si no existe en sectionResults
        if (!sectionResults[category]) {
            sectionResults[category] = 0;
        }

        // Suma la respuesta seleccionada a la categoría correspondiente
        if (answers[index] !== null) {
            sectionResults[category] += answers[index];
        }

        return {
            question: question.value,  // Envía el valor de la pregunta
            answer: answers[index],     // Envía el valor de la respuesta seleccionada
            category: category, // Categoría obtenida
        };
    });

    const body = {
        email: email, // Asegúrate de tener el valor del correo electrónico
        answers: results,
        sectionResults: sectionResults // Envía también los resultados por sección
    };

    // Enviar datos al backend
    try {
        const response = await fetch('http://localhost:3001/saveAnswers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body), // Usa el objeto body aquí
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

const getCategory = (questionValue) => {
  for (let i = 0; i < categories.length; i++) {
      if (questionValue <= categories[i].limit) {
          return categories[i].name;
      }
  }
  return "desconocido"; // Valor por defecto si el rango es mayor que 90
};

  

  // Progreso de la barra basado en el email y las preguntas
  const totalSteps = questions.length + 1; // Una para el email
  const progressPercentage = ((currentQuestionIndex + 1 + (emailSubmitted ? 1 : 0)) / totalSteps) * 100;

  return (
    <div>
    <BannerComp title={"Quiz"} image={ImgDigital1}/>
    <div className="App">
        
      <div className="progress-bar" style={{ width: `${progressPercentage}%` }}></div>

      {/* Mostrar el campo de email solo si no se ha ingresado */}
      {!emailSubmitted && (
        <div className="question-container">
          <h3>Ingresa tu correo para avanzar</h3>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            className='ema'
          />
          <br/><br/><br/>
          <button onClick={() => setEmailSubmitted(true)} disabled={!email} className='qzbutton'>
            Seguir
          </button>
        </div>
      )}

      {/* Mostrar preguntas solo si el email ha sido ingresado */}
      {emailSubmitted && (
        <MultipleChoiceQuestion
          question={questions[currentQuestionIndex].question}
          options={questions[currentQuestionIndex].options}
          onOptionSelect={handleOptionSelect}
          selectedOption={answers[currentQuestionIndex]}
          questionIndex={currentQuestionIndex}
        />
      )}

      {emailSubmitted && (
        <div className="button-container">
          <button onClick={handlePrevious} disabled={currentQuestionIndex === 0} className='qzbutton'>
            Anterior
          </button>
          <button onClick={handleNext} disabled={answers[currentQuestionIndex] === null} className='qzbutton'>
            Siguiente
          </button>
          {currentQuestionIndex === questions.length - 1 && (
            <button onClick={handleSubmit} disabled={!email} className='qzbutton'>
              Finalizar
            </button>
          )}
        </div>
      )}
    </div>
    <Footer/>
    </div>
  );
}

export default Quiz;