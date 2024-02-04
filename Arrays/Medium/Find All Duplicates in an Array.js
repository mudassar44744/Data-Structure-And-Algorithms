//LeetCode : https://leetcode.com/problems/find-all-duplicates-in-an-array


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(array) {
    const countMap = {};
  const duplicates = [];

  for (let i = 0; i < array.length; i++) {
     const num = array[i];
     countMap[num] = (countMap[num] || 0) + 1;
  }

  for (const num in countMap) {
     if (countMap[num] > 1) {
    //   let obj = {
    //       number : num,
    //       length : countMap[num]
    //   }
        duplicates.push(num)
     }
  }

  return duplicates;
};