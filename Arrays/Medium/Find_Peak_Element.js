//https://leetcode.com/problems/find-peak-element/
/*
        A peak element is an element that is strictly greater than its neighbors.
        Given an integer array nums, find a peak element, and return its index. 
        If the array contains multiple peaks, return the index to any of the peaks.
        You may imagine that nums[-1] = nums[n] = -∞.

        Example 1:
                Input: nums = [1,2,3,1]
                Output: 2
                Explanation: 3 is a peak element and your function should return the index number 2.
        
        Example 2:
                Input: nums = [1,2,1,3,5,6,4]
                Output: 5
                Explanation: Your function can return either index number 1 where the peak element is 2, or index number 5 where the peak element is 6.

        Constraints:
                1) 1 <= nums.length <= 1000
                2) -2^31 <= nums[i] <= 2^31 - 1
                3) nums[i] != nums[i + 1] for all valid i
*/

/*
 * @param { number[] } nums
 * @return { number }
*/


var findPeakElement = function( nums ) {
        var peakElement = 0;
        for( let i = 0; i < nums.length; i++ ) {
                if( nums[ i ] > nums[ i - 1 ]) {
                        peakElement = i;
                }
        }
        return peakElement;
};

//Another Solution

var findPeakElement = function(nums) {
        if (nums.length === 1) return 0; // Handle single-element case
        let peakElement = -1;
    
        for (let i = 0; i < nums.length; i++) {
            if ((i === 0 || nums[i] > nums[i - 1]) && 
                (i === nums.length - 1 || nums[i] > nums[i + 1])) {
                peakElement = i;
                break; // Exit loop after finding the first peak
            }
        }
    
        return peakElement;
};
    