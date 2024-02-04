/**
 * Leetcode : https://leetcode.com/problems/merge-intervals 
 */

var merge = function(intervals) {
    if(!intervals.length) return [];
    intervals.sort((a, b) => a[0] - b[0]);
    
    const result = [intervals[0]];
    
    for(let [start, end] of intervals) {
        const endPrev = result.at(-1)[1]
        if(start <= endPrev) result.at(-1)[1] = Math.max(end, endPrev);
        else result.push([start, end]);
    }
    return result;
};


console.log(
    merge([[1,3],[2,6],[8,10],[15,18]])
)

/*
Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
*/