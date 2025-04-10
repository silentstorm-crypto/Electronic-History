let score = 0;
let currentQuestion = 1;

function checkAnswer(selected) {
  const correctAnswers = {
    1: 'AC Electricity',
    2: 'Thomas Edison',
    3: 'Nikola Tesla',
    4: 'James Clerk Maxwell',
    5: 'Alan Turing'
  };

  if (selected === correctAnswers[currentQuestion]) {
    score++;
  }

  if (currentQuestion < 5) {
    document.getElementById("next-button").classList.remove("hidden");
  } else {
    document.getElementById("quiz-result").classList.remove("hidden");
    document.getElementById("result-link").href = `quiz-results.html?score=${score}`;
  }
}

function nextQuestion() {
  currentQuestion++;
  const questions = [
    { question: "Nikola Tesla is best known for what?", options: ['AC Electricity', 'DC Motor', 'Battery', 'Microchip'] },
    { question: "Who invented the first practical electric light bulb?", options: ['Thomas Edison', 'Nikola Tesla', 'Michael Faraday', 'Alexander Graham Bell'] },
    { question: "Who is credited with the invention of the radio?", options: ['Guglielmo Marconi', 'Nikola Tesla', 'James Clerk Maxwell', 'Alan Turing'] },
    { question: "Who proposed the theory of electromagnetism?", options: ['James Clerk Maxwell', 'Isaac Newton', 'Michael Faraday', 'Galileo Galilei'] },
    { question: "Who is considered the father of modern computing?", options: ['Alan Turing', 'Charles Babbage', 'John von Neumann', 'Ada Lovelace'] }
  ];

  if (currentQuestion <= 5) {
    document.getElementById("quiz-area").innerHTML = `
      <h2>Question ${currentQuestion}</h2>
      <p>${questions[currentQuestion - 1].question}</p>
      ${questions[currentQuestion - 1].options.map(option => `<button onclick="checkAnswer('${option}')">${option}</button>`).join('')}
    `;
  }

  document.getElementById("next-button").classList.add("hidden");
}
