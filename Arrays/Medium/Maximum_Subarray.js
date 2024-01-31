//LeetCode : https://leetcode.com/problems/maximum-subarray


/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max = nums[0];
    for(let i = 1; i < nums.length; i++) {
        nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
        max = Math.max(max,nums[i]);
    }
    return max;

};


/*
Time Complexity:

The algorithm iterates through the input array once using a single loop.
The time complexity is O(n), where n is the length of the nums array.
Space Complexity:

The algorithm uses a constant amount of extra space, regardless of the input size.
The space complexity is O(1) (constant space). The modification of the input array in-place reduces the need for additional data structures.
In summary:

Time Complexity: O(n)
Space Complexity: O(1)
This solution is efficient with a linear time complexity and minimal space usage, making it a good approach for finding the maximum subarray sum.
*/