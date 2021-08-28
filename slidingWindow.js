function findMaxSum(arr, k) {
  let maxValue = 0
  let curSum = 0

  for (let i=0; i < arr.length; i++) {
    curSum += arr[i]
    if (i >= k-1) {
    	maxValue = Math.max(maxValue, curSum)
    	curSum -= arr[i - (k - 1)]
    	}
  }
  return maxValue
}

console.log(findMaxSum([4,2,1,7,8,1,2,8,1,0], 3))
