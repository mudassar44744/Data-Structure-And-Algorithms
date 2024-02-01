//Leetcode : https://leetcode.com/problems/best-time-to-buy-and-sell-stock/


/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let left = 0;
    let maxProfit = 0; 
    for(let right = 1; right < prices.length; right++) {
        if(prices[left] < prices[right]) {
            let profit = prices[right] - prices[left];
            maxProfit = Math.max(maxProfit,profit);
        } else {
            left = right;
        }
    }
    return maxProfit;
 };


 /*
Time Complexity:

The algorithm iterates through the input array once, using a single loop.
Each iteration involves constant time operations (comparisons, subtractions, and Math.max).
Therefore, the overall time complexity is O(n), where n is the length of the prices array.

Space Complexity:

The algorithm uses a constant amount of extra space, regardless of the input size.
The space complexity is O(1) (constant space). The algorithm does not use any additional data structures that scale with the input.

In summary:
Time Complexity: O(n)
Space Complexity: O(1)


 */