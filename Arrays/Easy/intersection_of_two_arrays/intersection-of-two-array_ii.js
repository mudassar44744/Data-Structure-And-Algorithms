/**
 * Given two integer arrays nums1 and nums2, return an array of their intersection. 
 * Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.
 * Leetcode: https://leetcode.com/problems/intersection-of-two-arrays-ii/
 * 
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect1 = function(nums1, nums2) {
    let result = [];
    for (let i = 0; i < nums1.length; i++) {
      if(nums2.includes(nums1[i])){
          result.push(nums1[i])
          nums2.splice(nums2.indexOf(nums1[i]), 1)
      }
    }
    return result;
  
  };

//using recursive method
  const intersect = (a1, a2, ...rest) => {
    const a12 = a1.filter(value => a2.includes(value))
    if (rest.length === 0) { return a12; }
    return intersect(a12, ...rest);
  };
  

//   function intersection (a, b) {
//     const setA = new Set(a);
//     return b.filter(value => setA.has(value));
// }

//using typescript and optimized approach

// const intersect = (nums1: Array<number>, nums2: Array<number>): Array<number> => {
//   if (nums2.length > nums1.length) {
//           return intersect(nums2, nums1);
//   }
//   nums1.sort((a, b) => a - b);
//   nums2.sort((a, b) => a - b);

//   var commonElements: Array<number> = [];
//   var isIncluded: {
//           [key: number]: boolean;
//   } = {};

//   for (let i: number = 0; i < nums1.length; i++) {
//           for (let j: number = 0; j < nums2.length; j++) {
//                   if (!isIncluded[j] && nums1[i] === nums2[j]) {
//                           commonElements.push(nums1[i]);
//                           isIncluded[j] = true;
//                           break;
//                   } else if (nums2[j] > nums1[i]) {
//                           break;
//                   }
//           }
//   }

//   return commonElements;
// };


/**
 * Example 1:
 * Input: nums1 = [1,2,2,1], nums2 = [2,2]
 * Output: [2,2]
 * Example 2:
 * Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 * Output: [4,9]
 * Explanation: [9,4] is also accepted.
 */

