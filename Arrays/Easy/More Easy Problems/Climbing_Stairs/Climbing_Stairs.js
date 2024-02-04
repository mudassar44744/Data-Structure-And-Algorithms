//Leetcode: https://leetcode.com/problems/climbing-stairs

function climbStairs(n) {
    function comb(n, k) {
        let result = 1;
        for (let i = 1; i <= k; i++) {
            result *= (n + 1 - i) / i;
        }
        return result;
    }

    let count = 0;
    for (let i = 0; i <= Math.floor(n / 2); i++) {
        count += comb(n - i, i);
    }
    return count;
}