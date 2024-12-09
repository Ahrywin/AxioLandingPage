import React, { useEffect, useState } from "react";
import { useQuizService } from "../Components/MultipleChoiceQuestion/quizService";
import MultipleChoiceQuestion from "../Components/MultipleChoiceQuestion/MultipleChoiceQuestion";
import BannerComp from "../Components/BannerComp/BannerComp";
import QuizProgress from "../Components/MultipleChoiceQuestion/QuizProgres";
import Finish from "../pages/finish";
import "./quiz.css";
import { Helmet } from "react-helmet";
import ImgDigital1 from "../assets/images/eco.jpg";
import Maintenance from "../Components/Mantenimiento/mantenimiento";
import Wait from "../Components/Mantenimiento/Loading";

function Quiz() {
  const [quizData, setQuizData] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [showFinish, setShowFinish] = useState(false);
  const [isFetching, setIsFetching] = useState(true); // Estado de carga
  const [isError, setIsError] = useState(false); // Estado de error

  const {
    organizationId,
    setOrganizationId,
    departamentId,
    setDepartmentId,
    gener,
    setGener,
    age,
    setAge,
    educationLevel,
    setEducationLevel,
    currentStep,
    answers,
    handleOptionSelect,
    handleNext,
    handlePrevious,
    handleSubmit,
    randomQuestions,
    elapsedTime,
    progressPercentage,
  } = useQuizService();

  const handleFinishClick = async () => {
    const success = await handleSubmit();
    if (success) {
      setShowFinish(true);
    }
  };

  useEffect(() => {
    const fetchQuizData = async () => {
      try {
        setIsFetching(true);
        setIsError(false);
    
        const response = await fetch(
          "https://axiobk-001-site1.ktempurl.com/api/Quiz/GetQuizActive"
        );
        if (!response.ok) {
          throw new Error("Error en la respuesta de la API");
        }
    
        const data = await response.json();
        console.log("Fetched data:", data);
    
        // Extract the Content field and verify it's an array
        const quizContent = data.Content;
        if (!Array.isArray(quizContent) || quizContent.length === 0) {
          throw new Error("Content is not a valid array or is empty");
        }
    
        // Set the extracted Content as quizData
        setQuizData(quizContent);
      } catch (error) {
        console.error("Error fetching quiz data:", error);
        setIsError(true);
      } finally {
        setIsFetching(false);
      }
    };

    fetchQuizData();
  }, []);

  // Verificar si está cargando
  if (isFetching) {
    return <Wait />;
  }

  // Verificar si hay un error o datos vacíos
  if (isError || quizData.length === 0) {
    return <Maintenance />;
  }



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
        <meta
          name="description"
          content="Descubre los servicios de la Fundación Axio, incluyendo diagnóstico de cultura de integridad, formación y más."
        />
        <meta
          name="keywords"
          content="Servicios, Fundación Axio, ética, formación, cultura de integridad, desarrollo organizacional"
        />
        <meta name="author" content="Fundación Axio" />
        <link rel="canonical" href="https://tu-sitio-web.com/services" />
      </Helmet>
      <BannerComp title="SA-92" image={ImgDigital1} />
      <div className="instrucciones-container1">
        <h3>INSTRUCCIONES:</h3>
      </div>
      <div className="instrucciones-container">
        <p>
          El presente cuestionario tiene como objetivo develar la cultura organizacional asociada a
          la ética y los valores en las organizaciones. Tus respuestas son totalmente anónimas y
          solo solicitamos datos generales con fines estadísticos. El instrumento <strong>NO</strong>{" "}
          pretende evaluar a nadie en lo personal, por lo que te rogamos respondas con total
          honestidad.
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
                const selectedDepartments = quizData
                  .filter((item) => item.OrganizationID === e.target.value)
                  .map((item) => ({
                    id: item.DepartamentID,
                    name: item.DepartamentName,
                  }));
                setDepartments(selectedDepartments);
                if (e.target.value) handleNext();
              }}
              className="organization-select"
            >
              <option value="" disabled>
                Selecciona una organización
              </option>
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

        {currentStep >= 2 && currentStep < randomQuestions.length + 5 && (
          <MultipleChoiceQuestion
            question={randomQuestions[currentStep - 5]?.question}
            options={randomQuestions[currentStep - 5]?.options}
            onOptionSelect={handleOptionSelect}
            selectedOption={answers[currentStep - 5]}
            questionIndex={currentStep - 5}
          />
        )}

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
            <button onClick={handleFinishClick} className="qzbutton">
              Finalizar
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Quiz;
