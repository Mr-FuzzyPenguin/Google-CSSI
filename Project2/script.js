// https://stackoverflow.com/questions/16349490/html-css-buttons-that-scroll-down-to-different-div-sections-on-a-webpage

console.log("script running")

const scrollTo = document.querySelectorAll(".scroll-tile")
const hospitality = document.querySelectorAll("#hospitality")

// For each each of the pictures, iterate through using picture
scrollTo.forEach((scrollPos) => {
    scrollPos.addEventListener("click", (e) => {
        document.querySelector('#' + scrollPos.innerHTML.split(' ')[0].replace("<a>", '')).scrollIntoView({ behavior: 'smooth', block: 'end' })
    })

})

hospitality.forEach((building) => {
    building.querySelectorAll("#hospitality-button").forEach((hospitalityButton) => {
        hospitalityButton.addEventListener("click", (e) => {
            let box_to_alter = building.querySelector("#dropdown")
            box_to_alter.classList.toggle("hidden")
            box_to_alter.classList.toggle("box")
        })
    })


})
