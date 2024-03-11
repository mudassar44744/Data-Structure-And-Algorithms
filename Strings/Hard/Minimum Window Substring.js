//https://leetcode.com/problems/minimum-window-substring/description/
//https://leetcode.com/problems/minimum-window-substring/solutions/1776992/js-optimized-solution-with-explanations-o-t-s-time-o-t-s-space/


/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
//  https://www.youtube.com/watch?v=z9e-tGD7Z8g&t=10s&ab_channel=AlgoJS
var minWindow = function(s, t) {
    // count t's frequency of its characters
    let map = {}, uniqueChars = 0;
    for (let char of t) {
      if (char in map) {
        map[char] += 1;
      } else {
        map[char] = 1;
        uniqueChars += 1;
      }
    }
    
    let ans = '';
    let left = 0, match = 0;
    for (let right = 0; right < s.length; right++) {
      let rightChar = s[right];
      if (rightChar in map) {
        map[rightChar] -= 1;
        if (map[rightChar] === 0) match += 1;
      }
      
      if (match === uniqueChars) { // there is a solution
        // try to shrink the window from the left
        while (match === uniqueChars) {
          let leftChar = s[left++];
          if (map[leftChar] === 0) match -= 1;
          map[leftChar] += 1;
        }
        
        // record the solution, notice that you need to use left-1 instead of left when slicing
        let solution = s.slice(left-1, right+1);
        ans = (ans === '')? solution: (ans.length > solution.length)? solution: ans;
      }
    }
    return ans;
  }