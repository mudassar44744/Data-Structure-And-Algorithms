/**
 * Write a fuction which accepts alphanumeric string and return the count of the each charcter. 
 * accepts only numbers and a-z 0-9
 */

function charCount(str) {
    if(str === " ") return null;
    let countChar = {};
    for(let i = 0; i < str.length; i++) {
        let char = str[i];
        let charCode = char.charCodeAt();
        if(this.charCode(charCode)) {
            if(countChar[char]) countChar[char]++;
            else countChar[char] = 1;
        }
        // let char = str[i].toLowerCase();
        // if(/[A-Za-z0-9]/.test(char)) {
        //     if(countChar[char]) countChar[char]++;
        //     else countChar[char] = 1;
        // }
    }

    return countChar;
}

function charCode(code) {
    if(
        code >= 48 && code <= 57 ||
        code >= 65 && code <= 90 ||
        code >= 97 && code <= 122
    ) 
    return true;
    else 
    return false;
}


let str = "tttt4444321";
console.log(charCount(str));