//LeetCode : https://leetcode.com/problems/reorganize-string/description/
//https://leetcode.com/problems/reorganize-string/solutions/1205821/easy-to-understand-and-readable-with-without-sorting/


var reorganizeString = function(s) {
    const map = new Map();
	// 1. building map
    s.split('').forEach((letter)=>{
        map.set(letter,map.get(letter)+1||1);
    })
	
	// 1. sorting the map based on the occurances in descending order.
    const sortedMap = new Map([...map.entries()].sort((a,b)=>b[1]-a[1]));
    
	// 2. getting the first value of sorted map and checking if greater than half of string length
    if(sortedMap.values().next().value > (s.length+1)/2) return "";
    
    const res=[];
    let index=0;
    
    for(let [key,value] of sortedMap){
        while(value--){
			// 5. if it reaches the end of string, start filling from odd position.
            if(index>=s.length) index=1;
			// 4. adding elements at even position.
            res[index]=key
            index+=2
        }
    }
	// converting array back to string
    return res.join('');
};