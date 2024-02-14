/*
given a string s, return the reversed string where all characters that are not
a letter stay in the same place, and all
letters reverse their positions.
*/

// let str = 'Test1ng-Leet=code-Q!';
let str = 'ab-cd';


const isLetter = (c) => c.toLowerCase() !== c.toUpperCase();
// extract letter character
let letters = [...str].filter(c => isLetter(c));
// recreate a reversed string
let reversed = [...str].map((c) => isLetter(c) ? letters.pop() : c).join('');



console.log(str);
console.log(reversed);






