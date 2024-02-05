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
        let index = nums2.indexOf(nums1[i]);
        if(index > -1) {
            nums2.splice(index,1);
            result.push(nums1[i]);
        }
    }
    return result;
};

//using recursive method
//   const intersect = (a1, a2, ...rest) => {
//     const a12 = a1.filter(value => a2.includes(value))
//     if (rest.length === 0) { return a12; }
//     return intersect(a12, ...rest);
//   };
  

//   function intersection (a, b) {
//     const setA = new Set(a);
//     return b.filter(value => setA.has(value));





