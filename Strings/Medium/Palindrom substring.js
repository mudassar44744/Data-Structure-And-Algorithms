//LeetCode : https://leetcode.com/problems/palindromic-substrings/description/

/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings1 = function(s) {
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

//https://www.youtube.com/watch?v=J5P4OBhFKq0&ab_channel=CSIITIAN

var countSubstrings2 = function(s) {
    let totalCount = 0;
    for (let i = 0; i < s.length; i++) {
        // Count palindromes with odd length
        totalCount += extendPalindrome(s, i, i);
        // Count palindromes with even length
        totalCount += extendPalindrome(s, i, i + 1);
    }
    return totalCount;
};

const extendPalindrome = (s, left, right) => {
    let count = 0;
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        count++;
        left--;
        right++;
    }
    return count;
};

/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    let count = 0;
    for(let i = 0; i < s.length; i++) {
       for(let j = i; j < s.length; j++) {
        if(isPalindrom(i,j))  count++;
       }
    }
    return count;

    function isPalindrom(start, end) {
        while(start <= end) {
            if(s[start] !== s[end]) {
                return false;
            }
            start++;
            end--;
        }
        return true;
    }
  
}

/*
substring 
aaa

a, a, a, aa, aa, aaa

Brute force approach 
time complexity n3
time complexity o1
*/

console.log(
    countSubstrings('aaa')
)

console.log(
    countSubstrings('abc')
)

