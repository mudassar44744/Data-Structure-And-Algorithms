/*
        Given an array, rotate the array to the right by k steps, where k is non-negative.    

        Example 1:
                Input: nums = [1, 2, 3, 4, 5, 6, 7], k = 3
                Output: [5, 6, 7, 1, 2, 3, 4]
                Explanation:
                        rotate 1 steps to the right: [7, 1, 2, 3, 4, 5, 6]
                        rotate 2 steps to the right: [6, 7, 1, 2, 3, 4, 5]
                        rotate 3 steps to the right: [5, 6, 7, 1, 2, 3, 4]
        Example 2:
                Input: nums = [-1, -100, 3, 99], k = 2
                Output: [3, 99, -1, -100]
                Explanation: 
                        rotate 1 steps to the right: [99, -1, -100, 3]
                        rotate 2 steps to the right: [3, 99, -1, -100]
        Constraints:
                1) 1 <= nums.length <= 10^5
                2) -2^31 <= nums[i] <= 2^31 - 1
                3) 0 <= k <= 10^5
*/

/**
 * @param { number[] } nums
 * @param { number } k
 * @return { void }
*/

var rotate = function( nums, k ) {
        k %= nums.length;
        let temp = [...nums.slice( nums.length - k ), ...nums.slice(0, nums.length - k)];
        for( let i = 0; i < temp.length; i++ ) {
                nums[i] = temp[i];
        }
};