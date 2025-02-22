import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Quiz from './pages/Quiz';
import Score from './pages/Score';
import CreateQuiz from './pages/CreateQuiz';

const App = () => {
  const userRole = 'user'; // Change to 'admin' for Admin Dashboard

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard"
          element={<Dashboard userRole={userRole} />}
        />
        <Route path="/quiz/:quizId" element={<Quiz />} />
        <Route path="/quiz/:quizId/score" element={<Score />} />
        <Route path="/create-quiz" element={<CreateQuiz />} />
      </Routes>
    </Router>
  );
};

export default App;