/**
 * Multiple Pointers - isSubsequence
 * Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence
 * of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string,
 * without their order changing.
 * 
 * Leetcode : https://leetcode.com/problems/is-subsequence/
 * @param {string} str1 
 * @param {string} str2 
 * @returns {boolean}
 * Time Complexity - O(N + M)
 * Space Complexity - O(1)
 */


function isSubsequence(str1, str2) {
    var i = 0;
    var j = 0;
    if (!str1) return true;
    while (j < str2.length) {
      if (str2[j] === str1[i]) i++;
      if (i === str1.length) return true;
      j++;
    }
    return false;
  }

const isSubsequence = (s, t, index = 0) => {
  if (s.length > t.length) return false;
  for (let i = 0; i < t.length; i++) {
      if (s[index] == t[i]) {
          index++;
          if (index == s.length) break;
      }
  }
  return s.length === index;
};

// Examples:
// isSubsequence('sing', 'sting'); // true
// isSubsequence('abc', 'abracadabra'); // true
// isSubsequence('abc', 'acb'); // false (order matters)
// isSubsequence('helo', 'hello world'); // true



