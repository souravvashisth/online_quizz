
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { mockQuestions } from '../mockData/mockData';
const Quiz = () => {
  const { quizId } = useParams();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const navigate = useNavigate();

  // Mock questions data
  const questions = [
    {
      id: 1,
      text: 'What is the capital of France?',
      options: ['Berlin', 'Madrid', 'Paris', 'London'],
      correctAnswer: 'Paris',
    },
    {
      id: 2,
      text: 'Which data structure follows FIFO?',
      options: ['Stack', 'Queue', 'Linked List', 'Tree'],
      correctAnswer: 'Queue',
    },
  ];

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleSubmit = () => {
    navigate(`/quiz/${quizId}/score`);
  };

  return (
    <div>
      <h1>Quiz {quizId}</h1>
      <p>{questions[currentQuestion].text}</p>
      {questions[currentQuestion].options.map((option, index) => (
        <div key={index}>
          <input
            type="radio"
            name="option"
            value={option}
            onChange={() => setSelectedOption(option)}
          />
          {option}
        </div>
      ))}
      <button onClick={handleNext}>Next</button>
      {currentQuestion === questions.length - 1 && (
        <button onClick={handleSubmit}>Submit</button>
      )}
    </div>
  );
};

export default Quiz;