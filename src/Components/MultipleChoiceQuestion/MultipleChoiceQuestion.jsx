import React from 'react';

function MultipleChoiceQuestion({ question, options, onOptionSelect, selectedOption, questionIndex }) {
  return (
    <div className='question-container'>
      <div className="question-card">
        <h2 id={`question-${questionIndex}`}>{question}</h2> {/* Unique ID for the question */}
        {options.map((option, index) => {
          const optionIndex = `${questionIndex}-${index}`; // Create a unique index for each option

          return (
            <div key={optionIndex} className='divinpt' onClick={() => onOptionSelect(option.value)}> {/* Use option.value */}
                
              <input 
                type="radio"
                name={`option-${questionIndex}`} // Unique name for each group
                value={option.value} // Set the value to the option value
                checked={selectedOption === option.value}
                onChange={() => onOptionSelect(option.value)} // Handle selection
                id={`option-${optionIndex}`} // Unique ID for the option
                
              />
              <label htmlFor={`option-${optionIndex}`} className='inputst'>{option.label}</label> {/* Link label to input */}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MultipleChoiceQuestion;
