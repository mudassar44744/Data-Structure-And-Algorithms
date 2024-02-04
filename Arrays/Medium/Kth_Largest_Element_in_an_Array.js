//LeetCode : https://leetcode.com/problems/kth-largest-element-in-an-array
 var findKthLargest = function(nums, k) {
        nums.sort( ( a, b ) => a - b);
        return nums[nums.length-k];
};