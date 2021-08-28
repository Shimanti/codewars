// Hamming Distance
// In this challenge we will come up with an algorithm to calculate the edit
// distance between two strings of equal length, also known as Hamming Distance.

// The hamming distance between two strings of equal length is the number of
// positions at which these strings vary. In more technical terms, it is a
// measure of the minimum number of changes required to turn one string into another.

// Ex. hammingDistance('rover', 'river') // should return 1

// function hammingDistance(word1, word2) {
//   let letterCount = 0
//   for (let i = 0; i < word1.length; i++) {
//     if (word1[i].toLowerCase() != word2[i].toLowerCase()) {
//       letterCount ++
//       }
//     }
//     return letterCount
//   // }
// }

function hammingDistance(word1, word2) {
  let letterCount=0
  for (let letter in word1) {
    word1[letter].toLowerCase() != word2[letter].toLowerCase() ? letterCount++: 0
  }
  return letterCount
}
console.log(hammingDistance('Rover', 'river') )// should return 1)
