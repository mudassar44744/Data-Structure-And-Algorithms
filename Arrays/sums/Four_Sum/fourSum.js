// Input: nums = [1,0,-1,0,-2,2], target = 0  [-2,-1,0,0,1,2]
// Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
//https://leetcode.com/problems/4sum/

/**
 * 
Given an array nums of n integers, return an array of all the unique quadruplets 
[nums[a], nums[b], nums[c], nums[d]] such that:

0 <= a, b, c, d < n
a, b, c, and d are distinct.
nums[a] + nums[b] + nums[c] + nums[d] == target
You may return the answer in any order.

 

Example 1:

Input: nums = [1,0,-1,0,-2,2], target = 0
Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
[-2,-1,0,0,1,2]
[-2,-1,0] = 6-3 = 3
[]
*/



var fourSum = function(nums,target) {
    const result = [];
    if(nums.length < 4) return result;

    nums.sort((a,b)=> a - b);

    const len = nums.length;

    for(let i = 0; i < len - 3; i++) {

        for(let j = i+1; j < len - 2; j++) {
            let left = j+1; 
            let right = len - 1;

            while(left < right) {
                const sum = nums[i] + nums[j] + nums[left] + nums[right];
                if(sum == target) {
                    result[[nums[i],nums[j],nums[left],nums[right]]]=[nums[i],nums[j],nums[left],nums[right]]
                    // result.push(nums[i] , nums[j] , nums[left] , nums[right]);
                    left++;
                    right--;
                } else if(sum < target) {
                    left++;
                } else {
                    right--;
                }
            }


        }
    }
    return Object.values(result);
}


fourSum([-2,-1,0,0,1,2],0);