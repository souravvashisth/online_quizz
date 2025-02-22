
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { mockQuizzes } from '../mockData/mockData';

const Dashboard = ({ userRole }) => {
  const navigate = useNavigate();

  // Mock quizzes data
  const quizzes = [
    { id: 1, title: 'General Knowledge Quiz', status: 'Start' },
    { id: 2, title: 'Programming Quiz', status: 'Resume' },
  ];

  // Mock participants data (for Admin)
  const participants = [
    { id: 1, name: 'User 1', score: 8, status: 'Completed' },
    { id: 2, name: 'User 2', score: 5, status: 'In-Progress' },
  ];

  return (
    <div>
      <h1>Dashboard</h1>
      {userRole === 'admin' ? (
        // Admin Dashboard
        <div>
          <button onClick={() => navigate('/create-quiz')}>Create Quiz</button>
          <h2>Quizzes</h2>
          <ul>
            {quizzes.map((quiz) => (
              <li key={quiz.id}>
                {quiz.title} - {quiz.status}
                <button onClick={() => navigate(`/quiz/${quiz.id}/participants`)}>
                  View Participants
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        // User Dashboard
        <div>
          <h2>Your Quizzes</h2>
          <ul>
            {quizzes.map((quiz) => (
              <li key={quiz.id}>
                {quiz.title} - {quiz.status}
                <button onClick={() => navigate(`/quiz/${quiz.id}`)}>
                  {quiz.status === 'Start' ? 'Start' : 'Resume'}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dashboard;