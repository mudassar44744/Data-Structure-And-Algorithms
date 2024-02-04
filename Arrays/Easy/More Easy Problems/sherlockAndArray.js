// https://stackoverflow.com/questions/36937622/javascript-challenge-sherlock-and-array
// https://www.youtube.com/watch?v=tk48UaBH5ao&ab_channel=PatrickCodes
//https://www.hackerrank.com/challenges/sherlock-and-array


function balancedSums(arr) {
    // Write your code here
    let sum = arr.reduce((acc, val) => acc+val);
    let leftSum = 0;
    for(let i = 0; i < arr.length; i++){
        sum -= arr[i];
        if(sum === leftSum){
            return 'YES';
        };
        leftSum += arr[i];
    };
    return 'NO';
}



console.log(balancedSums([1,2,3,3]));

