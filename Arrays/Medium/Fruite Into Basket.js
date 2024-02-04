//LeetCode : https://leetcode.com/problems/fruit-into-baskets
/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    const n = fruits.length;
    const map = new Map();
    
    let maxLen = 0;
    let left = 0;
    
    for (let i = 0; i < n; i++) {
        const num = fruits[i];
        
        if (!map.has(num)) map.set(num, 0);

        map.set(num, map.get(num) + 1);
        
        while (map.size > 2) {
            //shrink the window size;
            const leftNum = fruits[left];
            map.set(leftNum, map.get(leftNum) - 1);
            
            if (map.get(leftNum) === 0) map.delete(leftNum);  // if the first index is 0 then delete this
            left++;
        }
        
       maxLen = Math.max(maxLen, i - left +1 );
    }
    
    return maxLen;
};


/*
left = start
i = end
*/