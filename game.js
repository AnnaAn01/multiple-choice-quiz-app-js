const question = document.querySelector("#question");
const choices = Array.from(document.querySelectorAll(".choice-text"));
const progressText = document.querySelector("#progressText");
const scoreText = document.querySelector("#score");
const progressBarFull = document.querySelector("#progressBarFull");

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
  {
    question: "The tallest building in the world is located in whicj city? ",
    choice1: "Dubai",
    choice2: "New York",
    choice3: "Shanghai",
    choice4: "None of the above",
    answer: 1,
  },
  {
    question: "What is 2 + 2?",
    choice1: "2",
    choice2: "3",
    choice3: "4",
    choice4: "1",
    answer: 2,
  },
  {
    question: "What is 2 + 2?",
    choice1: "2",
    choice2: "3",
    choice3: "4",
    choice4: "1",
    answer: 2,
  },
  {
    question: "What is 2 + 2?",
    choice1: "2",
    choice2: "3",
    choice3: "4",
    choice4: "1",
    answer: 2,
  },
];

const SCORE_POINTS = 100;
const MAX_QUESTIONS = 4;

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  getNewQuestion();
};

getNewQuestion = () => {
  if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
    localStorage.setItem("mostRecentScore", score);
    return window.location.assign("/end.html");
  }

  questionCounter++;
  progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`;
};
