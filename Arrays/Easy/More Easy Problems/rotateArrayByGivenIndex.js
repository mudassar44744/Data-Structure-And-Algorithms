//https://www.geeksforgeeks.org/array-rotation/
//https://leetcode.com/problems/rotate-array



function rotateArray(arr,n){
    if(n === 0){
      return console.log('PLEASE ENTER NUMBERS > 0')
    }
    for (var i = 0; i < n; i++) {
      let element = arr.pop();
      arr.unshift(element)
    }
    console.log(arr)
  }
  
  const myarr = [1,2,3,4,5]
  
  
  rotateArray(myarr,2)