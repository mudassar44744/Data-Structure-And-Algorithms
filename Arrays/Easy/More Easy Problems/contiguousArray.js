// https://leetcode.com/problems/contiguous-array/


/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    let map = {0:-1};
    let count = 0;
    let max = 0;
    for (let i=0;i<nums.length;i++) {
        if (nums[i] == 0) count--;
        else count++;

        if (map[count]!=null) 
        {
            max = Math.max(max, i - map[count]);
        }
        else { 
            map[count] = i
        }
    }
    return max;
};


console.log(
    findMaxLength([0,1,0,1])
);

/**
 0 - -1 = -1 ; 
 values : 0 1 0 1 
 index : 0 1 2 3
 ans : -1 0 -1 0
 map : { 0 : -1, -1 : 0 }
 */