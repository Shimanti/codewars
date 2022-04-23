// Given an array of integers, return a new array with each
// value doubled.

// For example:
// [1, 2, 3] --> [2, 4, 6]

function maps(x) {
  return x.map(item => item*2)
}

console.log(maps([1, 2, 3]))

// Enough is enough!
// Alice and Bob were on a holiday. Both of them took many
// pictures of the places they've been, and now they want to
// show Charlie their entire collection. However, Charlie doesn't
// like these sessions, since the motive usually repeats. He isn't
// fond of seeing the Eiffel tower 40 times. He tells them that
// he will only sit during the session if they show the same
// motive at most N times. Luckily, Alice and Bob are able to
// encode the motive as a number. Can you help them to remove
// numbers such that their list contains each number only up to N
// times, without changing the order?
//
// Task
// Given a list and a number, create a new list that contains
// each number of lst at most N times without reordering. For
// example if the input number is 2, and the input list is
// [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2]
// since this would lead to 1 and 2 being in the result 3 times,
// and then take 3, which leads to [1,2,3,1,2,3]. With list
// [20,37,20,21] and number 1, the result would be [20,37,21].

// function deleteNth(arr,x) {
//   var cache = {};
//   return arr.filter(n => {
//     cache[n] = (cache[n]||0) + 1
//     return cache[n] <= x
//   })
// }
//
// console.log(deleteNth([1,1,3,3,7,2,2,2,2], 3)) // [1, 1, 3, 3, 7, 2, 2, 2])

// Sum Numbers in an array
// const sum = arr => arr.reduce((a,b) => a + b, 0)

// Summation upto a number 
// const summation = n => n * (n + 1) / 2;

// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

// Example:

// n= 5, m=5: 25
// n-5, m=5:  0

// function paperwork(n, m) {
// return (n < 0 || m  < 0) ? 0 : m * n
//}
