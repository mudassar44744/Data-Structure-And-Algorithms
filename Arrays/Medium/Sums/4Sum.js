//Leetcode : https://leetcode.com/problems/4sum

 /**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {

    let result = [];
    let len = nums.length;
    nums.sort((a,b)=> a - b);
    for(let i = 0; i < len - 3; i++) {
        for(let j = i + 1; j < len - 2; j++) {
            let left = j + 1;
            let right = len - 1;
            while(left < right) {
                let sum = nums[i] + nums[j] + nums[left] + nums[right]; 
                if(sum == target) {
                    result[[nums[i],nums[j], nums[left],nums[right]]] = [nums[i],nums[j],nums[left],nums[right]]
                    left++;
                    right--;
                }
                else if(sum > target) {
                    right--;
                } else if(sum < target) {
                    left++;
                }

            }
        }
    }

    return Object.values(result);
};

/*
Time Complexity:

The outer loop runs in O(n) time, where n is the length of the array nums.
The two nested loops (left and right pointers) contribute to a time complexity of O(n^2).
The sorting step takes O(n log n) time.
The overall time complexity is O(n^3 + n log n). In the worst case, the dominating factor is O(n^3).
Space Complexity:

The space complexity is determined by the result array, which may store unique quadruplets.
In the worst case, the number of unique quadruplets is limited, so the space complexity is O(1).
However, if the number of unique quadruplets is proportional to the input size, the space complexity would be O(n).
In summary:

Time Complexity: O(n^3 + n log n)
Space Complexity: O(1) or O(n), depending on the uniqueness of quadruplets.


*/

