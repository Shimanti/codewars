// A pangram is a sentence that contains every single letter of the alphabet at least once.
// For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram,
// because it uses the letters A-Z at least once (case is irrelevant).
//
// Given a string, detect whether or not it is a pangram. Return True if it is, False if not.
// Ignore numbers and punctuation.

// Solution1
// function isPangram(str) {
//   const alpha= 'abcdefghijklmnopqrstuvwxyz'
//   let count = 0
//
// // if each letter appears in the string, then return true
// for (let i=0; i<alpha.length; i++) {
//   if (str.includes(alpha[i])) {
//     count +=1
//   }
// }
// if (count === 26) {
//   return true
// }else {
//   return false
// }
// }

// Solution2
const isPangram2 = str => {
  const alpha= 'abcdefghijklmnopqrstuvwxyz'
  return [...alpha].every(letter => string.toLowerCase().includes(letter))
}

// Tests
const str1 = "The quick brown fox jumps over the lazy dog."
const str2 = "This is not a pangram."
console.log(isPangram2(str1))//True
console.log(isPangram2(str2))//False
