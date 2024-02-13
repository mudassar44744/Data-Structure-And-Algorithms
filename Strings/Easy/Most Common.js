//LeetCode : https://leetcode.com/problems/most-common-word/description/?ref=devbull.xyz
function mostCommon(paragraph, banned) {
    //return the most frequent word in the paragraph
    //move to the lowercase
    //return the word that are frequent, use map and count the words and return the most 
    let map = {};
    paragraph = paragraph.replace(/[^a-zA-Z]/g, " ").split(" ");
    for(let i = 0; i < paragraph.length; i++) {
        let word = paragraph[i].toLowerCase();
        if(!banned.includes(word) && word !== '') {
            map[word] ? map[word] += 1 : map[word] = 1;
        }
    }
    //sort the values decreasingly return the word values, change the value into.
    
    let values = Object.keys(map).map(key => [map[key],key]).sort((a,b)=> b[0] - a[0]);
    return values[0][1]

}


console.log(
    mostCommon("Bob hit a ball, the hit BALL flew far after it was hit.",["hit"])
)