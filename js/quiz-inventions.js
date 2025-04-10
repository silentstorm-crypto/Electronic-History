let score = 0;
let currentQuestion = 1;

function checkAnswer(selected) {
  const correctAnswers = {
    1: 'Alexander Graham Bell',
    2: '1879',
    3: 'Michael Faraday',
    4: 'Guglielmo Marconi',
    5: 'Tim Berners-Lee'
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
    { question: "Who invented the first practical telephone?", options: ['Alexander Graham Bell', 'Thomas Edison', 'Nikola Tesla', 'Guglielmo Marconi'] },
    { question: "What year was the first electric light bulb demonstrated?", options: ['1879', '1901', '1800', '1845'] },
    { question: "Who discovered electromagnetic induction?", options: ['Michael Faraday', 'Thomas Edison', 'Nikola Tesla', 'James Clerk Maxwell'] },
    { question: "Who is known as the father of radio?", options: ['Guglielmo Marconi', 'Nikola Tesla', 'Thomas Edison', 'Alexander Graham Bell'] },
    { question: "Who invented the World Wide Web?", options: ['Tim Berners-Lee', 'Bill Gates', 'Steve Jobs', 'Alan Turing'] }
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
