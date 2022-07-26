// Helper function - gets a random integer up to (but not including) the maximum
const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

// Select the spans & divs where we'll display outputs.
const pointsSpan = document.querySelector("#points");
const scoreSpan = document.querySelector("#score");
const questionDiv = document.querySelector("#question");

// Select the buttons and input fields where users can provide inputs.
const randomButton = document.querySelector("#random");
const hardButton = document.querySelector("#hard");
const catPunsButton = document.querySelector("#catPuns");
const submitButton = document.querySelector("#submit");


// Starting variables - we'll fill replace these with the API
let currentQuestion = '';
let currentAnswer = '';
let currentPoints = 0;
let currentScore = 0;

// Function to update the text on the board to match our variables.
const updateBoard = () => {
  pointsSpan.innerHTML = currentPoints;
  scoreSpan.innerHTML = currentScore;
  // Update the question too.
  questionDiv.innerHTML = currentQuestion;

};



// Generate the table!


















// Question handlers
const getRandomQuestion = async () => {
  const response = await fetch("https://jeopardy.wang-lu.com/api/random?count=1");
  const data = await response.json();
  // console.log(data)


  currentQuestion = data[0].question;
  currentPoints = data[0].value;
  currentAnswer = data[0].answer;
  updateBoard();
};
randomButton.addEventListener("click", getRandomQuestion);

const getHardQuestion = async () => {
  const response = await fetch("https://jeopardy.wang-lu.com/api/clues");
  const data = await response.json();
  const i = getRandomInt(data.length);
  // console.log(data[i]);
  currentQuestion = data[i].question;
  currentPoints = data[i].value;
  currentAnswer = data[i].answer;
  updateBoard();
};
hardButton.addEventListener("click", getHardQuestion);

const getCatQuestion = async () => {
  const response = await fetch("https://jeopardy.wang-lu.com/api/clues?category=6");
  const data = await response.json();
  const i = getRandomInt(data.length);
  // console.log(data[i]);
  currentQuestion = data[i].question;
  currentPoints = data[i].value;
  currentAnswer = data[i].answer;
  updateBoard();
};
catPunsButton.addEventListener("click", getCatQuestion);
// End question handling



// Styling and card-flipping
// UX
const cards = document.querySelectorAll(".flip-card")

cards.forEach((a_card) => {



  // Finish this function that checks the user's answer.
  const checkAnswer = () => {

    let response = answerInputBox.value;
    answerInputBox.value = '';
    console.log("You guessed:", response);
    console.log("Correct answer:", currentAnswer);

    if (response == currentAnswer)
    {
      currentScore += currentPoints
    }
    else
    {
      currentScore -= currentPoints
    }
    updateBoard();
  };




  const inner = a_card.querySelector("#rotate-card")
  const answerInputBox = a_card.querySelector("#userAnswer");

  a_card.addEventListener("click", (e) => {
    inner.classList.toggle("flip-card-inner")
    inner.classList.toggle("back-flip-card-inner")
  })

  answerInputBox.addEventListener("click", (e) => {
    inner.classList.toggle("flip-card-inner")
    inner.classList.toggle("back-flip-card-inner")
  })
  submitButton.addEventListener("click", checkAnswer)
  answerInputBox.addEventListener("keypress", (e) => {

    if (e.key === "Enter") {
      submitButton.click();
    }

  })

})













