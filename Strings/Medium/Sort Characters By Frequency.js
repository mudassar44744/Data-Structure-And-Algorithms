//Leetcode : https://leetcode.com/problems/sort-characters-by-frequency/description/

/**
 * Sorts the characters in a string based on their frequency.
 * @param {string} s - The input string.
 * @return {string} - The string with characters sorted by frequency.
 */
var frequencySort = function(s) {
    // Step 1: Count the frequency of each character
    const charCount = new Map();
    for (const char of s) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }

    // Step 2: Sort characters based on their frequency in descending order
    const sortedChars = Array.from(charCount.keys()).sort((a, b) => charCount.get(b) - charCount.get(a));

    // Step 3: Build the result string by repeating characters according to their frequency
    let result = '';
    for (const char of sortedChars) {
        result += char.repeat(charCount.get(char));
    }

    // Step 4: Return the final sorted string
    return result;
};


console.log(
    frequencySort("tree")
)