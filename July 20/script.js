const scrambled_numbers = [
  9, 25, 28, 22, 21, 0, 27, 14, 23, 26, 13, 12, 19, 20, 7, 29, 4, 6, 15, 17, 16,
  24, 5, 3, 8, 1, 2, 11, 18, 10,
];
const scrambled_words = [
  "in",
  "and",
  "their",
  "away",
  "mile",
  "Before",
  "have",
  "when",
  "from",
  "you",
  "way",
  "That",
  "are",
  "a",
  "a",
  "shoes.",
  "you",
  "walk",
  "you",
  "them,",
  "criticize",
  "them",
  "should",
  "someone,",
  "mile",
  "you",
  "criticize",
  "shoes.",
  "you",
  "their"
];

let unscrambled_words = [];
for(let i=0; i<scrambled_numbers.length;i++)
{
  unscrambled_words[scrambled_numbers[i]] = scrambled_words[i]
}

/* Your code - Note: save your unscrambled array of words as "unscrambled_words" */
let secret_message = unscrambled_words.join(" ");

console.log(secret_message);
