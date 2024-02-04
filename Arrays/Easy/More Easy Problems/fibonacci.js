/**
 * Write a program to generate the fibonacci of that number.
 * Also, check that number is fibonacci or not.
 */

fibonacci(8);
// 0 1 1 2 3 5 8;

function fibonacci(n) {
    
    let n1 = 0;
    let n2 = 1;
    console.log(n1);
    console.log(n2);
    let i = 2;
    let next;
    while(i <= n) {
        next = n1 + n2;
        console.log(next);
        n1 = n2;
        n2 = next; 
        // if(next == n) {
        //     console.log('fibonacci number',next);
        // }
        i++;
    }
}