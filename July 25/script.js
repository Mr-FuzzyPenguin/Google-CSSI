// Helper function - gets a random integer up to (but not including) the maximum
const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

// Select the spans & divs where we'll display outputs.
const scoreSpan = document.querySelector("#score");
const questionDiv = document.querySelector("#question");

const pointArray = [100, 200, 300, 400, 1000]
const categoryArray = [17, 9, 19, 29, 499]
let currentPoints = 0;


let temp_arr = [];
// Generate the table!
const tablerow = document.querySelector("#table-row")
for (let i=0; i<5; i++)
{
  temp_arr.push(tablerow.innerHTML.replace(`id=""`,`id="`+i+`-"`));
}
tablerow.innerHTML = temp_arr.join('');

temp_arr = [];
for (let i=0; i<5; i++)
{
  temp_arr.push(tablerow.outerHTML.replaceAll("[X00]",pointArray[i]).replaceAll("-\"",'-'+i+'"'));
}
tablerow.outerHTML = temp_arr.join('');

// Delete var https://www.tutorialspoint.com/how-to-unset-a-javascript-variable
temp_arr = undefined;
delete(temp_arr);

// let a=[
// [1,  2,3,4,5],
// [6,  7, 8, 9, 10],
// [11, 12, 13, 14, 15],
// [16, 17, 18, 19, 20],
// [21, 22, 23, 24, 25],
// ]

let question_array = [[],[],[],[],[]]
const getQuestion = async (value,category) => {
  const response = await fetch("https://jeopardy.wang-lu.com/api/clues?value="+pointArray[value]+"&category="+categoryArray[category]);
  const data = await response.json();
  const i = getRandomInt(data.length);
  const question = data[i].question;

  // Populate the double array
  question_array[value][category] = data[i];
  console.log(question_array);
//   Populate the cards
  let selected_card = document.getElementById(value+'-'+category).innerHTML;
  document.getElementById(value+'-'+category).innerHTML = question;

// For debugging purposes, because I don't want data that yields undefined
//   if (data[i]===undefined)
//   {
//     console.log(value,category,"yields undefined")
//   }
};

let received_questions = [];
for (let c=0; c<5; c++) {
  for (let v=0; v<5; v++)
  {
    getQuestion(v,c);
  }
}


// Styling and card-flipping
// UX
const cards = document.querySelectorAll(".flip-card")

cards.forEach((a_card) => {

  const submitButton = a_card.querySelector("#submit")

  const inner = a_card.querySelector("#rotate-card")
  const answerInputBox = a_card.querySelector("#userAnswer");

  a_card.addEventListener("click", (e) => {
    inner.classList.toggle("flip-card-inner")
    inner.classList.toggle("back-flip-card-inner")
  })


  function freeze_back()
  {
    inner.classList.add("flip-card-inner")
    inner.classList.remove("back-flip-card-inner")
  }

  function check_answer()
  {
    //     select from 2d array
    let indexOfArray = a_card.querySelector(".question-here").id.split('-')
    const selectFromArray = question_array[indexOfArray[0]][indexOfArray[1]]

//     console.log(answerInputBox.value.toLowerCase(), '\n', selectFromArray.answer.toLowerCase())

    let pointVal = a_card.querySelector("#points").innerHTML
    let correct_answer = selectFromArray.answer.toLowerCase()


    if (["a","the","an"].includes(correct_answer.split(' ')[0]))
    {
      correct_answer = correct_answer.split(' ').splice(1,correct_answer.length)
    }

    if (answerInputBox.value.toLowerCase() == correct_answer)
    {
      currentPoints += parseInt(pointVal)
    }
    else
    {
      currentPoints -= parseInt(pointVal)
      alert(`You guessed, \n[${answerInputBox.value}]\nThe correct answer is \n[${correct_answer}]`)
    }

    a_card.querySelector("#points").innerHTML = 0
    scoreSpan.innerHTML = currentPoints
    answerInputBox.value = '';

  }

  // SUBMITS
  answerInputBox.addEventListener("click", freeze_back)
  answerInputBox.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      submitButton.click();
    }
  })

//   Submit button is triggered. Either by click, or enter keypress
  submitButton.addEventListener("click", check_answer)

})













