//LeetCode : https://leetcode.com/problems/backspace-string-compare/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    let str1 = [];
    let str2 = [];
    for(let i = 0; i < s.length; i++) {
        if(s[i] === '#') {
            str1.pop();
        } else {
            str1.push(s[i]);
        }
    }
     for(let i = 0; i < t.length; i++) {
        if(t[i] === '#') {
            str2.pop();
        } else {
            str2.push(t[i]);
        }
    }
    return  str1.join('') === str2.join('') ? true : false;

};

console.log(
    backspaceCompare("xywrrmp","xywrrmu#p")
)