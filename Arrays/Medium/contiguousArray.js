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
 
 Note :
 index (0 index value ) = 2
 1 - - 1 = 2

 The idea
Iterate the numbers and count the number of 0s and 1s
Save the first appearance of count in a hash map as hash = {index:count}
When the same count appears again at i, it means between hash[count] to i, the number of 0s and 1s evened out and it's back to its previous level.
 
 
 */


/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    const map = new Map()
    map.set(0, -1)

    let count = 0
    let maxLen = 0

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i]
        count += (num === 1) ? 1 : -1

        if (map.has(count)) {
            maxLen = Math.max(maxLen, i - map.get(count))
        } else {
            map.set(count, i)
        }
    }

    return maxLen
};

