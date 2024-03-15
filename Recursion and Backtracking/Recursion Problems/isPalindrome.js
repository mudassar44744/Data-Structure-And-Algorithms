// isPalindrome
// Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.
// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false


function test(str) {
  let left = 0;
  let right = str.length - 1;
  while(left <= right) {
    if(str[left] !== str[right]) return false;
    left++;
    right--;
  }

  return true;
}


function isPalindrome(str){
    // add whatever parameters you deem necessary - good luck!
    if(str.length === 1) return true;
    if(str.length === 2) return str[0] === str[1];
    if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1))
    return false;
  }

  var isPalindrome = function (string) {
    if (string == string.split('').reverse().join('')) {
        alert(string + ' is palindrome.');
    }
    else {
        alert(string + ' is not palindrome.');
    }
}

function isPalindrome(s) {
  var len = s.length;
  // definition clauses 1. and 2.
  if (len < 2) {
    return true;
  }
  // note: len >= 2
  // definition clause 3.
  if (s[0] != s[len - 1]) {
    return false;
  }
  // note: string is of form s = 'a' + t + 'a'
  // note: s.length >= 2 implies t.length >= 0
  var t = s.substr(1, len - 2);
  return isPalindrome(t);
}


// function test(s) {
//   print('isPalindrome(' + s + '): ' + isPalindrome(s));
// }
console.log(
test(''),
test('a'),
test('ab'),
test('aa'),
test('aab'),
test('aba'),
test('aaa'),
test('abaa'),
test('neilarmstronggnortsmralien'),
test('neilarmstrongxgnortsmralien'),
test('neilarmstrongxsortsmralien'))