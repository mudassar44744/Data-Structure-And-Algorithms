/**
You are given an integer array arr. You can choose a set of integers and remove all the occurrences of these integers in the array.
Return the minimum size of the set so that at least half of the integers of the array are removed.

Leetcode : https://leetcode.com/problems/reduce-array-size-to-the-half/description/

Example 1:
Input: arr = [3,3,3,3,5,5,5,2,2,7]
Output: 2
Explanation: Choosing {3,7} will make the new array [5,5,5,2,2] which has size 5 (i.e equal to half of the size of the old array).
Possible sets of size 2 are {3,5},{3,2},{5,2}.
Choosing set {2,7} is not possible as it will make the new array [3,3,3,3,5,5,5] which has a size greater than half of the size of the old array.
 */



var minSetSize = function(arr) {
    let length = arr.length
    let target  = arr.length / 2
	
    let map = {}
	
    for(let i = 0;i< length;i++){
        map[arr[i]] = (map[arr[i]] || 0) + 1
    }
	
    let descFreq = Object.values(map).sort((a,b) => b-a)
	
    for(let i = 0;i<descFreq.length;i++){
        let frequency = descFreq[i]
        target -= frequency
        if(target <= 0) return i + 1
    }
};

console.log(minSetSize([3,3,3,3,5,5,5,2,2,7]));