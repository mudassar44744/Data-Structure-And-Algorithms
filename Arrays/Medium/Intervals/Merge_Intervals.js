//Leetcode : https://leetcode.com/problems/merge-intervals

let merge = (intervals) => {
    let response = [intervals[0]];
    intervals.sort((a,b)=> a[0] - b[0]);

    for(let [start,end] of intervals) { 
        let endPrev = response.at(-1)[1];
        if(start <= endPrev) {
            response.at(-1)[1] = Math.max(end,endPrev)
        } else {
            response.push([start,end]);
        }
    }
    return response;
}

console.log(
    merge([[1,3],[2,6],[8,10],[15,18]])
)


/*
Time Complexity:

The dominant factor in terms of time complexity is the sorting step, which takes O(n log n) time, where n is the number of intervals.
The loop iterates through the sorted intervals once, taking O(n) time.
The overall time complexity is O(n log n).
Space Complexity:

The space complexity is determined by the response array.
In the worst case, if there are no overlapping intervals and each interval is distinct, the response array may store all intervals. In this case, the space complexity would be O(n).
In the best case, if all intervals overlap and can be merged into a single interval, the space complexity would be O(1).
The sorting step uses O(log n) additional space.
Therefore, the overall space complexity is O(n) in the worst case.
In summary:

Time Complexity: O(n log n)
Space Complexity: O(n) (worst case) or O(1) (best case)

Merging Intervals Step:

After sorting, the solution iterates through the sorted intervals array once.
Within the loop, it compares each interval with the last interval in the response array.
If there's overlap between the current interval and the previous interval in response, it updates the end point of the last interval in response.
If there's no overlap, it adds the current interval to response.
Each comparison and merging operation takes constant time, 
O(1), since the intervals are already sorted.
Overall Time Complexity:

The dominating factor for time complexity is the sorting step, which takes 
O(nlogn) time.
The subsequent merging step, iterating through the sorted intervals, takes 
O(n) time.
Hence, the overall time complexity of the solution is 
O(nlogn), where 

n is the number of intervals in the input array. The sorting step contributes the most to the time complexity, while the merging step contributes linear time complexity.

*/