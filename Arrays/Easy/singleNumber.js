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



  // Example 1:
  // Input: nums = [2,2,1]
  // Output: 1