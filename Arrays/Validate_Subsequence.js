/****************************************************************
 *          ALGOEXPERT VALIDATE SUBSEQUENCE CHALLENGE		*
 *                                                              *
 * Problem Statement                                            *
 * Given two non-empty arrays of integers, write a function that*
 * determines whether the second array is a subsequence of the  *
 * first one. A subsequence of an array is a set of numbers that*
 * aren't necessarily adjacent in the array but that are in the *
 * same order as they appear in the array. For instance, the    *
 * numbers [1, 3, 4] form a subsequence of an array [1, 2, 3, 4]*
 * and so do the numbers [2, 4]. Note that the single number in *
 * an array and the array itself are both valid subsequences of *
 * the array                                                    *
 * 								*
 * Examples                                                     *
 * Input 1: ([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10])      *
 * Output 1: true                                               *
 *                                                              *
 * Input 2: ([5,1,22,25,6,-1,8,10], [5,1,22,25,6,-1,8,10])      *
 * Output 2: true                                               *
 *                                                              *
 * Input 3: ([5,1,22,25,6,-1,8,10], [5,1,22,6,-1,8,10])         *
 * Output 3: true                                               *
 *                                                              *
 * Input 4: ([5, 1, 22, 25, 6, -1, 8, 10], [22, 25, 6])         *
 * Output 4: true                                               *
 *                                                              *
 * Input 5: ([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, 10])          *
 * Output 5: true                                               *
 *                                                              *
 * Solution Efficiency						*
 * Time Complexity: O(n)					*
 * Space Complexity: O(1)					*
 ***************************************************************/

function isValidSubsequence( array, sequence ) {
    if( sequence.length > array.length ) {
    return false;
}
for( let i = 0; i < sequence.length; i++ ) {
    if( array.includes( sequence[i] ) ) {
        if( ! ( i >= 0 && array.indexOf( sequence[i], i ) > array.indexOf( sequence[i - 1], i - 1 ) ) ) {
            return false;
        }
    }
    else {
        return false;
    }
}
return true;
}

let array = [1,4,54,8,9,1];
let sequence = [1,8,9];

function isValidSubsequence2(array, sequence) {
  //subsequence cares about one
  //array = [5,1,22,25,6,-1,8,10]
  //sequence = [1,6,-1,10]
  let arrIdx = 0;
  let sqxInx = 0;
  while (arrIdx < array.length && sqxInx < sequence.length) {
    if (array[arrIdx] === sequence[sqxInx]) sqxInx++;
    //regardless if True we keep moving forward in main array
    arrIdx++;
  }
  //only valid subsequence if the sequenceIdx is equal to the sequence array
  return sqxInx === sequence.length;
}

console.log(isValidSubsequence2(array,sequence))