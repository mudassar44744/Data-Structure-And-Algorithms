// Leetcode: https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/

/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
        let buy = new Array(k + 1).fill(Number.MAX_VALUE);
         let sell = new Array(k + 1).fill(0);
         for (let price of prices) {
             for (let i = 1; i <= k; i++) {
                 buy[i] = Math.min(buy[i], price - sell[i - 1]);
                 sell[i] = Math.max(sell[i], price - buy[i]);
             }
         }
         return sell[k];  
     };