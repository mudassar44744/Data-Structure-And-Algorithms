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
