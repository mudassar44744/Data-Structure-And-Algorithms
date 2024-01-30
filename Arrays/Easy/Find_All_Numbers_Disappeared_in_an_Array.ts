// Leetcode: https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/

var findDisappearedNumbers = function (nums: Array<number>): Array<number> {
        var result: Array<number> = [];
        var hash_table: {
                [key: number]: boolean;
        } = {};

        for (let i: number = 0; i < nums.length; i++) {
                if (nums[i] in hash_table) {
                        continue;
                } else {
                        hash_table[nums[i]] = true;
                }
        }
        for (let i: number = 1; i <= nums.length; i++) {
                if (!hash_table[i]) {
                        result.push(i);
                }
        }

        return result;
};

//JS Solution

var findDisappearedNumbers2 = function(nums) {
        let allUniNum = {};
        let result:Number[] = [];
        for(let i = 0; i < nums.length; i++) {
            if(nums[i] in allUniNum) {
                continue;
            } else {
                allUniNum[nums[i]] = true;
            }
        }
        for(let j:number = 1; j <= nums.length; j++) {
        if(!allUniNum[j]) 
        {
                result.push(j);
        }    
        }
        return result;
    };