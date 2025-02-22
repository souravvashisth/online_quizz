export const mockQuizzes = [
    {
      id: 1,
      title: "General Knowledge Quiz",
      totalQuestions: 5,
      totalScore: 10,
      duration: 10, // in minutes
      status: "Start", // Start, Resume, View Score
    },
    {
      id: 2,
      title: "Programming Quiz",
      totalQuestions: 10,
      totalScore: 20,
      duration: 20,
      status: "Resume",
    },
  ];
  
  export const mockQuestions = [
    {
      id: 1,
      quizId: 1,
      questionText: "What is the capital of France?",
      options: [
        { id: 1, optionText: "Berlin", isCorrect: false },
        { id: 2, optionText: "Madrid", isCorrect: false },
        { id: 3, optionText: "Paris", isCorrect: true },
        { id: 4, optionText: "London", isCorrect: false },
      ],
    },
    {
      id: 2,
      quizId: 1,
      questionText: "Which data structure follows FIFO?",
      options: [
        { id: 1, optionText: "Stack", isCorrect: false },
        { id: 2, optionText: "Queue", isCorrect: true },
        { id: 3, optionText: "Linked List", isCorrect: false },
        { id: 4, optionText: "Tree", isCorrect: false },
      ],
    },
  ];
  
  export const mockScore = {
    quizId: 1,
    totalScore: 10,
    userScore: 8,
    responses: [
      {
        questionId: 1,
        selectedOption: 3, // Paris
        isCorrect: true,
      },
      {
        questionId: 2,
        selectedOption: 2, // Queue
        isCorrect: true,
      },
    ],
  };