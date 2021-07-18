// The new "Avengers" movie has just been released!
// There are a lot of people at the cinema box office
// standing in a huge line. Each of them has a single
// 100, 50 or 25 dollar bill. An "Avengers" ticket costs
// 25 dollars.
//
// Vasya is currently working as a clerk. He wants to
// sell a ticket to every single person in this line.
//
// Can Vasya sell a ticket to every person and give change
// if he initially has no money and sells the tickets strictly
// in the order people queue?
//
// Return YES, if Vasya can sell a ticket to every person and
// give change with the bills he has at hand at that moment.
// Otherwise return NO.
//
// Examples:
//
// tickets([25, 25, 50]) // => YES
// tickets([25, 100]) // => NO. Vasya will not have enough money
// to give change to 100 dollars
// tickets([25, 25, 50, 50, 100]) // => NO. Vasya will not have
// the right bills to give 75 dollars of change (you can't make
// two bills of 25 from one of 50)

// parameters = Array of numbers of type 25, 50, or 100
// result = "YES" or "NO"depending if 25 is available as change
// assumptions = everyone is buying one ticket with either 25, 50 or 100 bill,
// no change is available at the beginning
// examples:
// tickets([100]) // NO for each $100, we need $75
// tickets([50]) // NO for each $50, we need $25
// tickets([25, 100]) = need 3 x $25 or 1 x $50 + 1 x $25 in the bank for each 100
// tickets([25,50,25,25, 50,100])
// pseudocode
// need a count of bills
// loop through array
//   increment bills and decrement change of bills
//   if counts of bills is neg, then no


function tickets(peopleInLine) {
  let [b25,b50,b100] = [0,0,0]
  for (let value of peopleInLine) {
    if(value===25) {
      b25++
    }
    if(value===50) {
      b50++
      b25--
    }
    if(value===100) {
      b100++
      b25--
      b50>0 ? b50--: b25-=2
    }
    if(b25<0||b50<0) return "NO"
  }
  return "YES"
}

console.log(tickets([25,50,25,25, 50,100]))
