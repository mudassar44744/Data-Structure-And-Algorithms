// Leetcode: https://leetcode.com/problems/insert-interval/

let insertIntervals = (intervals,newInterval) => {

    //return the intervals with new intervals
    //if mergeable then merge and return;
    //already sorted
    //loop and split left and right according to greater
    //and less then merge together
    
    let left = [];
    let right = [];
    let [newStart,newEnd] = newInterval;
    for(let [start,end] of intervals) {
      
      //if greater then according to the sorting we move to the right
      
      if(start > newEnd) right.push([start,end]);
      //if less then according to the sorting we move to the left
      else if(end < newStart) left.push([start,end])
      else {
        // merging of the intervals
        newStart = Math.min(start,newStart);
        newEnd = Math.max(end,newEnd);
      }
      
      
    }
     return [...left,[newStart,newEnd],...right];
     
}
    
    let intervals = [[1,3],[6,9]];
    console.log(
    insertIntervals(intervals,[2,5])  
    ) 