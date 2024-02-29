function sumZero(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] + arr[j] === 0){
                return [arr[i], arr[j]];
            }
        }
    }
}

//IF the array is sorted then we use divide and concure approach

function sumZeroRefactored(arr) {
    let left = 0;
    let right = arr.length - 1;
    for(let i = 0; i < arr.length; i++) {
        let sumZero = arr[left] + arr[right];

        if(sumZero === 0) return [arr[left],arr[right]];

        if(sumZero > 0) {
            right--;
        } else if(sumZero < 0) {
            left++;
        }

    }
    return null;
}


sumZeroRefactored([])

sumZero([-4,-3,-2,-1,0,1,2,5])

//multiple sumzero values