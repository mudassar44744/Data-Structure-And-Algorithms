/**
 * Given an array of strings strs, group the anagrams together. You can return the answer in any order. An anagram is a word or phrase formed by 
 * rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
 * @param {string[]} strs
 * @return {string[][]}
 * leetcode : https://leetcode.com/problems/group-anagrams/description/
 */

function groupAnagrams(strs) {
    let mappings = {};
    for(let word of strs) {
        // this will convert 'eat' into 'e','a','t' and then sort it to 'a','e','t' and then join to 'ate'
        // we do this so the sorted anagram key will always be the same. Other related anagrams will have the same key
        const anagramGroup = word.split("").sort().join("");
        // if we have a mapping that exists for the anagram group, push the item to that group, 
        // else create a new array and append the word
        mappings[anagramGroup] ? mappings[anagramGroup].push(word) : mappings[anagramGroup] = [word];
    }
    // returns all the mappings as a unified array.
    return Object.values(mappings);
};



//Examples of Input and Output:
groupAnagrams(["eat","tea","tan","ate","nat","bat"])
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]