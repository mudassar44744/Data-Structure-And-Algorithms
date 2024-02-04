//LeetCode : https://leetcode.com/problems/convert-1d-array-into-2d-array


/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function(original, m, n) {
    if (m * n !== original.length) {
      return [];
  }
  let arr = [];
  for (let i = 0, x = 0; i < m; i++) {
      arr[i] = [];
      for (let j = 0; j < n; j++) {
          arr[i][j] = original[x++];
      }
  }
  return arr;
};