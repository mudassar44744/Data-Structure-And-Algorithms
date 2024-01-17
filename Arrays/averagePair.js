/**
 * Multiple Pointers - averagePair 
 * Write a function called averagePair. 
 * Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals 
 * the target average. There may be more than one pair that matches the average target.
 * Bonus Constraints: 
 * Time: O(N)
 * Space: O(1)
 * @param {Array} arr 
 * @param {Number} num 
 * @returns {boolean}
 * Node : If the given input is a sorted array or a list, we will either be using Binray Search or the Two Pointers strategy.
 */

function averagePair(arr, num){
    let start = 0;
    let end = arr.length - 1;
    while(start < end){
      let avg = (arr[start]+arr[end]) / 2;
      if(avg === num) return true;
      else if(avg < num) start++;
      else end--;
    }
    return false;
}


// Sample Input and output:
averagePair([1,2,3],2.5) // true
averagePair([1,3,3,5,6,7,10,12,19],8) // true
averagePair([-1,0,3,4,5,6], 4.1) // false
averagePair([],4) // false

