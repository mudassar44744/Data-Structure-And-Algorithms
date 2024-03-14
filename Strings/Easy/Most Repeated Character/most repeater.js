function checkMostRepeaterChar(str) {
    str = str.split('');
    let map = {};
    for(let i = 0; i < str.length; i++) {
        str[i] in map ? map[str[i]]++ : map[str[i]] = 1;  
    }
    let mostRepeaterChar = Object.keys(map).map((key) => [map[key],key]).sort((a,b) => b[0] - a[0]);
    return mostRepeaterChar[0][1]

}

console.log(
    checkMostRepeaterChar("aaaabbbTTTTTTkkkTTTkkk,,,,,,,,,,,,,,,,,,,,,,,,11111111111111111111111111111111111TTTkkkTTT")
)


function checkMostRepeaterChar(str) {
    if(str.length > 100) return "invalid string"

    let hashString = {};
    for(let i = 0; i < str.length; i++) {
        let char = str[i];
        if(/[A-Za-z]/.test(char))
        hashString[char] ? hashString[char]++ : hashString[char] = 1;
    }

    let mostRepeated = Object.keys(hashString).map((key)=> [hashString[key],key]).sort((a,b)=> b[0] - a[0]);

    return mostRepeated[0][1];
}

/*
Time Complexity o(n)
Space Complexity O(n)

*/