import React, { useEffect, useState } from 'react';
import { useQuizService } from '../Components/MultipleChoiceQuestion/quizService';
import MultipleChoiceQuestion from '../Components/MultipleChoiceQuestion/MultipleChoiceQuestion';
import Alert from '../Components/Alert/Alert';
import './quiz.css';
import ImgDigital1 from '../assets/images/eco.jpg';
import BannerComp from '../Components/BannerComp/BannerComp';
import QuizProgress from '../Components/MultipleChoiceQuestion/QuizProgres';
import Finish from '../pages/finish';
import MaintenancePage from '../Components/Mantenimiento/mantenimiento';
import { Helmet } from 'react-helmet';

function Quiz() {

  const [isMaintenanceMode, setIsMaintenanceMode] = useState(false); // Estado para alternar modo mantenimiento

  if (isMaintenanceMode) {
    return <MaintenancePage />; // Muestra la página de mantenimiento
  }

  
  const {
    organizationId, setOrganizationId,
    departmentId, setDepartmentId,
    gener, setGender,  // Cambiado `gender` a `gener`
    age, setAge,
    educationLevel, setEducationLevel,
    currentStep,
    answers, alerts,
    showAlert, closeAlert,
    handleOptionSelect,
    handleNext, handlePrevious,
    handleSubmit,
    randomQuestions,
    totalSteps,
    elapsedTime,
    progressPercentage,
  } = useQuizService();

  const [showFinish, setShowFinish] = useState(false);  // Fix here: properly define showFinish state

  // Función para manejar el envío del formulario y mostrar el modal solo si el envío fue exitoso
  const handleFinishClick = async () => {
    const success = await handleSubmit();
    if (success) {
      setShowFinish(true);  // Muestra la pantalla de finalización
    }
  };
  
  return (
    <div>
       <Helmet>
        <title>Servicios - Fundación Axio</title>
        <meta name="description" content="Descubre los servicios de la Fundación Axio, incluyendo diagnóstico de cultura de integridad, formación y más." />
        <meta name="keywords" content="Servicios, Fundación Axio, ética, formación, cultura de integridad, desarrollo organizacional" />
        <meta name="author" content="Fundación Axio" />
        <link rel="canonical" href="https://tu-sitio-web.com/services" />
      </Helmet>
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
        <QuizProgress elapsedTime={elapsedTime} />
        <div className="progress-bar" style={{ width: `${progressPercentage}%` }}></div>

        {currentStep === 0 && (
          <div className="question-container">
            <h3>Selecciona una organización para avanzar</h3>
            <select
              value={organizationId}
              onChange={(e) => {
                setOrganizationId(e.target.value);
                if (e.target.value) {
                  handleNext(); // Avanzar automáticamente
                }
              }}
              required
              className="organization-select"
            >
              <option value="" disabled>Selecciona una organización</option>
              <option value="db4875a9-1587-46c3-a068-12ba39d19250">ORGANIZACIÓN AXIO</option>
            </select>
          </div>
        )}

        {currentStep === 1 && organizationId && (
          <div className="question-container">
            <h3>Selecciona un departamento para avanzar</h3>
            <select
              value={departmentId}
              onChange={(e) => {
                setDepartmentId(e.target.value);
                if (e.target.value) {
                  handleNext(); // Avanzar automáticamente
                }
              }}
              required
              className="organization-select"
            >
              <option value="" disabled>Selecciona un departamento</option>
              <option value="8760b3a5-d269-462d-8aa9-e6a6931e58ab">CA-TEE SISTEMAS</option>
            </select>
          </div>
        )}

        {currentStep === 2 && organizationId && departmentId && (
          <div className="question-container">
            <h3>Selecciona tu género para avanzar</h3>
            <select
              value={gener}  // Usar `gener` aquí
              onChange={(e) => {
                setGender(e.target.value);  // Usar `setGender` aquí
                if (e.target.value) {
                  handleNext(); // Avanzar automáticamente
                }
              }}
              required
              className="organization-select"
            >
              <option value="" disabled>Selecciona tu género</option>
              <option value="male">Masculino</option>
              <option value="female">Femenino</option>
              <option value="other">Otro</option>
            </select>
          </div>
        )}

        {currentStep === 3 && gener && (
          <div className="question-container">
            <h3>Selecciona tu edad</h3>
            <select
              value={age}
              onChange={(e) => {
                setAge(e.target.value);
                if (e.target.value) {
                  handleNext(); // Avanzar automáticamente
                }
              }}
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
              onChange={(e) => {
                setEducationLevel(e.target.value);
                if (e.target.value) {
                  handleNext(); // Avanzar automáticamente
                }
              }}
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

        {currentStep >= 5 && organizationId && departmentId && gener && age && educationLevel && (
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
            <button
              onClick={handleFinishClick}  // Llamamos a handleFinishClick en vez de handleSubmit directamente
              disabled={answers[currentStep - 5] === null}
              className="qzbutton"
            >
              Finalizar
            </button>
          )}

          
          {showFinish && <Finish onClose={() => setShowFinish(false)} />}
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
