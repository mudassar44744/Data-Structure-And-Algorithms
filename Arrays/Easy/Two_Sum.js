// LeetCode : https://leetcode.com/problems/two-sum/description/


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

//Hash Map Approach for larger data sets

var twoSum = (nums, target) => {
    let map = new Map();
    for(let i = 0; i < nums.length; i++){
        let complement = target - nums[i];
        if(map.has(complement))
          return [map.get(complement),i];
      map.set(nums[i],i);
    } 
    
};

/*
Time Complexity:

The algorithm iterates through the array once, and in each iteration, it performs constant time operations such as map lookups and set operations.
Therefore, the overall time complexity is O(n), where n is the length of the nums array.
Space Complexity:

The space complexity is determined by the additional space used to store elements in the hash map.
In the worst case, the hash map could store all n elements of the nums array (when there are no repeated elements).
Thus, the space complexity is O(n) in the worst case.
In summary:

Time Complexity: O(n)
Space Complexity: O(n)


*/


//Brute Foruce Approach for small data sets

var twoSum2 = (nums, target) => {
    for(let i = 0; i < nums.length; i++) {
        for(let j = i+1; j < nums.length; j++) {
            if(nums[i] + nums[j] === target) return [i,j];
        }
    }
};

/*

Time Complexity:

The algorithm uses a nested loop where each iteration of the outer loop triggers n - i iterations of the inner loop (where n is the length of the nums array).
As a result, the overall time complexity is O(n^2), where n is the length of the nums array.
Space Complexity:

The algorithm uses a constant amount of space, regardless of the input size. It does not use any additional data structures that scale with the input.
Therefore, the space complexity is O(1) (constant space).
In summary:

Time Complexity: O(n^2)
Space Complexity: O(1)



*/
