// 3. Longest Substring Without Repeating Characters
// Given a string s, find the length of the longest substring without repeating characters.
// Example 1:
// Input: s = "abcabcbb" -> sub = [0] + if [1] != acc , acc + cur, if [2] != str[0] || str[1], acc + cur
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
// Example 4:
// Input: s = ""
// Output: 0
//
// Constraints:
// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

let lengthOfLongestSubstring = function(s) {
        if (s.length == 0 || s == null) return 0

        let strCount = {}
        let maxValue = 0
        let temp = 0
        for (let i = 0; i < s.length; i++){


        	}
        }
        return strCount
    }

console.log(lengthOfLongestSubstring("bbbbb"))
console.log(lengthOfLongestSubstring("abcbb"))
console.log(lengthOfLongestSubstring("pwwkew"))
