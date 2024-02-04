// Leetcode: https://leetcode.com/problems/maximum-count-of-positive-integer-and-negative-integer/

function maximumCount(nums) {
        let max = 0;
        let min = 0;
        for (let num of nums) {
            if (num < 0) {
                min++;
            } else if (num > 0) {
                max++;
            }
        }
        return Math.max(min, max);
};