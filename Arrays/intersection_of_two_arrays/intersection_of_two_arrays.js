//Leetcode : https://leetcode.com/problems/intersection-of-two-arrays/


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    nums1 = Array.from(new Set([...nums1]));
    nums2 = Array.from(new Set([...nums2]));
    let result = [];
    for(let i = 0; i < nums1.length; i++) {
        if(nums2.includes(nums1[i])) {
            let index = nums2.indexOf(nums1[i]);
            nums2.splice(index,1);
            result.push(nums1[i]);
        }
    }
    return result;
};

// const intersection = (nums1: Array<number>, nums2: Array<number>): Array<number> => {
//     nums1.sort((a, b) => a - b);
//     nums2.sort((a, b) => a - b);
//     let intersection_of_arrays: Array<number> = [];
//     for (let i: number = 0; i < nums1.length; i++) {
//             for (let j: number = 0; j < nums2.length; j++) {
//                     if (nums1[i] === nums2[j] && !intersection_of_arrays.includes(nums1[i])) {
//                             intersection_of_arrays.push(nums1[i]);
//                     } else if (nums1[i] < nums2[j]) {
//                             break;
//                     }
//             }
//     }
//     return intersection_of_arrays;
// };



// Input
// nums1 =
// [1,2,2,1]
// nums2 =
// [2,2]
// Output
// [2]
// Expected
// [2]
