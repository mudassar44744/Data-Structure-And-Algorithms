//Write a program to find the factorial of the number.
//Iterative method

function factorial(number) {

if(number <= 0) return undefined;
let fact = 1;
for (let index = 1; index <= number; index++) {
    fact *= index; 
}
return fact;
}

//recursive method

let number = 4;
let value = recursiveFactorial(number);
console.log(value);

function recursiveFactorial(number) {
    
    if(number === 0) return 1;
    return   (number *  recursiveFactorial(number - 1));
}