const express = require('express');
const router = express.Router();

const triviaQuestions = [
  { question: "What is the capital of France?", answer: "Paris" },
  { question: "Which planet is known as the Red Planet?", answer: "Mars" },
  { question: "What is the largest mammal in the world?", answer: "Blue whale" },
];

let currentQuestionIndex = 0;
let score = 0;

router.get('/', (req, res) => {
  if (currentQuestionIndex >= triviaQuestions.length) {
    return res.redirect('/quiz/score');
  }

  const question = triviaQuestions[currentQuestionIndex].question;
  res.json({
    message: `Question ${currentQuestionIndex + 1}`,
    question: question
  });
});

router.post('/', (req, res) => {
  const userAnswer = req.body.answer;
  const correctAnswer = triviaQuestions[currentQuestionIndex].answer;

  let isCorrect = false;
  if (userAnswer && userAnswer.trim().toLowerCase() === correctAnswer.toLowerCase()) {
    score++;
    isCorrect = true;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex >= triviaQuestions.length) {
    return res.json({
      message: isCorrect ? "Correct! " : `Wrong . Correct answer was: ${correctAnswer}`,
      quizEnded: true,
      redirect: "/quiz/score"
    });
  }

  res.json({
    message: isCorrect ? "Correct! " : `Wrong . Correct answer was: ${correctAnswer}`,
    nextQuestionUrl: "/quiz"
  });
});

router.get('/score', (req, res) => {
  const finalScore = score;
  const totalQuestions = triviaQuestions.length;

  score = 0;
  currentQuestionIndex = 0;

  res.json({
    message: "Quiz finished! ",
    score: `${finalScore} / ${totalQuestions}`
  });
});

module.exports = router;
