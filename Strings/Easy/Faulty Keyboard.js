//LeetCode : https://leetcode.com/problems/faulty-keyboard/description/

/**
 * @param {string} s
 * @return {string}
 */
var finalString = function(s) {
    let fstring = '';
    for(let i = 0; i < s.length; i++) {
      if(s[i] === 'i') {
       fstring = fstring.split('').reverse().join('');
      } else {
         fstring += s[i];
    }
     
  }
  return fstring;

};