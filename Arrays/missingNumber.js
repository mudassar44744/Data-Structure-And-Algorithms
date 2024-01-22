//How do you find the missing number in a given integer array of 1 to 100?
// leetcode : https://leetcode.com/problems/missing-number/
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let len = nums.length;//length of array.
    let sum = (len*(len+1))/2; // sum of all nos from 0 to n by series formula
    let sum2 = nums.reduce((a,c)=> a+c); //sum of array elements.
    return sum-sum2; //difference is the answer
};

console.log(missingNumber([3,0,1]));
