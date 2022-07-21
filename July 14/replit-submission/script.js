function animal_check(animal, animal_buttons, animal_status, animal_happiness, animal_energy, animal_fullness, animal_cleanliness)
{
    if (animal_happiness >= 100 && animal_energy >= 100 && animal_fullness >= 100 && animal_cleanliness >= 100)
    {
        let lower_animal = animal.toLowerCase()
        alert("Achievement get: "+ animal +" lover! You maxed the " + lower_animal + "!")
        animal_buttons.innerHTML = `<h1 class="title is-4">The `+ lower_animal + ` has been maxed out</h1>`
        console.log(animal_buttons)
        animal_status.innerHTML = "<br>"
    }

}


// GOAT

let goat_happiness = 15
let goat_energy = 15
let goat_fullness = 15
let goat_cleanliness = 15

const goat_buttons = document.querySelector("#goat-buttons")
const play_goat = document.querySelector("#play-goat")
const feed_goat = document.querySelector("#feed-goat")
const brush_goat = document.querySelector("#brush-goat")
const progress_play_goat = document.querySelector("#progress-play-goat")
const progress_energy_goat = document.querySelector("#progress-energy-goat")
const progress_fullness_goat = document.querySelector("#progress-fullness-goat")
const progress_cleanliness_goat = document.querySelector("#progress-cleanliness-goat")
const goat_status = document.querySelector("#status1")

play_goat.addEventListener("click",(e) => {
    if (goat_energy<5)
    {
        goat_status.innerHTML = "The goat is too tired"
    }
    else if (goat_cleanliness<10)
    {
        goat_status.innerHTML = "You don't want to play with the goat; it's too dirty."
    }
    else if (goat_happiness>90)
    {
        goat_status.innerHTML = "The goat is happy :)"
    }
    else
    {
        goat_happiness += 15
        goat_energy -= 5
        goat_cleanliness -= 10
        progress_play_goat.setAttribute("value",goat_happiness)
        progress_energy_goat.setAttribute("value",goat_energy)
        progress_cleanliness_goat.setAttribute("value",goat_cleanliness)
        goat_status.innerHTML = "You played with the goat."
    }
    animal_check("Goat", goat_buttons, status1, goat_happiness, goat_energy, goat_fullness, goat_cleanliness)
})

feed_goat.addEventListener("click",(e) => {
    if (goat_fullness>95)
    {
        goat_status.innerHTML = "The goat is too full"
    }
    else if (goat_cleanliness<10)
    {
        goat_status.innerHTML = "The goat made a mess... Time to clean it!"
    }
    else
    {
        goat_energy += 10
        goat_cleanliness -= 5
        goat_fullness += 5
        progress_energy_goat.setAttribute("value",goat_energy)
        progress_cleanliness_goat.setAttribute("value",goat_cleanliness)
        progress_fullness_goat.setAttribute("value",goat_fullness)
        goat_status.innerHTML = "You fed the goat."
    }
    animal_check("Goat", goat_buttons, status1, goat_happiness, goat_energy, goat_fullness, goat_cleanliness)
})

brush_goat.addEventListener("click",(e) => {
    if (goat_cleanliness>95)
    {
        goat_status.innerHTML = "The goat is already clean!"
    }
    else
    {
        goat_cleanliness += 5
        progress_cleanliness_goat.setAttribute("value",goat_cleanliness)
        goat_status.innerHTML = "You cleaned the goat."
    }
    animal_check("Goat", goat_buttons, status1, goat_happiness, goat_energy, goat_fullness, goat_cleanliness)
})


// BUNNY

let bunny_happiness = 55
let bunny_energy = 30
let bunny_fullness = 25
let bunny_cleanliness = 75

const bunny_buttons = document.querySelector("#bunny-buttons")
const play_bunny = document.querySelector("#play-bunny")
const feed_bunny = document.querySelector("#feed-bunny")
const brush_bunny = document.querySelector("#brush-bunny")
const progress_play_bunny = document.querySelector("#progress-play-bunny")
const progress_energy_bunny = document.querySelector("#progress-energy-bunny")
const progress_fullness_bunny = document.querySelector("#progress-fullness-bunny")
const progress_cleanliness_bunny = document.querySelector("#progress-cleanliness-bunny")
const bunny_status = document.querySelector("#status2")

play_bunny.addEventListener("click",(e) => {
    if (bunny_energy<5)
    {
        bunny_status.innerHTML = "The bunny is too tired"
    }
    else if (bunny_cleanliness<25)
    {
        bunny_status.innerHTML = "You don't want to play with the bunny; it's too dirty."
    }
    else if (bunny_happiness>85)
    {
        bunny_status.innerHTML = "The bunny is happy :)"
    }
    else
    {
        bunny_happiness += 30
        bunny_energy -= 5
        bunny_cleanliness -= 25
        progress_play_bunny.setAttribute("value",bunny_happiness)
        progress_energy_bunny.setAttribute("value",bunny_energy)
        progress_cleanliness_bunny.setAttribute("value",bunny_cleanliness)
        bunny_status.innerHTML = "You played with the bunny."
    }
    animal_check("Bunny", bunny_buttons, status2, bunny_happiness, bunny_energy, bunny_fullness, bunny_cleanliness)
})

