// Leetcode: https://leetcode.com/problems/min-cost-climbing-stairs/

/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
     const minSteps = (stepIndex, cache = {}) => {
            if (stepIndex in cache) {
                return cache[stepIndex];
            }
            if (stepIndex >= cost.length) {
                return 0;
            }
            const minCost =
                cost[stepIndex] +
                Math.min(minSteps(stepIndex + 1, cache), minSteps(stepIndex + 2, cache));
            cache[stepIndex] = minCost;
            return minCost;
        };

        return Math.min(minSteps(0), minSteps(1));
};