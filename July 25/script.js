// Helper function - gets a random integer up to (but not including) the maximum
const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

// Select the spans & divs where we'll display outputs.
const pointsSpan = document.querySelector("#points");
const scoreSpan = document.querySelector("#score");
const questionDiv = document.querySelector("#question");

const pointArray = [100, 200, 300, 400, 1000]
const categoryArray = [17, 9, 19, 29, 499]

let currentScore = 0;


let temp_arr = [];
// Generate the table!
const tablerow = document.querySelector("#table-row")
for (let i=0; i<5; i++)
{
  temp_arr.push(tablerow.innerHTML.replace(`id=""`,`id="`+i+`-"`))
}
tablerow.innerHTML = temp_arr.join('')

temp_arr = []
for (let i=0; i<5; i++)
{
  temp_arr.push(tablerow.outerHTML.replaceAll("[X00]",pointArray[i]).replaceAll("-\"",'-'+i+'""'))
}
tablerow.outerHTML = temp_arr.join('')

// Delete var https://www.tutorialspoint.com/how-to-unset-a-javascript-variable
temp_arr = undefined;
delete(temp_arr);




question_array = []

const getQuestion = async (value,category) => {
  const response = await fetch("https://jeopardy.wang-lu.com/api/clues?value=" +value+"&category="+category);
  const data = await response.json();
  const i = getRandomInt(data.length);

  if (response.ok)
  {
    return data[i];
  }
// For debugging purposes, because I don't want data that yields undefined
//   if (data[i]===undefined)
//   {
//     console.log(value,category,"yields undefined")
//   }
};

let received_questions = []
for (let c=0; c<5; c++){
  for (let i=0; i<5; i++)
  {
     received_questions.push(getQuestion(pointArray[i],categoryArray[c]));
  }
}

for (i of received_questions)
{
  console.log(i)
}



// Styling and card-flipping
// UX
const cards = document.querySelectorAll(".flip-card")

cards.forEach((a_card) => {

  const submitButton = a_card.querySelector("#submit")

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
  };




  const inner = a_card.querySelector("#rotate-card")
  const answerInputBox = a_card.querySelector("#userAnswer");

  a_card.addEventListener("click", (e) => {
    inner.classList.toggle("flip-card-inner")
    inner.classList.toggle("back-flip-card-inner")
  })

  answerInputBox.addEventListener("click", (e) => {
    inner.classList.add("flip-card-inner")
    inner.classList.remove("back-flip-card-inner")
  })

  submitButton.addEventListener("click", (e) => {
    inner.classList.add("flip-card-inner")
    inner.classList.remove("back-flip-card-inner")
  })

  answerInputBox.addEventListener("keypress", (e) => {

    if (e.key === "Enter") {
      submitButton.click();
    }

  })

})













