// Leetcode: https://leetcode.com/problems/check-if-n-and-its-double-exist/

// var checkIfExist = (arr: Array<number>): boolean => {
//         let map: {
//                 [key: number]: boolean;
//         } = {};

//         for (let i: number = 0; i < arr.length; i++) {
//                 if (arr[i] * 2 in map || arr[i] / 2 in map) {
//                         return true;
//                 }
//                 map[arr[i]] = true;
//         }

//         return false;
// };
 
//with nested loop

var checkIfExist2 = function(arr) {
        let check = false;
        for(let i = 0; i < arr.length; i++){
            for(let j = i+1; j < arr.length; j++){
                if(arr[i] === 2 * arr[j] || arr[i] === (arr[j]/2)) check = true;
            }
        }  
        return check;
};


console.log(checkIfExist2([7,1,14,11]))