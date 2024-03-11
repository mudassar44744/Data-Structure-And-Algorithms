//Leet Code Problems
//https://leetcode.com/problems/find-all-anagrams-in-a-string/description/
//https://leetcode.com/problems/find-all-anagrams-in-a-string/solutions/1025753/simplest-sliding-window-solution-o-n-heavily-commented-javascript/

var findAnagrams = function(s, p) {
    let map = {};
    for(let c of p) {
        map[c] = (map[c] || 0) + 1;
    }
 
    let r = 0, l = 0, count = 0;
    let res = new Array();
 
    while(r < s.length) {
        if(map[s[r]] > 0) {
            count++;
        }
        map[s[r]]--;
        r++;
    
      if(count == p.length) res.push(l);
 
      if(r - l == p.length) {
          if(map[s[l]] >= 0) count--;
          map[s[l]]++;
          l++
      }
    }
 
 
    return res;
    
}

console.log(
    findAnagrams("cbaebabacd","abc")
)