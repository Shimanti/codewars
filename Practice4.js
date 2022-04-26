// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example:
// 348597 => [7,9,5,8,4,3]

// function digitize(n) {
//  return n.toString().split('').reverse().map(x=> parseInt(x))
// }

// return String(n).split('').map(Number).reverse()

// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.
// (In this case, all triangles must have surface greater than 0 to be accepted).

// function isTriangle(a,b,c)
// {
//  if (a <=0 || b <= 0 || c <= 0) {
//   return false
//  } else if (a+b <= c || b+c <= a || c+a <= b) {
//    return false
//  } else {
//    return true
//  }
// }

// return a + b > c && a + c > b && c + b > a;

// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
// Mind the input validation.

// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6
// Input validation
// If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.

// function sumArray(array) {
// array = array || []
//  return array
//    .sort((a, b) => a - b)
//    .slice(1, -1)
//    .reduce((a, b) => a + b, 0);
// }


// In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 
// Rules
// 1.  The input string will always be lower case but maybe empty.
// 2.  If the character in the string is whitespace then pass over it as if it was an empty seat
// Example
// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

// function wave(str){
// let arr = []
// for (let i = 0; i < str.length; i++) {
//    let copy = str.split('')
//    if(copy[i] !== ' ') {
//      copy[i] = copy[i].toUpperCase()
//     arr.push(copy.join(''))
//    }
//  }
//  return arr
// }

// 

//function wave(str){
//   let result = [];
    
 //   str.split("").forEach((char, index) => {
 //      if (/[a-z]/.test(char)) {
 //           result.push(str.slice(0, index) + char.toUpperCase() + str.slice(index + 1));
 //      }
 //    });
   
 //   return result;
 // }
