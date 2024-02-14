//Leetcode : https://leetcode.com/problems/count-vowel-substrings-of-a-string

/**
 * @param {string} word
 * @return {number}
 */
var countVowelSubstrings = function(word) {

    let vowelSets = new Set(['a','e','i','o','u']);
    let count = 0;
    for(let i = 0; i < word.length; i++) {
        let subSet = new Set([]);
        for(let j = i; j < word.length; j++) {
            if(!vowelSets.has(word[j])) 
             {
                 break;
             }
            subSet.add(word[j]);
            if(subSet.size === vowelSets.size) 
            {
                count++;
            }
        }
    }
    return count;
};


