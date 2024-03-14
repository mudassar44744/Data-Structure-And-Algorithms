


function checkSpecialInteger(array) {

let maxValue = Math.max.apply(null, array);
for(let i = 1; i <= maxValue; i++) {  
    if(!array.includes(i)) {
       let greaterItem =  array.filter((value)=> value > i);
       if(greaterItem.length >= i) return i;
    }
}
return -1;
}

console.log(checkSpecialInteger([0,4,1,0,4]))


/*
Time Complexity : O(n) 2
Space complexity : O(n)
*/