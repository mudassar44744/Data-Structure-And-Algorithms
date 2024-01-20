//Problem Link : https://leetcode.com/problems/single-number/
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let arr = nums.sort((a, b) => a - b); // Create a copy of the array and sort it
    for (let i = 0; i <= nums.length - 1; i += 2) { // Iterate by 2
      if (arr[i] !== arr[i + 1]) {
        return arr[i];
      }
    }
    return arr[arr.length - 1];  // Return the first non-matching pair
  };


  // Example 1:
  // Input: nums = [2,2,1]
  // Output: 1