/**
 * https://leetcode.com/problems/richest-customer-wealth/
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let maxWealth = 0;
    for(let i = 0; i < accounts.length; i++) {
        let childAccounts = accounts[i];
        let wealth = 0;
        for(let j = 0; j < childAccounts.length; j++) {
            
            wealth += childAccounts[j];
        }
        maxWealth = Math.max(wealth,maxWealth);
    }
    return maxWealth;
};