/**
 * Leetcode : https://leetcode.com/problems/find-all-duplicates-in-an-array/description/
Function to find the duplicate items
How do you find duplicates from an unsorted array?
 */

function findDuplicates(array) {
    const countMap = {};
    const duplicates = [];
 
    for (let i = 0; i < array.length; i++) {
       const num = array[i];
       countMap[num] = (countMap[num] || 0) + 1;
    }
 
    for (const num in countMap) {
       if (countMap[num] > 1) {
      //   let obj = {
      //       number : num,
      //       length : countMap[num]
      //   }
          duplicates.push(num)
       }
    }
 
    return duplicates;
 }
 
 //Usage of the function
 const numbers = [1, 2, 3, 4, 4, 5, 6, 6, 7, 8, 8, 8];
 const result = findDuplicates(numbers);
 console.log(result);