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
  const [isMaintenanceMode, setIsMaintenanceMode] = useState(false);
  const [quizData, setQuizData] = useState([]); // Datos de organizaciones y departamentos
  const [departments, setDepartments] = useState([]); // Departamentos filtrados

  if (isMaintenanceMode) {
    return <MaintenancePage />;
  }

  const {
    organizationId, setOrganizationId,
    departamentId, setDepartmentId,
    gener, setGener,
    age, setAge,
    educationLevel, setEducationLevel,
    currentStep,
    answers, alerts,
    showAlert, closeAlert,
    handleOptionSelect,
    handleNext, handlePrevious,
    handleSubmit,
    randomQuestions,
    elapsedTime,
    progressPercentage,
  } = useQuizService();

  const [showFinish, setShowFinish] = useState(false);

  const handleFinishClick = async () => {
    const success = await handleSubmit();
    if (success) {
      setShowFinish(true);
    }
  };

  useEffect(() => {
    const fetchQuizData = async () => {
      try {
        const response = await fetch('https://axiobk-001-site1.ktempurl.com/api/Quiz/GetQuizActive');
        const data = await response.json();

        if (data.Content && Array.isArray(data.Content) && data.Content.length > 0) {
          setQuizData(data.Content);
        } else {
          setIsMaintenanceMode(true);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsMaintenanceMode(true);
      }
    };
    fetchQuizData();
  }, []);

  if (isMaintenanceMode) {
    return <MaintenancePage />;
  }

  // Función para centralizar las condiciones de habilitación del botón
  const isNextDisabled = () => {
    if (currentStep === 0) return !organizationId;
    if (currentStep === 1) return !departamentId;
    if (currentStep === 2) return !gener;
    if (currentStep === 3) return !age;
    if (currentStep === 4) return !educationLevel;
    if (currentStep >= 5 && currentStep < randomQuestions.length + 5)
      return answers[currentStep - 5] === null;
    return false;
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

        {/* Preguntas iniciales */}
        {currentStep === 0 && (
          <div className="question-container">
            <h3>Selecciona una organización para avanzar</h3>
            <select
              value={organizationId}
              onChange={(e) => {
                setOrganizationId(e.target.value);
                const selectedDepartments = quizData
                  .filter(item => item.OrganizationID === e.target.value)
                  .map(item => ({ id: item.DepartamentID, name: item.DepartamentName }));
                setDepartments(selectedDepartments);
                if (e.target.value) handleNext();
              }}
              required
              className="organization-select"
            >
              <option value="" disabled>Selecciona una organización</option>
              {quizData.map((item) => (
                <option key={item.OrganizationID} value={item.OrganizationID}>
                  {item.OrganizationName}
                </option>
              ))}
            </select>
          </div>
        )}

        {currentStep === 1 && organizationId && (
          <div className="question-container">
            <h3>Selecciona un departamento para avanzar</h3>
            <select
              value={departamentId}
              onChange={(e) => {
                setDepartmentId(e.target.value);
                if (e.target.value) handleNext();
              }}
              required
              className="organization-select"
            >
              <option value="" disabled>Selecciona un departamento</option>
              {departments.map((dept) => (
                <option key={dept.id} value={dept.id}>
                  {dept.name}
                </option>
              ))}
            </select>
          </div>
        )}

        {currentStep === 2 && organizationId && departamentId && (
          <div className="question-container">
            <h3>Selecciona tu género para avanzar</h3>
            <select
              value={gener}
              onChange={(e) => {
                setGener(e.target.value);
                if (e.target.value) handleNext();
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
                if (e.target.value) handleNext();
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
                if (e.target.value) handleNext();
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

        {/* Preguntas del quiz */}
        {currentStep >= 5 && currentStep < randomQuestions.length + 5 && (
          <MultipleChoiceQuestion
            question={randomQuestions[currentStep - 5].question}
            options={randomQuestions[currentStep - 5].options}
            onOptionSelect={handleOptionSelect}
            selectedOption={answers[currentStep - 5]}
            questionIndex={currentStep - 5}
          />
        )}

        {/* Botones de navegación */}
        <div className="button-container">
          <button onClick={handlePrevious} disabled={currentStep === 0} className="qzbutton">
            Anterior
          </button>

          {currentStep < randomQuestions.length + 4 ? (
            <button
              onClick={handleNext}
              disabled={isNextDisabled()}
              className="qzbutton"
            >
              Siguiente
            </button>
          ) : (
            <button
              onClick={handleFinishClick}
              disabled={answers[currentStep - 5] === null}
              className="qzbutton"
            >
              Finalizar
            </button>
          )}

          {showFinish && (
            <Finish
              onClose={() => setShowFinish(false)}
              departamentId={departamentId} // Pasamos el departamentId seleccionado
              organizationId={organizationId} // Pasamos el organizationId seleccionado
              quizData={quizData} // Pasamos todos los datos para referencia
            />
          )}
        </div>

        {/* Alertas */}
        <div className="alert-container">
          {alerts.map((alert) => (
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