feed_bunny.addEventListener("click",(e) => {
    if (bunny_fullness>95)
    {
        bunny_status.innerHTML = "The bunny is too full"
    }
    else if (bunny_cleanliness<15)
    {
        bunny_status.innerHTML = "The bunny made a mess... Time to clean it!"
    }
    else
    {
        bunny_energy += 30
        bunny_cleanliness -= 15
        bunny_fullness += 20
        progress_energy_bunny.setAttribute("value",bunny_energy)
        progress_cleanliness_bunny.setAttribute("value",bunny_cleanliness)
        progress_fullness_bunny.setAttribute("value",bunny_fullness)
        bunny_status.innerHTML = "You fed the bunny."
    }
    animal_check("Bunny", bunny_buttons, status2, bunny_happiness, bunny_energy, bunny_fullness, bunny_cleanliness)
})

brush_bunny.addEventListener("click",(e) => {
    if (bunny_cleanliness>95)
    {
        bunny_status.innerHTML = "The bunny is already clean!"
    }
    else
    {
        bunny_cleanliness += 15
        progress_cleanliness_bunny.setAttribute("value",bunny_cleanliness)
        bunny_status.innerHTML = "You cleaned the bunny."
    }
    animal_check("Bunny", bunny_buttons, status2, bunny_happiness, bunny_energy, bunny_fullness, bunny_cleanliness)
})


// Coco

let coco_happiness = 55
let coco_energy = 30
let coco_fullness = 25
let coco_cleanliness = 75

const coco_buttons = document.querySelector("#coco-buttons")
const play_coco = document.querySelector("#play-coco")
const feed_coco = document.querySelector("#feed-coco")
const brush_coco = document.querySelector("#brush-coco")
const progress_play_coco = document.querySelector("#progress-play-coco")
const progress_energy_coco = document.querySelector("#progress-energy-coco")
const progress_fullness_coco = document.querySelector("#progress-fullness-coco")
const progress_cleanliness_coco = document.querySelector("#progress-cleanliness-coco")
const coco_status = document.querySelector("#status3")

play_coco.addEventListener("click",(e) => {
    if (coco_energy<5)
    {
        coco_status.innerHTML = "Coco is too tired"
    }
    else if (coco_cleanliness<25)
    {
        coco_status.innerHTML = "You don't want to play with Coco; it's too dirty."
    }
    else if (coco_happiness>85)
    {
        coco_status.innerHTML = "Coco is happy :)"
    }
    else
    {
        coco_happiness += 30
        coco_energy -= 5
        coco_cleanliness -= 25
        progress_play_coco.setAttribute("value",coco_happiness)
        progress_energy_coco.setAttribute("value",coco_energy)
        progress_cleanliness_coco.setAttribute("value",coco_cleanliness)
        coco_status.innerHTML = "You played with Coco."
    }
    animal_check("Mama goat", coco_buttons, status3, coco_happiness, coco_energy, coco_fullness, coco_cleanliness)
})

feed_coco.addEventListener("click",(e) => {
    if (coco_fullness>95)
    {
        coco_status.innerHTML = "Coco is too full"
    }
    else if (coco_cleanliness<15)
    {
        coco_status.innerHTML = "Coco made a mess... Time to clean it!"
    }
    else
    {
        coco_energy += 30
        coco_cleanliness -= 15
        coco_fullness += 20
        progress_energy_coco.setAttribute("value",coco_energy)
        progress_cleanliness_coco.setAttribute("value",coco_cleanliness)
        progress_fullness_coco.setAttribute("value",coco_fullness)
        coco_status.innerHTML = "You fed Coco."
    }
    animal_check("Mama goat", coco_buttons, status3, coco_happiness, coco_energy, coco_fullness, coco_cleanliness)
})

brush_coco.addEventListener("click",(e) => {
    if (coco_cleanliness>95)
    {
        coco_status.innerHTML = "Coco is already clean!"
    }
    else
    {
        coco_cleanliness += 15
        progress_cleanliness_coco.setAttribute("value",coco_cleanliness)
        coco_status.innerHTML = "You cleaned Coco."
    }
    animal_check("Mama goat", coco_buttons, status3, coco_happiness, coco_energy, coco_fullness, coco_cleanliness)
})


const button4 = document.querySelector("#button4")
const zoo = document.querySelector(".container")
const text = "Hmm.. Are you sure?"

button4.addEventListener("click",(e) => {

    // If button isn't a prompt yet, because hasn't been pressed
    if (button4.innerHTML != text)
    {
        button4.innerHTML = text
    }
    // Button was pressed, and is pressed again. Erase the page and give the h1
    else
    {
        zoo.innerHTML = "<h1 class=\"title\">Due to some dangerous rulebreaking, the petting zoo is temporarily closed</h1>"
    }
})
