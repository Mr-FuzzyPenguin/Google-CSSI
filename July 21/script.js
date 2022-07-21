// Script running debugging
// console.log("script running");

// Iterate through sections of questions
const type_of_questions = ["color", "vacation", "pizza", "house", "fruit", "activity"];

// Select all Card images
const pictures = document.querySelectorAll(".card-image");

// Reset button to continue playing
const reset_button = document.querySelector("#reset")

// Quiz values (linked with quizTaker)
const quizValues = {
  "color": ["logical", "creative", "logical", "creative"],
  "vacation": ["extrovert", "introvert", "extrovert", "introvert"],
  "pizza": ["creative", "logical", "creative", "logical"],
  "house": ["introvert", "extrovert", "introvert", "extrovert"],
  "fruit": ["logical", "creative", "logical", "creative"],
  "activity": ["extrovert", "introvert", "extrovert", "introvert"]
};

// Gives the results of the quiz here.
let quizTaker = {
  logical: 0,
  creative: 0,
  extrovert: 0,
  introvert: 0,
};

// Returns the array in [str,num] format
// Takes the HTML picture object
function re_organize_arrays(a_picture)
{
  let an_array = a_picture.id.split('-')
  return [an_array[0], parseInt(an_array[1])]
}

// Takes the integer sum of an array
function sum(f)
{
  return f.reduce((a, b) => a + b, 0)
}

// Toggles clickable. After 6 buttons are selected, disable clickable
// else, add them again (after reset button is clicked)
function changeClickableState(add)
{
  // Search for all pictures
  for (element of pictures)
  {
    // Adding or removing clickable class
    if (add)
    {
      element.classList.add("clickable")
    }
    else
    {
      element.classList.remove("clickable")
    }
  }
}

// For each each of the pictures, iterate through using picture
pictures.forEach((picture) => {

  // RESET BUTTON!
  reset_button.addEventListener("click", (e) => {

    // Hides the one and only section by making the section have hidden. Replaces the entire class of has-background-warning
    document.querySelector("#results").innerHTML = document.querySelector("#results").innerHTML.replace('class="section"','class="section hidden"');
    picture.classList.remove("has-background-warning")

    // Clears the number of questions answered
    for (key of Object.keys(quizTaker))
    {
      quizTaker[key] = 0
    }

    // Reset button pressed, add clickable again.
    changeClickableState(true)
  })


  // For each picture, add a click event
  picture.addEventListener("click", (e) => {

    // The person has not selected an answer for each question
    if (sum(Object.values(quizTaker)) != 6)
    {
      // Types of questions:
      for (question of type_of_questions)
      {
        // If the current selected picture has a certain question type...
        if (picture.classList.contains("question-"+question))
        {
          // Find the group mates of those questions
          let a_question = document.querySelectorAll(".question-"+question)
          a_question.forEach((question_groupmate) => {

            // Find which previous group mate was activated, and disable the color
            // Also decrease the associated quizTaker value by 1.
            if (question_groupmate.classList.contains("has-background-warning"))
            {
              // Remove has background warning from groupmates
              question_groupmate.classList.remove("has-background-warning")
              let picture_array = re_organize_arrays(question_groupmate)

              // Remove 1 to the quizTaker associated
              quizTaker[quizValues[picture_array[0]][picture_array[1]]]--

              // Debugging:
              // console.log("removing:",picture_array)
            }

          })

          // Add yellow to the selected picture. (After automatically de-selecting the others)
          picture.classList.add("has-background-warning")
        }
      }

      // When clicked: Assign an array
      picture_array = re_organize_arrays(picture)

      // Add 1 to the quizTaker associated.
      quizTaker[quizValues[picture_array[0]][picture_array[1]]]++

      // Debugging, making sure that picture array and quizTaker works as expected.
      // console.log(picture_array)
      // console.log(quizTaker)
    }

    // Things could have changed (from above) else case should not be used!
    // Value must be recalculated, because the function is ran every time a pictuer is clicked.
    if (sum(Object.values(quizTaker)) == 6)
    {

      // You can no longer select the images, because you've already selected 6
      changeClickableState(false)

      // Check the results of the test
      let resultID;

      // Start with logical or creative
      if (quizTaker.logical > quizTaker.creative) {
        resultID = "#logical-";
      } else {
        resultID = "#creative-";
      }

      // End with introvert or extrovert
      if (quizTaker.introvert > quizTaker.extrovert) {
        resultID += "introvert";
      } else {
        resultID += "extrovert";
      }

      // Find the result, and unhide
      let result = document.querySelector(resultID);
      result.classList.remove("hidden");

      // Debugging: Print out the result.
      // console.log(result);
    }
  })

})

