// In this kata you are required to, given a string, replace every letter with its position in the alphabet.
//
// If anything in the text isn't a letter, ignore it and don't return it.
//
// "a" = 1, "b" = 2, etc.
//
// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a string)

// parameter: str
// result: str of numbers , ignore spaces and non-letters
// example: alphabetPosition("abc def") // "1 2 3 4 5 6"

function alphabetPosition(str) {
  let answer = ""
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
  let strArray = str.toLowerCase().match(/[a-z]/g)||""
  for (let char of strArray) {
    answer += alphabet.indexOf(char) + 1 + " "
  }
  return answer.trim()
}

// function alphabetPosition(text) {
//   return text
//     .toUpperCase()
//     .match(/[a-z]/gi)
//     .map( (c) => c.charCodeAt() - 64)
//     .join(' ');
// }

console.log(alphabetPosition("The rat in a trap."))
console.log(alphabetPosition("0/*7 5{#"))
