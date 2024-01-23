//https://leetcode.com/problems/count-pairs-whose-sum-is-less-than-target/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function(nums, target) {
    let countPairs = 0;
    for(let i =0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            if(nums[i] +nums[j] < target) {
                countPairs++;
            }
        }
    }
    return countPairs;
};