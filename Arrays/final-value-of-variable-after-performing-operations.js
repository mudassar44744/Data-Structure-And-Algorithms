//https://leetcode.com/problems/final-value-of-variable-after-performing-operations/
/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let X = 0
    let map = {
        "--X" : -1,
        "X--" : -1,
        "X++" : 1,
        "++X" : 1
    };

    

    for(let i = 0; i < operations.length; i++) {
        X = X + map[operations[i]]
    }
    return X;
}