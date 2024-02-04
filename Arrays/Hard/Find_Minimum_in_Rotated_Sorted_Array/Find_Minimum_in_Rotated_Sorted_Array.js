// Leetcode: https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/

/**
 * @param { number[] } nums
 * @return { number }
 */

var findMin = function (nums) {
        return Math.min.apply(null, nums);
};



/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
        let start = 0;
        let end = nums.length - 1;
        let mid;
        while (start <= end) {
          mid = Math.floor((start + end) / 2);
          if (nums[mid] > nums[end]) {
            start = mid + 1;
          } else {
            if (nums[mid] < nums[start]) mid += 1;
            end = mid - 1;
          }
        }
        return nums[mid];
};


