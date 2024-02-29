//LeetCode : https://leetcode.com/problems/maximum-ascending-subarray-sum


/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function(nums) {
    let maxSum = 0;
    let sum = 0;
    for(let i = 0; i < nums.length; i++) {
        
        if(nums[i-1] < nums[i]) {
            sum += nums[i];
        } else {
            sum = nums[i];
        }

        maxSum = Math.max(sum,maxSum);
    }
    return maxSum;
};

console.log(
    maxAscendingSum([5,10,15,2,3,4])
)


/*
Time Complexity : O(n)
Space Compexity : O(1)

*/