//https://www.hackerrank.com/challenges/plus-minus/problem

/*
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    
    let negativeNumLen = 0;
    let positiveNumLen = 0;
    let zeroNumLen = 0;
    let n = arr.length;
    
    arr.forEach((item)=>{
        if(item == 0) zeroNumLen++;
        if(item < 0) negativeNumLen++;
        if(item > 0) positiveNumLen++;
    })
    
   console.log(Number(positiveNumLen / n).toPrecision(6));
   console.log(Number(negativeNumLen / n).toPrecision(6));
   console.log(Number(zeroNumLen / n).toPrecision(6));

}


plusMinus(arr);
