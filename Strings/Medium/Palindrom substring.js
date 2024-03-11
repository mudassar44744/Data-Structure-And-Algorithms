//LeetCode : https://leetcode.com/problems/palindromic-substrings/description/


/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    let res = 0;
   
    for (let i = 0; i < s.length; i++) {

        isPalindrome(i, i+1)
        isPalindrome(i, i)

    }
    function isPalindrome(i1, i2) {
        while (i1 >= 0 && i2 < s.length) {
            if (s[i1] === s[i2]) {
                res++
                i1--
                i2++
    
            } else {
                break
            }
        }
    }
    return res
    
}

