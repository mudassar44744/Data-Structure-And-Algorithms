/**
leetcode : https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii
 *
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = prices => {
    // Start with nothing and take every profitable opportunity from time travel
    let profit = 0;
    // Start from the second day (because that is the first day you could sell)
    for (let i = 1; i < prices.length; i++) {
      // Our Delorean only goes back 1 day, but that is all we need
      const [priceYesterday, priceToday] = [prices[i - 1], prices[i]];
      // Whenever there is profit, engage that Flux Capacitor!
      if (priceYesterday < priceToday)  {
       console.log("price yesterday",priceYesterday);
       console.log("price today",priceToday);
        profit += priceToday - priceYesterday;
    }
      // Buy yesterday; sell today
    }
    // Take every Monday off!
    return profit;
    // Time travel trading makes every weekend is a three-day weekend!
};


console.log(maxProfit([7,1,5,3,6,4]))
