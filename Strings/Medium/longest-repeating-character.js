//LeetCode : https://leetcode.com/problems/longest-repeating-character-replacement/description/

// Time Complexity :  O(n)
// Space Complexity : O(1)
var characterReplacement1 = function(s, k) {
    // Make a map of size 26...
    var map = [26]
    // Initialize largestCount, maxlen & beg pointer...
    let largestCount = 0, beg = 0, maxlen = 0;
    // Traverse all characters through the loop...
    for(let end = 0; end < s.length; end++){
        const c = s[end]
        map[c] = (map[c] || 0) + 1
        // Get the largest count of a single, unique character in the current window...
        largestCount = Math.max(largestCount, map[c])
        // We are allowed to have at most k replacements in the window...
        // So, if max character frequency + distance between beg and end is greater than k...
        // this means we have considered changing more than k charactres. So time to shrink window...
        // Then there are more characters in the window than we can replace, and we need to shrink the window...
        if(end - beg + 1 - largestCount > k){     // The main equation is: end - beg + 1 - largestCount...
            map[s[beg]] -= 1
            beg += 1
        }
        // Get the maximum length of repeating character...
        maxlen = Math.max(maxlen, end - beg + 1);     // end - beg + 1 = size of the current window...
    }
    return maxlen;      // Return the maximum length of repeating character...
};


const characterReplacement = (s, k) => {
	const map = {};
	let max = 0; // max window
	let maxCount = 0; // count of most frequent element

	let L = 0;
	let R = 0;

	while (R < s.length) {
		const cv = s[R];

		map[cv] = map[cv] + 1 || 1; // add/update count
		maxCount = Math.max(maxCount, map[cv]); // update max count

    // length of window -- count of most frequent > k
    // character replacement threshold is capped
		while (R - L + 1 - maxCount > k) {
			map[s[L]]--; // decrement count of left most character
			L++; // move window
		}

		max = Math.max(max, R - L + 1);
		R++;
	}

	return max;
};

console.log(
    characterReplacement("ABAB",2)
)