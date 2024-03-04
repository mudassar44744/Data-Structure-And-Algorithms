/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);
    let i = 0;
    let j = 0;
    let intersection = [];
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] == nums2[j]) {
            intersection.push(nums1[i]);
            i++;
            j++
        } else if (nums1[i] < nums2[j]) {
            i++;
        } else {
            j++;
        }
    }
    return intersection;
};


console.log(
    intersect([4,9,5],[9,4,9,8,4])
)


/*
nums1 = [4,5,9]
nums2 = [4,4,8,9,9]



*/