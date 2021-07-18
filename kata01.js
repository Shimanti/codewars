// Total(n) = 1+ 1/4 + 1/7 + 1/10 + 1/13 ...
// S(1) = 1
// S(2) = S(1) + 1/(1+3)
// S(3) = S(2) + 1/(1+3+3)
// S(4) = S(3) + 1/(1+3+3+3)
// S(5) = S(4) + 1/(1+3+3+3+3)

// Brute force
// function SeriesSum(n)
// {
//   let total = 0
//   for (let i = 0; i < n; i++) {
//      total += 1/(1+i*3)
//      // console.log(total)
//   }
//   return total.toFixed(2)
//  }

// Recursion
// function SeriesSum(n, s = 0) {
//     return n ? SeriesSum(n - 1, s + 1 / (3 * n - 2)) : s.toFixed(2)
// }

// const SeriesSum = (n, total = 0) => {
//     if (n === 0) return total.toFixed(2);
//     else return SeriesSum(n - 1, total + 1 / (3 * n - 2));
// };

const SeriesSum = (n, s = 0) => n ? SeriesSum(n - 1, s + 1 / (3 * n - 2)) : s.toFixed(2)


console.log(SeriesSum(5))
