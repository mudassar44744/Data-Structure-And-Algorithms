// LeetCode : https://leetcode.com/problems/count-number-of-nice-subarrays
//https://www.youtube.com/watch?v=TURdT2QgSZw
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
    let odds = 0;
    let start = 0;
    let tempSub = 0;
    let subArrays = 0;
  
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] % 2 !== 0) {
        odds++;
        tempSub = 0;
      }
  
      while (odds === k) {
        tempSub++;
        if (nums[start] % 2 !== 0) odds--;
        start++;
      }
      subArrays += tempSub;
    }
  
    return subArrays;
  };