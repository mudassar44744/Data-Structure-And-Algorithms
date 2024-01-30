// Leetcode: https://leetcode.com/problems/duplicate-zeros/

const insertZero = (arr: Array<number>, position: number): void => {
        for (let i: number = arr.length - 2; i >= position; i--) {
                arr[i + 1] = arr[i];
        }
        arr[position] = 0;
};

const duplicateZeros = (arr: Array<number>): void => {
        for (let i: number = 0; i < arr.length - 1; i++) {
                if (arr[i] === 0) {
                        insertZero(arr, i + 1);
                        i++;
                }
        }
};


var duplicateZeros2 = function(arr) {
        for (var i=0; i<arr.length; i++) {
         if (arr[i] === 0) {
             arr.splice(i, 0, 0);
             arr.pop();
             i+=1
         }
     }
 };