// Leetcode: https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/

/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
        let k = 1;
      let buy = new Array(k + 1).fill(Number.MAX_SAFE_INTEGER);
      let sell = new Array(k + 1).fill(0);
      for (let price of prices) {
          for (let i = 1; i <= k; i++) {
              buy[i] = Math.min(buy[i], price - sell[i - 1]);
              sell[i] = Math.max(sell[i], price - buy[i] - fee);
              sell[i - 1] = sell[i];
          }
      }
      return sell[k];
  };

