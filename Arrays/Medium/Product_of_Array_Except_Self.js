// Leetcode: https://leetcode.com/problems/product-of-array-except-self/

const productExceptSelf = (nums) => {
    let sum = nums.reduce((a, b) => a * b, 1);
    return nums.map((num, index) =>
        num != 0 ? sum / num : [...nums.slice(0, index), ...nums.slice(index + 1)].reduce((a, b) => a * b, 1)
    );
};


/*
Time Complexity:

The algorithm uses the reduce function to calculate the product of all elements in the array. This step has a time complexity of O(n), where n is the length of the nums array.
The map function iterates through each element of the array, and the reduce operation inside the map has a time complexity of O(n) for each element.
The overall time complexity is O(n^2) due to the nested loop structure.
Space Complexity:

The algorithm uses additional space for the sum variable, which is a constant amount of space.
The map function creates a new array, and the space complexity for the resulting array is O(n).
Therefore, the space complexity is O(n).
In summary:

Time Complexity: O(n^2)
Space Complexity: O(n)
*/

var productExceptSelf2 = function(nums) {

    let leftArr = [];
    let leftMultiplication = 1;
   
     for (let i=0; i < nums.length; i++) {
       leftArr[i] = leftMultiplication;
       leftMultiplication *=  nums[i];
     }

     let rightArr = [];
     let rightMultiplication = 1;
   
     for (let i=nums.length-1; i >= 0; i--) {
       rightArr[i] = rightMultiplication;
       rightMultiplication *= nums[i];
       rightArr[i] *= leftArr[i]; //this additional step saves us from having another iteration. We can do the multiplication at the spot.
     }
     
     return rightArr;
};

/*

Time Complexity:

The algorithm performs two passes through the array: one for calculating the products of prefixes and one for calculating the final result.
Both passes have a time complexity of O(n), where n is the length of the nums array.
The overall time complexity is O(n).
Space Complexity:

The algorithm uses additional space for the leftArr and rightArr arrays, each of size n.
Therefore, the space complexity is O(n).
In summary:

Time Complexity: O(n)
Space Complexity: O(n)


*/


  