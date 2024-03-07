const maxSubArrayLen = (nums, k) => {
    const sumMap = new Map();
    let maxLen = 0;
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];

        // If the sum equals k, the entire subarray up to this index is a solution
        if (sum === k) {
            maxLen = i + 1;
        }

        //If the difference (sum - k) has been seen before, update maxLen
        //If the running sum - target seen before then the between numbers are equal to the target k.  
        // Then subtract the  current index i with the value of previous index in hash map.   i - sumMap.get(sum - k)
        if (sumMap.has(sum - k)) {
            maxLen = Math.max(maxLen, i - sumMap.get(sum - k));
        }

        // Store the index of the current sum if it hasn't been seen before   Map { value : index  }
        if (!sumMap.has(sum)) {
            sumMap.set(sum, i);
        }
    }

    return maxLen;
};

// Test case
const nums = [1, -1, 5, -2, 3];
const k = 3;
console.log(maxSubArrayLen(nums, k)); // Output: 4

/*
Time Complexity (O(n)) 
Map(3) { -2 => 0, -3 => 1, -1 => 2 } 3
map = {
1 => 0,
0 => 1,
5 => 2,
3 => 3,
6 => 4
}
*/


/*
Test Case : 2
map = {
-2 : 0,
-3 : 1,
-1 : 2
0 : 3 
}

[0 1 2]
[-2+(-1)+(2)] = 1

const nums2 = [-2,-1,2,1];
const k2 = 1;
console.log(maxSubArrayLen(nums2, k2)); // Output: 2

*/