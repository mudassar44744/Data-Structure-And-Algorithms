//https://leetcode.com/problems/running-sum-of-1d-array/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let sum =[]

    for(let i = 0; i < nums.length; i++) {
        let calculate = 0;
        for(let j = 0; j <= i; j++) {
            calculate += nums[j];
        }
        sum.push(calculate);
    }

    return sum;
}; 