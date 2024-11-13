import React from 'react';

function QuizProgress({ elapsedTime }) {
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <div className="quiz-progress">
      <h3>Tiempo transcurrido: {formatTime(elapsedTime)}</h3>
    </div>
  );
}

export default QuizProgress;
