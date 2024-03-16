//https://leetcode.com/problems/reverse-integer/
/**
 * @param {number} x
 * @return {number}
 */

var reverse = function(x) {
   let ans = parseInt(x.toString().split('').reverse().join('').toString());
  if (x < 0) { ans *= -1; }
  if (ans < (Math.pow(2, 31) * -1) || ans > Math.pow(2, 31)) return 0;
  return ans;
 };


console.log(
    reverse(1563847412)
)

