const penguin_1 = document.querySelector("#penguin-1-button")
let penguin_1_dropdown = document.getElementById("penguin-1-dropdown")

penguin_1.addEventListener("click",(e) => {
    let strUser = penguin_1_dropdown.options[penguin_1_dropdown.selectedIndex].text;
    console.log(strUser);

    if (strUser == "Gentoo")
    {
        alert("Good job!")
    }
    else
    {
        alert("Sorry, that's wrong... The answer was Gentoo!")
    }
})




const penguin_2 = document.querySelector("#penguin-2-button")
let penguin_2_dropdown = document.getElementById("penguin-2-dropdown")

penguin_2.addEventListener("click",(e) => {
    let strUser = penguin_2_dropdown.options[penguin_2_dropdown.selectedIndex].text;
    console.log(strUser);

    if (strUser == "Emperor")
    {
        alert("Good job!")
    }
    else
    {
        alert("Sorry, that's wrong... The answer was Emperor!")
    }
})




const penguin_3 = document.querySelector("#penguin-3-button")
let penguin_3_dropdown = document.getElementById("penguin-3-dropdown")

penguin_3.addEventListener("click",(e) => {
    let strUser = penguin_3_dropdown.options[penguin_3_dropdown.selectedIndex].text;
    console.log(strUser);

    if (strUser == "Rockhopper")
    {
        alert("Good job!")
    }
    else
    {
        alert("Sorry, that's wrong... The answer was Rockhopper!")
    }
})



const penguin_4 = document.querySelector("#penguin-4-button")
let penguin_4_dropdown = document.getElementById("penguin-4-dropdown")

penguin_4.addEventListener("click",(e) => {
    let strUser = penguin_4_dropdown.options[penguin_4_dropdown.selectedIndex].text;
    console.log(strUser);

    if (strUser == "Adelie")
    {
        alert("Good job!")
    }
    else
    {
        alert("Sorry, that's wrong... The answer was Adelie!")
    }
})