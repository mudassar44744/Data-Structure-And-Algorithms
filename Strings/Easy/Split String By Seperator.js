// Leetcode: https://leetcode.com/problems/split-strings-by-separator/
/**
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */
var splitWordsBySeparator = function(words, separator) {
    let finalArray = [];
    for(let i = 0; i < words.length; i++) {
        let splited = words[i].split(separator);
        if(splited.length > 1) {
            splited.forEach((item)=>{
                if(item != '')
                finalArray.push(item);
            })
        } else {
            finalArray.push(splited[0]);
        }
    }
    return finalArray;
};