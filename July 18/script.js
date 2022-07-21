const a = document.querySelector("#console-sim")

const while_loop = document.querySelector("#while")
const for_loop = document.querySelector("#for")
const for_loop_no_break = document.querySelector("#for-no-break")


let str_html = ""
let our_secret_number = 0;


while_loop.addEventListener("click",(e) => {
    our_secret_number = prompt("What is your number?")
    if (isNaN(our_secret_number) || our_secret_number == "")
    {
        a.innerHTML = "NaN"
    }
    else
    {
        // no break implementation
        let guess = -10
        a.innerHTML = ""
        while (guess != our_secret_number)
        {
            a.innerHTML += guess + " is not your number!" + "<br>"
            guess++
        }
        a.innerHTML += "I win (because) I successfully left the loop. Your number is: " + guess + "<br>"
    }
})


for_loop_no_break.addEventListener("click",(e) => {
    str_html = ""
    our_secret_number = prompt("What is your number?");
    for (let guess = -10; guess <= our_secret_number; guess++)
    {
        str_html += guess + " is not your number!" + "<br>"
        if (guess==our_secret_number)
        {
            str_html += "I win, I have left the loop. Your number is: " + guess + "<br>"
        }
    }

    a.innerHTML = str_html
})



for_loop.addEventListener("click",(e) => {
    str_html = ""
    our_secret_number = prompt("What is your number?");
    // break implementation\
    let lower_bound = parseInt(prompt("Lower bound?"))
    let upper_bound = parseInt(prompt("Upper bound?"))
    for (let guess = lower_bound; guess < upper_bound; guess++)
    {

        if (guess == our_secret_number) // If the computer wins
        {
            str_html += "I win, I leave the loop. Your number is: " + guess + "<br>"
            a.innerHTML = str_html
            alert("I win, I have left the loop. Your number is: " + guess)
            break;
        }
        else // If the computer does not win
        {
            str_html += guess + " is not your number!" + "<br>"
        }
    }

})
