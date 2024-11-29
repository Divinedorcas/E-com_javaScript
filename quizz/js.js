// Quiz questions and answers
const quiz = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Rome"],
      answer: 0
    },
    {
      question: "Which planet is largest in our solar system?",
      options: ["Earth", "Saturn", "Jupiter", "Uranus"],
      answer: 2
    },
    {
      question: "Who painted the Mona Lisa?",
      options: ["Leonardo da Vinci", "Michelangelo", "Raphael", "Caravaggio"],
      answer: 0
  }
];

// Initialize score and current question
let score = 0;
let currentQuestion = 0;

// Display first question
document.getElementById("question").innerHTML = quiz[currentQuestion].question;
document.getElementById("options").innerHTML = quiz[currentQuestion].options.map((option, index) => `<button onclick="checkAnswer(${index})">${option}</button>`).join(" ");

// Check answer function
function checkAnswer(answer) {
  if (answer === quiz[currentQuestion].answer) {
    score++;
    alert("Correct!");
} else {
  alert("Incorrect.");
}

// Move to next question
currentQuestion++;

// Check if quiz is finished
if (currentQuestion >= quiz.length) {
  document.getElementById("question").innerHTML = `Quiz finished! Your score is ${score} out of ${quiz.length}.`;
  document.getElementById("options").innerHTML = "";
} else {
  document.getElementById("question").innerHTML = quiz[currentQuestion].question;
  document.getElementById("options").innerHTML = quiz[currentQuestion].options.map((option, index) => `<button onclick="checkAnswer(${index})">${option}</button>`).join(" ");
}
}

  