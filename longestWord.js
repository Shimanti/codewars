// https://scotch.io/courses/the-ultimate-guide-to-javascript-algorithms/finding-the-longest-word-in-a-sentence

// My SOLUTION1
// function longestWord(phrase) {
//   let words = phrase.split(" ")
//   let longest = ""
//
//   for (let word of words) {
//     if (word.length > longest.length) {
//       longest = word
//     }
//   }
//   return longest
//   }

// scotch.io SOLUTION1
// function longestWord(text) {
//     let wordArray = text.split(' ')
//     let maxLength = 0
//     let result = ''
//
//     for (let i = 0; i < wordArray.length; i++) {
//         if (wordArray[i].length > maxLength) {
//             maxLength = wordArray[i].length
//             result = wordArray[i]
//         }
//     }
//
//     return result
// }

// scotch.io SOLUTION2
// function longestWord(text) {
//     var result = text.split(' ').reduce((maxLengthWord, currentWord) => {
//         if (currentWord.length > maxLengthWord.length) {
//             return currentWord
//         } else {
//             return maxLengthWord
//         }
//     }, "")
//     return result
// }

// scotch.io SOLUTION3
// function longestWord(text) {
//     var sortedArray = text.split(' ')
//                           .sort((wordA, wordB) => wordB.length - wordA.length)
//     return sortedArray[0]
// }

// my SOLUTION2
const longestWord = phrase => phrase.split(" ").sort((wordA, wordB)=> wordA.length > wordB.length?-1:1)[0]

console.log(longestWord('Top Shelf Web Development Training on Scotch')) //should return 'Development'
