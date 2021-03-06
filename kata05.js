// Write a function to convert a name into initials.
// This kata strictly takes two words with one space in between them.
//
// The output should be two capital letters with a dot separating them.
// It should look like this:
// Sam Harris => S.H
// Patrick Feeney => P.F

// function abbrevName(name){
//   let splitName = name.toUpperCase().split(" ")
//   return splitName[0][0] + "." + splitName[1][0]
//
// }

const abbrevName = name => name.split(" ").map(i => i[0].toUpperCase()).join(".")

console.log(abbrevName("Shim Guha"))
