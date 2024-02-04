// Leetcode: https://leetcode.com/problems/coin-change/

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    const stack = [[amount, []]];
      const seen = new Set([amount]);

      while (stack.length > 0) {
          const [amountInHand, numCoins] = stack.pop();
          if (amountInHand === 0) {
              return numCoins.length;
          } else {
              for (const coin of coins) {
                  const remainder = amountInHand - coin;
                  if (remainder >= 0 && !seen.has(remainder)) {
                      stack.push([remainder, [...numCoins, coin]]);
                      seen.add(remainder);
                  }
              }
          }
      }

      return -1;
};