// function series(n) {
//
// let total = 0
// for (let i=0; i < n; i++) {
//   total += 1/(1+i*3)
// }
// return total.toFixed(2)
// }

const series = (n, s=0) => n ? series(n-1, s + 1/(3*n-2)): s.toFixed(2)

console.log(series(5))
