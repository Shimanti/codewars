// Smallest SubArray with Given Sum
// Smallest Sum >= 8
// arr = [4,2,2,7,8,1,2,8,1,0]
// dynamically resizing

function smallestSum(targetSum, arr) {
  let start = 0
  let curSum = 0
  let minSize = 200

  for (let end = 0; end < arr.length; end++) {
    // increasing pointer
    curSum += arr[end]

    while(curSum >= targetSum){
      minSize = Math.min(minSize, end - start+1)
      // shrinking pointer
      curSum -= arr[start]
      start ++
    }
  }
  return minSize
}

console.log(smallestSum(8, [4,2,2,7,8,1,2,8,1,0]))
