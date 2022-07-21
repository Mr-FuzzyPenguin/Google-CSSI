const dropdown_options = ["Overview", "Modifiers", "Grid", "Form", "Elements", "Components", "Layout"]
const menu1 = document.querySelector("#dropdown-list-1")
let menu_option_buttons = []

// Auto generates the dropdown list for me
let dropdown_1 = ''
for (let i = 0; i<dropdown_options.length; i++)
{
    dropdown_1 += `<a href="#" id="dropdown` + i +`" class="dropdown-item">` + dropdown_options[i] + `</a>`
    menu_option_buttons.push(document.querySelector("#dropdown"+i))
}

alert(menu_option_buttons)
// Adds it to HTML
menu1.innerHTML  = dropdown_1

// Control presses on the dropdown
const dropdown_button_1 = document.querySelector("#dropdown1-button")
const viewable_1 = document.querySelector("#dropdown1-view-tag")
const dropdown_1_text = document.querySelector("#dropdown1-text")

let times_clicked = 0
dropdown_button_1.addEventListener("click",(e) => {
    times_clicked = (times_clicked + 1) % 2
    if (times_clicked)
    {
        viewable_1.classList.add("is-active")
    }
    else
    {
        viewable_1.classList.remove("is-active")
    }
})


/*
alert(dropdown_options)

const dropdown_button_1 = document.querySelector("#dropdown1")
const viewable_1 = document.querySelector("#viewable1")
const dropdown_1_text = document.querySelector("#dropdown1-text")
const test = document.querySelector("#test")



test.addEventListener("click",(e) => {
    times_clicked = (times_clicked + 1) % 2
    viewable_1.classList.remove("is-active")
    dropdown_1_text.innerHTML = "Overview"
})*/
