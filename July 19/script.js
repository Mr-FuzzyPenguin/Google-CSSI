
// Fix these querySelectors so that they each select the correct element.
const englishTile = document.querySelector("#English");
const spanishTile = document.querySelector("#Spanish");
const chineseTile = document.querySelector("#Chinese");
const tagalogTile = document.querySelector("#Tagalog");
const vietnameseTile = document.querySelector("#Vietnamese");
const arabicTile = document.querySelector("#Arabic");
const frenchTile = document.querySelector("#French");
const koreanTile = document.querySelector("#Korean");
const russianTile = document.querySelector("#Russian");

console.log(englishTile);
console.log(spanishTile);
console.log(chineseTile);
console.log(tagalogTile);
console.log(vietnameseTile);
console.log(arabicTile);
console.log(frenchTile);
console.log(koreanTile);
console.log(russianTile);


// Add the id of the input field so we can access it!
const inputField = document.querySelector("#guess");
console.log(inputField)

// Hides all
englishTile.classList.add("hidden")
spanishTile.classList.add("hidden")
chineseTile.classList.add("hidden")
tagalogTile.classList.add("hidden")
vietnameseTile.classList.add("hidden")
arabicTile.classList.add("hidden")
frenchTile.classList.add("hidden")
koreanTile.classList.add("hidden")
russianTile.classList.add("hidden")

let map =
{
    "english" : englishTile,
    "spanish" : spanishTile,
    "chinese" : chineseTile,
    "tagalog" : tagalogTile,
    "english" : englishTile,
    "spanish" : spanishTile,
    "chinese" : chineseTile,
    "tagalog" : tagalogTile,
    "vietnamese" : vietnameseTile,
    "arabic" : arabicTile,
    "french" : frenchTile,
    "korean" : koreanTile,
    "russian" : russianTile
}

function tile_manager(language, e) {
  if (e.target.value.toLowerCase() === language)
    {
        console.log("guess submitted")
        map[language].classList.remove("hidden")
    }
}

inputField.addEventListener("change", (e) => {
    let response = e.target.value
    response = ''
    tile_manager("english", e);
    tile_manager("spanish", e);
    tile_manager("chinese", e);
    tile_manager("tagalog", e);
    tile_manager("vietnamese", e);
    tile_manager("arabic", e);
    tile_manager("french", e);
    tile_manager("korean", e);
    tile_manager("russian", e);
})
