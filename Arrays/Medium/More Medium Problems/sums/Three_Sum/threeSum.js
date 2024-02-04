//Problem Link : https://leetcode.com/problems/3sum/

// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    
    let obj={}
    nums.sort((a,b)=>a-b)
    // console.log(nums)
    for(let start=0;start<nums.length;start++){
        let right=nums.length-1
        let left=start+1
        while(left<right){
            if(nums[left]+nums[right]+nums[start]==0){
                // console.log(start,left,right)
                // arr.push([nums[start],nums[left],nums[right]])
                obj[[nums[start],nums[left],nums[right]]]=[nums[start],nums[left],nums[right]]
                left++
                right--
            }else if(nums[left]+nums[right]+nums[start]>0){
                right--
            }else if(nums[left]+nums[right]+nums[start]<0){
                left++
            }
        }
    }
     return (Object.values(obj))
};
console.log(threeSum([-1,0,1,2,-1,-4]));