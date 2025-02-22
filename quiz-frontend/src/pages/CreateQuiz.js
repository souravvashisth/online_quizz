import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateQuiz = () => {
  const [title, setTitle] = useState('');
  const [numQuestions, setNumQuestions] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [duration, setDuration] = useState(0);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit quiz data to the backend (you can add API call here)
    console.log({ title, numQuestions, totalScore, duration });
    navigate('/dashboard'); // Redirect to Dashboard after creation
  };

  return (
    <div>
      <h1>Create Quiz</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Quiz Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="number"
          placeholder="Number of Questions"
          value={numQuestions}
          onChange={(e) => setNumQuestions(e.target.value)}
        />
        <input
          type="number"
          placeholder="Total Score"
          value={totalScore}
          onChange={(e) => setTotalScore(e.target.value)}
        />
        <input
          type="number"
          placeholder="Duration (in minutes)"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
        <button type="submit">Create Quiz</button>
      </form>
    </div>
  );
};

export default CreateQuiz;