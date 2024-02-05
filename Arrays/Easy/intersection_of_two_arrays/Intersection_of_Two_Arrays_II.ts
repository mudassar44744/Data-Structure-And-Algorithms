// Leetcode: https://leetcode.com/problems/intersection-of-two-arrays-ii/

const intersect = (nums1: Array<number>, nums2: Array<number>): Array<number> => {
        if (nums2.length > nums1.length) {
                return intersect(nums2, nums1);
        }
        nums1.sort((a, b) => a - b);
        nums2.sort((a, b) => a - b);

        var commonElements: Array<number> = [];
        var isIncluded: {
                [key: number]: boolean;
        } = {};

        for (let i: number = 0; i < nums1.length; i++) {
                for (let j: number = 0; j < nums2.length; j++) {
                        if (!isIncluded[j] && nums1[i] === nums2[j]) {
                                commonElements.push(nums1[i]);
                                isIncluded[j] = true;
                                break;
                        } else if (nums2[j] > nums1[i]) {
                                break;
                        }
                }
        }

        return commonElements;
};


/*
The time complexity of this solution is determined by the nested loops, where each element in nums1 is compared with each element in nums2. The sorting step has a time complexity of O(n log n), where n is the length of the longer array between nums1 and nums2.

Sorting Step:

Sorting nums1 and nums2 individually contributes O(n log n) to the time complexity.
Nested Loops:

The nested loops iterate through each element in nums1 and nums2.
In the worst case, each element in nums1 is compared with each element in nums2.
This results in a time complexity of O(n^2), where n is the length of the longer array.
Overall Time Complexity:

The dominant factor is the nested loops, so the overall time complexity is O(n^2).
In summary, the provided solution has a time complexity of O(n^2), where n is the length of the longer array between nums1 and nums2. The sorting step contributes O(n log n) to the overall time complexity.

Follow up:

What if the given array is already sorted? How would you optimize your algorithm?
What if nums1's size is small compared to nums2's size? Which algorithm is better?
Then set the nums'2 on the place of nums's 1 as set on the above solution
What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?
Using Two pointer approach.

*/
