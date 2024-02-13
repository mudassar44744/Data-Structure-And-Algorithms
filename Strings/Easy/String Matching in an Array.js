// Leetcode: https://leetcode.com/problems/string-matching-in-an-array/


/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {
    let answered = new Set()
    let i,j
    let len = words.length
    for(i=0; i<len; i++){
        for(j=0; j<len; j++){
            if(i!=j && words[i].includes(words[j])) {
                answered.add(words[j])
            }
        }
    }

    return [...answered]
};


console.log(
    stringMatching(["mass","as","hero","superhero"])
)