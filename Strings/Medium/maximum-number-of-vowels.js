//LeetCode : https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/description/

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    let maxCount=0,count=0;
    const vowel=['a',"e", "i", "o", "u"]
    for(let i=0;i<s.length;i++)
    {
        if(vowel.includes(s[i]))   count++

        if(i>=k && vowel.includes(s[i-k])) count--

        if(count==k)
        return k;

   
        if(maxCount<count)
        maxCount=count
    }
    return maxCount
};




    
var maxVowels2 = function(s, k) {
    let vowelSet = new Set(['a','e','i','o','u']);
    let count = 0;
    let maxCount = 0;
    for(let i = 0; i < s.length; i++) {
        let char = s[i];

       if(vowelSet.has(char)) {
            count++;
        }
        if(i >= k && vowelSet.has(s[i - k])) count--;   
        if(count === k) return k;
        maxCount = Math.max(count,maxCount);
    }

    return maxCount;

};

console.log(
    maxVowels("leetcode",3)
)