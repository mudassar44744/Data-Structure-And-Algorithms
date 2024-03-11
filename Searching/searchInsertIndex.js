//https://leetcode.com/problems/search-insert-position/description/


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let lo = 0, hi = nums.length; // we might need to inseart at the end
   while(lo <= hi) { // breaks if lo == hi
       let mid =  Math.floor((hi+lo)/2); // always gives the lower mid
       if(nums[mid] === target) return mid;
       if (nums[mid] < target) {
           lo = mid + 1 // no way mid is a valid option
       } else {
           hi = mid - 1 // it might be possibe to inseart @ mid
       }
   }
   return lo;
};