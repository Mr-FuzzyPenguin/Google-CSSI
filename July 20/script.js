let fish = {
  "can_swim" : 1,
  "can_fly"  : false,
  "can_walk"  : false,
  "noise" : "none"
}
let bird = {
  "can_swim" : 0.5,
  "can_fly"  : true,
  "can_walk"  : true,
  "noise" : "chirp"
}
let cat = {
  "can_swim" : 0,
  "can_fly"  : false,
  "can_walk"  : true,
  "noise" : "MEOW!"
}
let horse = {
  "can_swim" : 0,
  "can_fly"  : false,
  "can_walk"  : true,
  "noise" : "neighs"
}


let animals = [fish, bird, cat, horse]

for (animal of animals)
  {console.log(animal);}
