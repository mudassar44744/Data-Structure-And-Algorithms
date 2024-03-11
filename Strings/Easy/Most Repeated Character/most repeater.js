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
    checkMostRepeaterChar("aaaabbbTTTTTTkkkTTTkkkTTTkkkTTT")
)