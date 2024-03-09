/*
Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
https://leetcode.com/problems/longest-consecutive-sequence/

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


//Another approach 

const longestConsecutive2 = nums => {
   
    if(nums.length === 0) return [];
     let max = 1;
    nums.sort((a,b)=>a-b);
    nums = Array.from(new Set([...nums]));
 
    let count = 1;
    for(let i = nums.length - 1; i >= 0; i--) {
        let number = nums[i];
        if(number - 1  === nums[i - 1]) {
            count++;
            max = Math.max(count,max);
        } else count = 1;
    }
    return max;
       
 };