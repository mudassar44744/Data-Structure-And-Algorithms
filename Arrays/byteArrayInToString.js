/**
The parseInt method parses a value as a string and returns the first integer.
A radix parameter specifies the number system to use:
2 = binary, 8 = octal, 10 = decimal, 16 = hexadecimal.
If radix is omitted, JavaScript assumes radix 10. If the value begins with "0x", JavaScript assumes radix 16.
 */


function bin2String(array) {
    var result = "";
    for (var i = 0; i < array.length; i++) {
      result += String.fromCharCode(parseInt(array[i], 2));
    }
    return result;
  }
  
bin2String(["01100110", "01101111", "01101111"]); // "foo"
  
//Using your string2Bin function to test:
//bin2String(string2Bin("hello world")) === "hello world";


