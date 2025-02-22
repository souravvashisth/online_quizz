
import React from 'react';
import { useParams } from 'react-router-dom';
import { mockScore } from '../mockData/mockData';

const Score = () => {
  const { quizId } = useParams();

  // Mock score data
  const score = {
    quizId: quizId,
    totalScore: 10,
    userScore: 8,
    responses: [
      { questionId: 1, selectedOption: 'Paris', isCorrect: true },
      { questionId: 2, selectedOption: 'Queue', isCorrect: true },
    ],
  };

  return (
    <div>
      <h1>Quiz {quizId} Score</h1>
      <p>Total Score: {score.totalScore}</p>
      <p>Your Score: {score.userScore}</p>
      <h2>Responses</h2>
      <ul>
        {score.responses.map((response, index) => (
          <li key={index}>
            Question {response.questionId}:{' '}
            {response.isCorrect ? 'Correct' : 'Incorrect'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Score;