// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

// Example:
// h = 0
// m = 1
// s = 1

// result = 61000
// Input constraints:

// 0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59

// my original solution

function past(h, m, s){
    return (h*3600000)+(m*60000)+(s*1000)
  }

// what I learned from others' solutions

function past(h, m, s){
    return 1000 * (h*3600)+(m*60)+s // more readable
  }