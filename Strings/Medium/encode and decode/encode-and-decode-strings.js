//LeetCode : https://leetcode.com/problems/encode-and-decode-strings/description/
//https://www.designgurus.io/viewer/document/grokking-the-coding-interview/6529179fa061ba63c387f6b4

class Solution {
    encode(strs) {
      if(!strs.length) return null;
      let encoded = strs.join('encode');
      // ToDo: Write Your Code Here.
      return encoded;
    }
    
    decode(s) {
      if(s === null) return [];
      let res = s.split('encode');
      // ToDo: Write Your Code Here.
      return res;
    }
  }
  