//Leetcode : https://leetcode.com/problems/maximum-product-subarray

/*
 * @param { number[] } nums
 * @return { number }
*/
 var maxProduct = function(nums) {
        let sum = -11;
        let temp = 0;
        for( let i=0; i<nums.length; i++ ) {
                temp = nums[i];
                for( let j=i+1; j<nums.length; j++ ) {
                        temp *= nums[j];
                        if( temp >= sum  ) {
                                sum = temp;    
                        }      
                }
                if( nums[i] > sum ) {
                        sum = nums[i];
                }
        }
        return sum;
};

/*
Time Complexity:

The algorithm uses nested loops. The outer loop runs in O(n) time, where n is the length of the nums array.
The inner loop also contributes to the time complexity, resulting in a worst-case time complexity of O(n^2).
Space Complexity:

The algorithm uses a constant amount of extra space (only two variables, sum and temp), regardless of the input size.
Therefore, the space complexity is O(1) (constant space).
In summary:

Time Complexity: O(n^2)
Space Complexity: O(1)
*/




/*
        SOLUTION 2: DYNAMIC PROGRAMMING
                        Time Complexity: O(N), where N is the length of nums.
                        Space Complexity: O(1)
*/

/*
 * @param { number[] } nums
 * @return { number }
*/
var maxProduct = function( nums ) {
        if( nums.length === 0 ) {
                return 0;
        }
        
        let max = min = result = nums[0];
        
        for( let i=1; i<nums.length; i++ ) {
                let temp_max = Math.max( nums[i], Math.max( nums[i] * max, nums[i] * min ) );
                let temp_min = Math.min( nums[i], Math.min( nums[i] * max, nums[i] * min ) );
                max = temp_max;
                min = temp_min;
                result = Math.max(max, min, result);
        }
        return result;
};