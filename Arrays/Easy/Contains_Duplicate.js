//Leetcode : https://leetcode.com/problems/contains-duplicate


//Brute Force Approach

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    for(let i=0; i<nums.length; i++) {
        for(let j = i+1; j<nums.length; j++) {
            if(nums[i] === nums[j]) {
                return true;
            }
        }
    }
    return false;
};


// Hash Table Solutions

var containsDuplicate = function(nums) {
    let hashTable = {};
    for(let i = 0; i < nums.length; i++) {
        if(hashTable[nums[i]])
        { 
            return true;
        }
        else
        { 
            hashTable[nums[i]] = true;
        }
    }
    return false;
};


/**
Time Complexity:

The algorithm iterates through the input array once, using a single loop.
Each operation inside the loop (checking and updating the hashTable) takes constant time.
Therefore, the overall time complexity is O(n), where n is the length of the nums array.

Space Complexity:
The algorithm uses additional space to store values in the hashTable.
In the worst case, if all elements are unique, the space complexity is O(n) as it would store all n elements in the hashTable.
In the best case, if there are duplicates early in the array, the space complexity would be less than O(n).
Therefore, the space complexity is O(n) in the worst case and O(min(n, k)) in the best case, where k is the number of unique elements.

In summary:
Time Complexity: O(n)
Space Complexity: O(n) (worst case) or O(min(n, k)) (best case)
 */