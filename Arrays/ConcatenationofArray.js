/* 
Leetcode : https://leetcode.com/problems/concatenation-of-array/description/

Example 1:
Input: nums = [1,2,1]
Output: [1,2,1,1,2,1]
Explanation: The array ans is formed as follows:
- ans = [nums[0],nums[1],nums[2],nums[0],nums[1],nums[2]]
- ans = [1,2,1,1,2,1]
*/


/**
 * @param {number[]} nums
 * @return {number[]}
 */

var getConcatenation = function(nums) {
    const ans = [];
    for(let i=0; i<nums.length; i++) {

        ans[i] = nums[i];   
        ans[i + nums.length] = nums[i];
    }
    return result;
};