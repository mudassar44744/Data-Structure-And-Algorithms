/*
Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
https://leetcode.com/problems/longest-consecutive-sequence/
https://www.youtube.com/watch?v=RlmR7CGyOk4&ab_channel=JSDev

*/
/**
 * @param {number[]} nums
 * @return {number}
 */
const longestConsecutive = nums => {
    const allNums = new Set(nums)  
    let longest = 0

    for(let num of allNums) {
        // if current element is the starting
        // element of a sequence
        if(!allNums.has(num - 1)) {  // start of a sequence
            let length = 0
            while(allNums.has(num + length)) {
                length++
            }
            longest = Math.max(length, longest)
        }
    }
    return longest
      
};