# Leetcode: https://leetcode.com/problems/permutations/

class Solution:
        def permute(self, nums: List[int]) -> List[List[int]]:
                nums.sort()
                stack, result = [], []
                
                for num in nums:
                        stack.append( [num] )

                while stack:
                        item = stack.pop()
                        if len(item) == len(nums):
                                result.append(item)
                        else:
                                for num in nums:
                                        if num not in item:
                                                stack.append( item + [num] )
                return result