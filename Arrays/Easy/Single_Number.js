//Problem Link : https://leetcode.com/problems/single-number/

/**
 * @param {number[]} nums
 * @return {number}
 */

var singleNumber = function (nums) {
    let arr = nums.sort((a, b) => a - b); // Create a copy of the array and sort it
    for (let i = 0; i <= nums.length - 1; i += 2) { // Iterate by 2
      if (arr[i] !== arr[i + 1]) {
        return arr[i];
      }
    }
    return arr[arr.length - 1];  // Return the first non-matching pair
  };

/*

Time Complexity:

Sorting: The most significant operation in the function is sorting the input array nums. Sorting typically takes O(n log n) time complexity on average, where 'n' is the number of elements in the array.
Iteration: After sorting, the function iterates through the sorted array once, which takes O(n) time complexity since it goes through each element once.
Therefore, the overall time complexity is dominated by the sorting operation, which is O(n log n).

Space Complexity:

The function uses an additional array array to store the sorted version of the input array. Since it's a separate copy of the input array, it requires O(n) space complexity.
Other than the input array and the temporary variables used in the loop, there are no additional data structures created.
Therefore, the overall space complexity is O(n), where 'n' is the number of elements in the input array.

In summary:

Time Complexity: O(n log n)
Space Complexity: O(n)


For an algorithm to take constant extra space, the extra variables used to solve it should not change with the input size, for example, In bubble sort, the extra variable that we will 
use is the temp variable, it doesn't change with the size of the input array, we will always use the exact number of extra variables for any size.

*/



  var singleNumber = function( nums ) {
    let numbers = {
            
    };
    let isFound = false;
    for( let i = 0; i < nums.length; i++ ) {
            isFound = false;
            if( numbers[nums[i]] ) {
               continue;
            }
            for( let j = i + 1; j < nums.length; j++ ){
                    if( nums[i] === nums[j] ) {
                            numbers[nums[i]] = true;
                            isFound = true;
                            break;
                    }
            } 
            if( isFound === false ) {
                    return nums[i];
            }
    }   
};
/*
Time Complexity:

The outer loop iterates through the entire array once, leading to O(n) iterations, where 'n' is the number of elements in the input array nums.
The inner loop also iterates through the array, but its maximum number of iterations decreases with each iteration of the outer loop. In the worst case scenario, the inner loop might iterate through nearly 'n' elements. However, since this loop's iterations decrease with each outer loop iteration, the overall time complexity is still considered to be O(n^2).
Space Complexity:

The function uses a hash map (numbers) to store elements as keys. In the worst case scenario, all elements of the input array are distinct, leading to all 'n' elements being stored in the hash map. Thus, the space complexity of the hash map is O(n).
Other than the input array and a few temporary variables, no additional data structures are created.
Therefore, the overall time and space complexity of the provided function is:

Time Complexity: O(n^2)
Space Complexity: O(n)
In summary:

Time Complexity: O(n^2)
Space Complexity: O(n)

*/

  // Example 1:
  // Input: nums = [2,2,1]
  // Output: 1