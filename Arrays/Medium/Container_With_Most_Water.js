// LeetCode : https://leetcode.com/problems/container-with-most-water



var maxArea = function( heights ) {
        var leftPointer = 0;
        var rightPointer = heights.length - 1;
        var containerWithMostWater = -1;
        
        while( leftPointer < rightPointer ) {
                let min = Math.min( heights[ leftPointer ], heights[ rightPointer ] );
                let width = rightPointer - leftPointer;
                containerWithMostWater = Math.max( min * width, containerWithMostWater );
                heights[ leftPointer ] < heights[ rightPointer ]   ? leftPointer++ : rightPointer--;
        }
        
        return containerWithMostWater;
};


/*

Time Complexity:

The algorithm uses a two-pointer approach that iterates through the array once.
The time complexity is O(n), where n is the length of the heights array.
Space Complexity:

The algorithm uses a constant amount of extra space, regardless of the input size.
Therefore, the space complexity is O(1) (constant space).
In summary:

Time Complexity: O(n)
Space Complexity: O(1)

*/