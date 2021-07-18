// You are going to be given a word.
// Your job is to return the middle character of
// word. If the word's length is odd, return the
// middle character. If the word's length is even,
// return the middle 2 characters.

// #Examples:
// Kata.getMiddle("test") should return "es"
// Kata.getMiddle("testing") should return "t"
// Kata.getMiddle("middle") should return "dd"
// Kata.getMiddle("A") should return "A"


// function getMiddle(s) {
//   let middle = s.length /2
//   if (s.length % 2 === 0) {
//     return s.charAt(middle -.5) + s.charAt(middle+.5)
//   } else {
//     return s.charAt(middle)
//   }
//
// }

const getMiddle = s => s.slice((s.length-1)/2, s.length/2+1)

console.log(getMiddle("test"))
