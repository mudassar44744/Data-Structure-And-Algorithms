/**
 * 
 * @param {string} str1 
 * @param {string} str2 
 * @returns {boolean}
 * 
 * Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed
 * by rearranging the letters of another, such as cinema, formed from iceman.
 * Time Complexity - O(n)
 * Note: You may assume the string contains only lowercase alphabets.
 * LeetCode : https://leetcode.com/problems/valid-anagram/description/
 */


function validAnagram(str1,str2) {

  if(str1.length !== str2.length) { return false; }
  
  let lookup = {};
  for (let index = 0; index < str1.length; index++) {
    const element = str1[index];
    lookup[element] ? lookup[element]++ : lookup[element] = 1;
  }
  console.log("before", lookup);
  for (let index = 0; index < str2.length; index++) {
    const element = str2[index];

    if(!lookup[element]) {
      return false;
    } else {
      lookup[element]--;
    }
    console.log("After", lookup);
  }
  return true;
}


//Examples of Input and outputs:
validAnagram('', '') // true
validAnagram('aaz', 'zza'); // false
validAnagram('aaz', 'zza') // false
validAnagram('anagram', 'nagaram') // true
validAnagram("rat","car") // false) // false
validAnagram('awesome', 'awesom') // false
validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana') // false
validAnagram('qwerty', 'qeywrt') // true
validAnagram('texttwisttime', 'timetwisttext') // true
validAnagram('anagram', 'nagaram') // true
validAnagram('cinema', 'iceman') // true