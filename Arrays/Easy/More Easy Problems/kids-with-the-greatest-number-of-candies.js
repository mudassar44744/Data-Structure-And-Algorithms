//https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let greates = Math.max(...candies);
    let output = [];
    for(let i=0; i<candies.length; i++) {
        if(candies[i] + extraCandies >= greates) {
            output.push(true);
        } else {
            output.push(false);
        }
    }
    return output;
};