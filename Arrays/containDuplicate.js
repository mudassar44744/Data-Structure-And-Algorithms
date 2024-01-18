/**
 * Given an integer array nums, return true if any value appears at least twice in the array and return false if every element distinct.
 * 
 * @param {number[]} nums
 * @return {boolean}
 */

function containsDuplicate(nums) {
    for(let i=0; i<nums.length; i++) {
        for(let j = i+1; j<nums.length; j++) {
            if(nums[i] === nums[j]) {
                return true;
            }
        }
    }
    return false;
};

//Sample Input and output :

// Input: nums = [1,2,3,1]
// Output: true


// Input: nums = [1,2,3,4]
// Output: false




