//Leetcode Problem 
//https://leetcode.com/problems/build-array-from-permutation


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    var ans = [];
  for (var i = 0; i < nums.length; i++) {
      ans[i] = nums[nums[i]];
  }
  return ans;
};
