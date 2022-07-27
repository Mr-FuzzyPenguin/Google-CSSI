// Helper function - gets a random integer up to (but not including) the maximum
const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};


// Define constants
const scoreSpan = document.querySelector("#score");
const tablerow = document.querySelector("#table-row")
const pointArray = [100, 200, 300, 400, 1000]
const categoryArray = [17, 9, 19, 29, 499]
let currentPoints = 0;


// Generate the grid in HTML using JS!
let temp_arr = [];
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
// End HTML grid generation


// Initialize double array with questions
let question_array = [[],[],[],[],[]]
const getQuestion = async (value,category) => {
  const response = await fetch("https://jeopardy.wang-lu.com/api/clues?value="+pointArray[value]+"&category="+categoryArray[category]);
  const data = await response.json();
  const i = getRandomInt(data.length);
  const question = data[i].question;

  // Populate the double array
  question_array[category][value] = data[i];
  console.log(question_array);
  // Fill the selected card with the question
  let selected_card = document.getElementById(value+'-'+category).innerHTML;
  document.getElementById(category+'-'+value).innerHTML = question;

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

  function flipAll()
  {
    // Flip all cards back
    cards.forEach((a_card) => {
      const otherFlip = a_card.querySelector("#rotate-card");

      otherFlip.classList.add("flip-card-inner")
      otherFlip.classList.remove("back-flip-card-inner")
    })
  }

  a_card.addEventListener("click", (e) => {

    // If you're toggling a different card that isn't flipped, flip all cards back...
    if (inner.classList == "flip-card-inner")
    {
      flipAll()
    }
    // And maintain the current card
    inner.classList.toggle("flip-card-inner")
    inner.classList.toggle("back-flip-card-inner")
  })

  //   Freezes the flipping
  function freeze_back()
  {
    inner.classList.add("flip-card-inner")
    inner.classList.remove("back-flip-card-inner")
  }

  // Check answer against array if it matches response
  function check_answer()
  {
    // select from 2d array
    const indexOfArray = a_card.querySelector(".question-here").id.split('-')
    const selectFromArray = question_array[indexOfArray[0]][indexOfArray[1]]

    // Find the point value of the question
    let pointVal = a_card.querySelector("#points").innerHTML

    // Potentially alter correct_answer if it has "filler" words. I tried to add the medium challenge
    let correct_answer = selectFromArray.answer.toLowerCase()
    if (["a","the","an"].includes(correct_answer.split(' ')[0]))
    {
      correct_answer = correct_answer.split(' ').splice(1,correct_answer.length).join(' ')
      console.log(correct_answer)
    }


    // Check answer
    if (answerInputBox.value.toLowerCase() == correct_answer)
    {
      currentPoints += parseInt(pointVal)
    }
    else
    {
      currentPoints -= parseInt(pointVal)
      alert(`You guessed, \n[${answerInputBox.value}]\nThe correct answer is \n[${correct_answer}]`)
    }

    // The points are set to 0 after you answer the question
    a_card.querySelector("#points").innerHTML = 0
    scoreSpan.innerHTML = currentPoints

    // Clear the field at the end of every attempt!
    answerInputBox.value = '';
  }

  // SUBMITS
  answerInputBox.addEventListener("click", freeze_back)
  answerInputBox.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      submitButton.click();
    }
  })

  // Submit button is triggered. Either by click, or enter keypress
  submitButton.addEventListener("click", check_answer)

})













