/**
 * Leetcode : https://leetcode.com/problems/roman-to-integer/
 * @param {String} romanStr 
 * @returns {Number}
 * 
 * 
 * Convert Roman Number to Integer
 * M : 1000, D : 500 , C : 100 , L :50 X : 10 , V : 5, I : I
 * XVIII = 10 + 5 + 1 + 1 + 1 = 18 
 * VL = 5 + 50 = 55
 * X L 
 * when the digit of lower value is befor higher value then the lower value is subtracted from higher value
 *  10 + 50 = 40 
 */

function romanToInteger(romanStr) {

    let num = 0;
    let objRoman = {M:1000,D:500,C:100,L:50,X:10,V:5,I:1};

    for (let i = 0; i < romanStr.length; i++) {
        if(objRoman[romanStr[i]] < objRoman[romanStr[i+1]]) {
            num -= objRoman[romanStr[i]]; 
        } else {
            num += objRoman[romanStr[i]]; 
        }
    }
    return num;
}


console.log(romanToInteger("XLIIII"));
console.log(romanToInteger("XVIII"));




