function findLargestAndSmallest(nums) {
let sortedNums = nums.sort((a,b)=>{
  return a - b;
})

console.log("smallest", sortedNums[0]);
console.log("second smallest", sortedNums[1]);
console.log("largest", sortedNums[sortedNums.length - 1]);
console.log("second largest", sortedNums[sortedNums.length - 2]);

}

console.log(findLargestAndSmallest([1,3,5,6,9]));