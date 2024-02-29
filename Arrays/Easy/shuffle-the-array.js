//https://leetcode.com/problems/shuffle-the-array/


/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */

var shuffle = function(nums, n) {
    let output = [];
    for(let i = 0; i < n; i++) {
        output.push(nums[i],nums[i + n])
    }
    return output;
};

/*
Time Complexity : O(n)
Space Complexity : O(n)
*/