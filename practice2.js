// Easy Codewars - 8kyu

// 1.
// count up in multiples
// (1,10) => [1,2,3,4,5,6,7,8,9,10]
// (2,5) => [2,4,6,8,10]

// function countBy(x, n) {
//   let z = [];
//   for(let i=1; i<=n; i++){
//     z.push(x*i)
//   }
//
//   return z;
// }
//
// console.log(countBy(1,10))

// 2.
// Timmy & Sarah think they are in love, but around where they live,
// they will only know once they pick a flower each. If one of the
// flowers has an even number of petals and the other has an odd
// number of petals it means they are in love.

// Write a function that will take the number of petals of each
// flower and return true if they are in love and false if they aren't.

// function lovefunc(flower1, flower2){
//   return (flower1+flower2) % 2 == 1
// }

// function lovefunc(flower1, flower2){
//   return flower1 % 2 !== flower2 % 2;
// }
//
// console.log(lovefunc(973,502))

// 3.
// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

// function simpleMultiplication(number) {
//     return number % 2 === 0 ? number * 8 : number * 9
// }

// function simpleMultiplication(n) {
//     return n * (n % 2 ? 9 : 8);
// }
//
// console.log(simpleMultiplication(2))

// 4.
// Sentence Smash
// Write a function that takes an array of words and smashes them together
// into a sentence and returns the sentence. You can ignore any need to
// sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

// Example
// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

// function smash (words) {
//   return words.join(' ')
// }
//
// console.log(smash(['hello', 'world', 'this', 'is', 'great']))
//
// 5.
// Grade book
// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.
// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100.
// Theres is no need to check for negative values or values greater than 100.

// function getGrade(s1,s2,s3) {
//   let score = (s1 + s2 + s3)/3
//   if ( score >= 90 && score <= 100 )	{
//     return 'A'
//   } else if (score >= 80 && score < 90) {
//     return 'B'
//   } else if (score >=70 && score < 80) {
//     return 'C'
//   } else if (score >=60 && score < 70) {
//     return 'D'
//   }	else {
//     return "F"
//   }
// }

// function getGrade (s1, s2, s3) {
//   const avg = (s1+s2+s3)/3;
//   if (avg < 60)  return "F";
//     else if (avg < 70) return "D";
//     else if (avg < 80) return "C";
//     else if (avg < 90) return "B";
//     else return "A";
// }
//
// console.log(getGrade(68,98,70))

// 6.
// Clock shows h hours, m minutes and s seconds after midnight.
// Your task is to write a function which returns the time since
// midnight in milliseconds.

// Example:
// h = 0
// m = 1
// s = 1

// result = 61000
// Input constraints:
// 0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59

// function past(h,m,s) {
//   return (((h * 60 + m) * 60) + s) * 1000
// }

// function past(h, m, s){
//   return ((h*3600)+(m*60)+s)*1000;
// }
//
// console.log(past(1,0,1))

// 7.
// Simple, given a string of words, return the length of the shortest
// word(s).

// String will never be empty and you do not need to account for
// different data types.

// function findShort(s) {
//   return Math.min(...s.split(" ").map(w=>w.length))
// }

// function findShort(s){
//   const arr = s.split(' ')
//   let short = arr[0]
//   for (let i = 0; i < arr.length; i++) {
//     if(arr[i].length < short.length) {
//       short = arr[i]
//     }
//   }
//   return short.length
// }
//
// console.log(findShort("bitcoin take over the world maybe who knows perhaps"))

// 8.
// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
// Return your answer as a number.

// function sumMix(x) {
//   return x.reduce((sum, num) => sum + Number(num),0)
// }

// const sumMix = x => x.reduce((a,b) => +b + a, 0)
//
// console.log(sumMix([9, 3, '7', '3']))

// 9.
// Story
// Ben has a very simple idea to make some profit: he buys something
// and sells it again. Of course, this wouldn't give him any profit
// at all if he was simply to buy and sell it at the same price.
// Instead, he's going to buy it for the lowest possible price and
// sell it at the highest.
//
// Task
// Write a function that returns both the minimum and maximum number
// of the given list/array.
//
// Examples
// minMax([1,2,3,4,5])   == [1,5]
// minMax([2334454,5])   == [5, 2334454]
// minMax([1])           == [1, 1]
//
// Remarks
// All arrays or lists will always have at least one element, so you
// don't need to check the length. Also, your function will always get
// an array or a list, you don't have to check for null, undefined or
// similar.

// function minMax(arr){
//   const min = Math.min(...arr)
//   const max = Math.max(...arr)
//   return [min, max]
// }
//
// console.log(minMax([51,2,3,4,5]))

//10.
// The cockroach is one of the fastest insects. Write a function which
// takes its speed in km per hour and returns it in cm per second,
// rounded down to the integer (= floored).

// For example:
// 1.08 --> 30
// Note! The input is a Real number (actual type is language dependent)
// and is >= 0. The result should be an Integer.

function cockroachSpeed(s) {
  // Conversion factor: km/h * 1h/60min * 1min/60s * 1000m/1km * 100cm/1m
  const conversion = 1/60 * 1/60 * 1000/1 * 100/1
  return Math.floor(s * conversion)
}

console.log(cockroachSpeed(0))
