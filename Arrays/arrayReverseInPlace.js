//https://stackoverflow.com/questions/32418443/reverse-array-in-place


// Solution : 1

var reverseArrayInPlace = function (array) {
    var arrLength = array.length;
    for (i = 0; i < arrLength; i++) {
        //array.unshift(array.pop())
        array.splice(i, 0, array.pop());
    }
}


// Solution 2

var reverseArrayInPlace = function (array) {
    var arrLength = array.length;
    for (var i = 0; i < arrLength/2; i++) {
        var temp = array[i];
        array[i] = array[arrLength - 1 - i];
        array[arrLength - 1 - i] = temp;
    }
}