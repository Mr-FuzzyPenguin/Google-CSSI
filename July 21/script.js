console.log("script running");

const type_of_questions = ["color", "vacation", "pizza", "house", "fruit", "activity"];
const pictures = document.querySelectorAll(".card-image");
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

// For each each of the pictures, iterate through using picture
pictures.forEach((picture) => {

  // For each picture, add a click event
  picture.addEventListener("click", (e) => {



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
            question_groupmate.classList.remove("has-background-warning")
            let picture_array = re_organize_arrays(question_groupmate)
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

    console.log(picture_array)
    quizTaker[quizValues[picture_array[0]][picture_array[1]]]++
    console.log(quizTaker)


  })
})

/*
// Make every image clickable!
pictures.forEach((picture) => {
  picture.addEventListener("click", (e) => {
    // Save the user's choice in a variable.
    let choice = picture.id.split("-");

    // Change the background yellow
    //picture.classList.toggle("has-background-light");
    //picture.classList.toggle("has-background-warning");

    // Increment the right personality trait
    quizTaker[answer]++;

    // If its the last question, unhide the result.
    if (false) {
      let resultID;

      if (quizTaker.logical > quizTaker.creative) {
        resultID = "#logical-";
      } else {
        resultID = "#creative-";
      }

      if (quizTaker.introvert > quizTaker.extrovert) {
        resultID += "introvert";
      } else {
        resultID += "extrovert";
      }

      let result = document.querySelector(resultID);
      console.log(result);
      result.classList.remove("hidden");
    }
  });
});

*/
