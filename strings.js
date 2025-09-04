// 🟢 Easy Level

// 1. Reverse a string

// // O(n)
// function reverseString(s){
//   return s.split('').reverse().join('');
// }
// console.log(reverseString("hello")); // "olleh"

// 2. Check palindrome

// function isPalindrome(s){
//   const t = s.replace(/[^a-z0-9]/gi,'').toLowerCase();
//   let i=0,j=t.length-1;
//   while(i<j) if(t[i++]!==t[j--]) return false;
//   return true;
// }

// 3. Count vowels

// function countVowels(s){
//   return (s.match(/[aeiou]/gi) || []).length;
// }

// 4. First non-repeating character
// Return index of first non-repeating char or -1.

// function firstNonRepeatingChar(s){
//   const freq = {};
//   for(const c of s) freq[c]=(freq[c]||0)+1;
//   for(let i=0;i<s.length;i++) if(freq[s[i]]===1) return i;
//   return -1;
// }

// 5. Anagram check (same characters)
// Are "listen" and "silent" anagrams?

// function areAnagrams(a,b){
//   if(a.length!==b.length) return false;
//   const sort = x=>x.split('').sort().join('');
//   return sort(a)===sort(b);
// }
// console.log(areAnagrams("listen","silent")); // true

// 6. Remove duplicates (preserve order)
// "banana" → "ban".

// function removeDuplicates(s){
//   const seen = new Set(), res=[];
//   for(const c of s) if(!seen.has(c)){ seen.add(c); res.push(c); }
//   return res.join('');
// }
// console.log(removeDuplicates("banana")); // "ban"

// 7. Count words
// Count words separated by spaces (handles multiple spaces).

// function countWords(s){
//   const parts = s.trim().split(/\s+/);
//   return s.trim() ? parts.length : 0;
// }
// console.log(countWords(" Hello   world ")); // 2

// 8. Title case a sentence

// function titleCase(s){
//   return s.split(/\s+/).map(w=> w ? w[0].toUpperCase()+w.slice(1).toLowerCase() : '').join(' ');
// }
// console.log(titleCase("hello world from JAVASCRIPT")); // "Hello World From Javascript"

// 9. Check if substring
// Is "abc" a substring of "xxabcxx"?

// function isSubstring(s, sub){ return s.indexOf(sub)!==-1; }
// console.log(isSubstring("xxabcxx","abc")); // true

// 10. Repeat string n times
// Repeat "ab" 3 → "ababab".

// function repeatStr(s,n){ return s.repeat(n); }
// console.log(repeatStr("ab",3)); // "ababab"

// 11. Reverse words in a sentence

// function reverseWords(s){
//   return s.trim().split(/\s+/).reverse().join(' ');
// }

// 12. Check if two strings are rotations of each other
// "abcde" & "cdeab" → true.

// function isRotation(a,b){
//   return a.length===b.length && (a+a).includes(b);
// }

// 13. Find ASCII value sum of a string
// "ABC" → 65+66+67=198.

// function asciiSum(s){
//   return [...s].reduce((sum,c)=> sum+c.charCodeAt(0),0);
// }

// 14. Count uppercase & lowercase letters

// function countCase(s){
//   let upper=0, lower=0;
//   for(const c of s){
//     if(/[A-Z]/.test(c)) upper++;
//     if(/[a-z]/.test(c)) lower++;
//   }
//   return {upper,lower};
// }

// 15. Toggle case of characters
// "aBcD" → "AbCd".

// function toggleCase(s){
//   return [...s].map(c=>
//     c===c.toUpperCase()? c.toLowerCase():c.toUpperCase()
//   ).join('');
// }

// 16. Find largest word in a sentence

// function largestWord(s){
//   return s.split(/\s+/).reduce((a,b)=> a.length>=b.length?a:b,'');
// }

// 17. Count frequency of each character

// function charFrequency(s){
//   const map={};
//   for(const c of s) map[c]=(map[c]||0)+1;
//   return map;
// }

// 18. Print duplicate characters

// function duplicateChars(s){
//   const freq={}, res=[];
//   for(const c of s) freq[c]=(freq[c]||0)+1;
//   for(const [ch,count] of Object.entries(freq))
//     if(count>1) res.push(ch);
//   return res;
// }

// 19. Remove spaces from string

// function removeSpaces(s){ return s.replace(/\s+/g,''); }

// 20. Check if all characters are digits

// function isNumeric(s){ return /^\d+$/.test(s); }

// 21. Find most frequent character

// function mostFrequentChar(s){
//   const freq={}; let maxC='', maxF=0;
//   for(const c of s) freq[c]=(freq[c]||0)+1;
//   for(const [ch,f] of Object.entries(freq))
//     if(f>maxF){ maxC=ch; maxF=f; }
//   return maxC;
// }

// 22. Convert string to char array

// function toCharArray(s){ return [...s]; }

// 23. Replace spaces with %20 (URLify)

// function urlify(s){ return s.trim().replace(/\s+/g,'%20'); }

// 24. Remove given character from string

// function removeChar(s,ch){ return s.split(ch).join(''); }

// 25. Check if string contains only alphabets

// function isAlpha(s){ return /^[a-zA-Z]+$/.test(s); }

// 26. Count consonants

// function countConsonants(s){
//   return (s.match(/[^aeiou\s]/gi)||[]).length;
// }

// 27. Remove vowels

// function removeVowels(s){ return s.replace(/[aeiou]/gi,''); }

// 28. Find second most frequent character

// function secondMostFrequent(s){
//   const freq={};
//   for(const c of s) freq[c]=(freq[c]||0)+1;
//   const sorted = Object.entries(freq).sort((a,b)=>b[1]-a[1]);
//   return sorted[1] ? sorted[1][0] : null;
// }

// 29. Check if string starts & ends with same character

// function sameStartEnd(s){
//   return s.length>0 && s[0]===s[s.length-1];
// }

// 30. Swap first and last characters
// "hello" → "oellh".

// function swapFirstLast(s){
//   if(s.length<=1) return s;
//   return s[s.length-1] + s.slice(1,-1) + s[0];
// }

// 31. Count digits in a string
// "a1b22c" → 3.

// function countDigits(s){
//   return (s.match(/\d/g)||[]).length;
// }

// 32. Count special characters
// "abc@#12" → 2.

// function countSpecialChars(s){
//   return (s.match(/[^a-z0-9]/gi)||[]).length;
// }

// 33. Check if all characters are unique

// function allUnique(s){
//   return new Set(s).size === s.length;
// }

// 34. Remove first and last character

// function removeFirstLast(s){
//   return s.length<=2 ? '' : s.slice(1,-1);
// }

// 35. Concatenate two strings without + operator

// function concatStrings(a,b){
//   return a.concat(b);
// }

// 36. Reverse only words, keep order
// "I love JS" → "I evol SJ".

// function reverseEachWord(s){
//   return s.split(/\s+/).map(w=>[...w].reverse().join('')).join(' ');
// }

// 37. Replace vowels with *

// function replaceVowels(s){
//   return s.replace(/[aeiou]/gi,'*');
// }

// 38. Count substring occurrences
// "ababab","ab" → 3.

// function countSubstring(s,sub){
//   let i=0,count=0;
//   while((i=s.indexOf(sub,i))!==-1){ count++; i+=sub.length; }
//   return count;
// }

// 39. Check if string is pangram (contains all letters a–z)

// function isPangram(s){
//   return new Set(s.toLowerCase().match(/[a-z]/g)).size===26;
// }

// 40. Print all substrings

// function allSubstrings(s){
//   const res=[];
//   for(let i=0;i<s.length;i++)
//     for(let j=i+1;j<=s.length;j++)
//       res.push(s.slice(i,j));
//   return res;
// }

// 41. Find lexicographically smallest substring of length k

// function smallestSubstring(s,k){
//   let min=s.slice(0,k);
//   for(let i=1;i<=s.length-k;i++){
//     const sub=s.slice(i,i+k);
//     if(sub<min) min=sub;
//   }
//   return min;
// }

// 42. Find lexicographically largest substring of length k

// function largestSubstring(s,k){
//   let max=s.slice(0,k);
//   for(let i=1;i<=s.length-k;i++){
//     const sub=s.slice(i,i+k);
//     if(sub>max) max=sub;
//   }
//   return max;
// }

// 43. Reverse string without extra space (array method)

// function reverseInPlace(arr){
//   let l=0,r=arr.length-1;
//   while(l<r){ [arr[l],arr[r]]=[arr[r],arr[l]]; l++; r--; }
//   return arr;
// }
// // Example: reverseInPlace(['h','e','l','l','o'])

// 44. Count occurrences of each word

// function wordFrequency(s){
//   const map={};
//   for(const w of s.trim().split(/\s+/))
//     map[w]=(map[w]||0)+1;
//   return map;
// }

// 45. Remove consecutive duplicate characters
// "aaabbcdd" → "abcd".

// function removeConsecDup(s){
//   return s.replace(/(.)\1+/g,'$1');
// }

// 46. Find first repeated character

// function firstRepeated(s){
//   const seen=new Set();
//   for(const c of s){
//     if(seen.has(c)) return c;
//     seen.add(c);
//   }
//   return null;
// }

// 47. Find last repeated character

// function lastRepeated(s){
//   const seen=new Set(), repeated=new Set();
//   for(const c of s){
//     if(seen.has(c)) repeated.add(c);
//     else seen.add(c);
//   }
//   let ans=null;
//   for(const c of s) if(repeated.has(c)) ans=c;
//   return ans;
// }

// 48. Check if string has balanced number of vowels and consonants

// function balancedVC(s){
//   let v=0,c=0;
//   for(const ch of s.toLowerCase()){
//     if(/[aeiou]/.test(ch)) v++;
//     else if(/[a-z]/.test(ch)) c++;
//   }
//   return v===c;
// }

// 49. Convert string to snake_case
// "Hello World JS" → "hello_world_js".

// function toSnakeCase(s){
//   return s.trim().toLowerCase().replace(/\s+/g,'_');
// }

// 50. Convert string to kebab-case
// "Hello World JS" → "hello-world-js".

// function toKebabCase(s){
//   return s.trim().toLowerCase().replace(/\s+/g,'-');
// }

// 🟡 Medium Level

// 1. Longest common prefix
// Given ["flower","flow","flight"] → "fl".

// function longestCommonPrefix(arr){
//   if(!arr.length) return '';
//   let prefix = arr[0];
//   for(let i=1;i<arr.length;i++){
//     while(arr[i].indexOf(prefix)!==0) prefix = prefix.slice(0,-1);
//     if(!prefix) break;
//   }
//   return prefix;
// }
// console.log(longestCommonPrefix(["flower","flow","flight"])); // "fl"

// 2. Valid parentheses string (not only parentheses, but any bracket)
// Check ()[]{} validity.

// function isValid(s){
//   const map={')':'(',']':'[','}':'{'}, stack=[];
//   for(const c of s){
//     if('([{'.includes(c)) stack.push(c);
//     else {
//       if(stack.pop()!==map[c]) return false;
//     }
//   }
//   return stack.length===0;
// }
// console.log(isValid("()[]{}")); // true
// console.log(isValid("(]")); // false

// 3. Longest palindrome substring (expand around center)

// function longestPalSub(s){
//   if(!s) return '';
//   let start=0,end=0;
//   const expand=(l,r)=>{
//     while(l>=0 && r<s.length && s[l]===s[r]){ l--; r++; }
//     return r-l-1;
//   };
//   for(let i=0;i<s.length;i++){
//     let len1=expand(i,i), len2=expand(i,i+1), len=Math.max(len1,len2);
//     if(len> end-start+1){
//       start = i - Math.floor((len-1)/2);
//       end = i + Math.floor(len/2);
//     }
//   }
//   return s.slice(start,end+1);
// }
// console.log(longestPalSub("babad")); // "bab" or "aba"
// console.log(longestPalSub("cbbd")); // "bb"

// 4. Group anagrams
// ["eat","tea","tan","ate","nat","bat"] → groups.

// function groupAnagrams(arr){
//   const map=new Map();
//   for(const w of arr){
//     const key = w.split('').sort().join('');
//     if(!map.has(key)) map.set(key,[]);
//     map.get(key).push(w);
//   }
//   return Array.from(map.values());
// }
// console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"])); // [["eat","tea","ate"],["tan","nat"],["bat"]]

// 5. Longest substring without repeating characters

// function lengthOfLongestSubstring(s){
//   const last = {}; let start=0, max=0;
//   for(let i=0;i<s.length;i++){
//     if(last[s[i]]!==undefined && last[s[i]]>=start) start = last[s[i]]+1;
//     last[s[i]] = i;
//     max = Math.max(max, i-start+1);
//   }
//   return max;
// }
// console.log(lengthOfLongestSubstring("abcabcbb")); // 3 ("abc")
// console.log(lengthOfLongestSubstring("bbbbb")); // 1 ("b")
// console.log(lengthOfLongestSubstring("pwwkew")); // 3 ("wke")

// 6. Check if two strings are isomorphic

// function isIsomorphic(s,t){
//   const m1={}, m2={};
//   for(let i=0;i<s.length;i++){
//     if(m1[s[i]]===undefined) m1[s[i]] = t[i];
//     if(m2[t[i]]===undefined) m2[t[i]] = s[i];
//     if(m1[s[i]]!==t[i] || m2[t[i]]!==s[i]) return false;
//   }
//   return true;
// }
// console.log(isIsomorphic("egg","add")); // true
// console.log(isIsomorphic("foo","bar")); // false
// console.log(isIsomorphic("paper","title")); // true

// 7. Minimum window substring (brief version)
// Find min window in s containing all chars of t.

// function minWindow(s,t){
//   if(!s||!t) return '';
//   const need = {}, have = {};
//   for(const c of t) need[c]=(need[c]||0)+1;
//   let required = Object.keys(need).length, formed=0;
//   let l=0, r=0, minLen=Infinity, minL=0;
//   while(r<s.length){
//     const c = s[r];
//     have[c]=(have[c]||0)+1;
//     if(need[c] && have[c]===need[c]) formed++;
//     while(l<=r && formed===required){
//       if(r-l+1 < minLen){ minLen=r-l+1; minL=l; }
//       const cl=s[l];
//       have[cl]--; if(need[cl] && have[cl] < need[cl]) formed--;
//       l++;
//     }
//     r++;
//   }
//   return minLen===Infinity ? '' : s.slice(minL, minL+minLen);
// }
// console.log(minWindow("ADOBECODEBANC","ABC")); // "BANC"

// 8. String to integer (atoi)
// Parse string to 32-bit integer with sign and overflow handling.

// function myAtoi(str){
//   const s=str.trim();
//   const m = s.match(/^([+-]?\d+)/);
//   if(!m) return 0;
//   let num = BigInt(m[1]);
//   const INT_MAX = BigInt(2**31-1), INT_MIN = BigInt(-(2**31));
//   if(num>INT_MAX) return Number(INT_MAX);
//   if(num<INT_MIN) return Number(INT_MIN);
//   return Number(num);
// }
// console.log(myAtoi("   -42")); // -42
// console.log(myAtoi("4193 with words")); // 4193
// console.log(myAtoi("words and 987")); // 0
// console.log(myAtoi("-91283472332")); // -2147483648

// 9. Edit distance (Levenshtein) — dynamic programming

// function minDistance(a,b){
//   const m=a.length,n=b.length;
//   const dp = Array.from({length:m+1},()=>Array(n+1).fill(0));
//   for(let i=0;i<=m;i++) dp[i][0]=i;
//   for(let j=0;j<=n;j++) dp[0][j]=j;
//   for(let i=1;i<=m;i++){
//     for(let j=1;j<=n;j++){
//       if(a[i-1]===b[j-1]) dp[i][j]=dp[i-1][j-1];
//       else dp[i][j]=1+Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]);
//     }
//   }
//   return dp[m][n];
// }
// console.log(minDistance("kitten","sitting")); // 3

// 10. Word break (dictionary)
// Can s be segmented into space-separated words from dict?

// function wordBreak(s, wordDict){
//   const n=s.length, dp = Array(n+1).fill(false); dp[0]=true;
//   const set = new Set(wordDict);
//   for(let i=1;i<=n;i++){
//     for(let j=0;j<i;j++){
//       if(dp[j] && set.has(s.slice(j,i))){ dp[i]=true; break; }
//     }
//   }
//   return dp[n];
// }
// console.log(wordBreak("leetcode",["leet","code"])); // true
// console.log(wordBreak("applepenapple",["apple","pen"])); // true
// console.log(wordBreak("catsandog",["cats","dog","sand","and","cat"])); // false

// 11. Longest repeating substring
// "abcabcbb" → "abc".

// function longestRepeatingSubstring(s){
//   let n=s.length, res="";
//   for(let i=0;i<n;i++){
//     for(let j=i+1;j<=n;j++){
//       const sub=s.slice(i,j);
//       if(sub.length>res.length && s.indexOf(sub)!==s.lastIndexOf(sub))
//         res=sub;
//     }
//   }
//   return res;
// }

// 12. Find all permutations of a string

// function permute(s){
//   const res=[];
//   const dfs=(path,used)=>{
//     if(path.length===s.length){ res.push(path.join('')); return; }
//     for(let i=0;i<s.length;i++){
//       if(used[i]) continue;
//       used[i]=true; path.push(s[i]);
//       dfs(path,used);
//       path.pop(); used[i]=false;
//     }
//   };
//   dfs([],Array(s.length).fill(false));
//   return res;
// }

// 13. Check if string can be rearranged into a palindrome

// function canFormPalindrome(s){
//   const freq={};
//   for(const c of s) freq[c]=(freq[c]||0)+1;
//   let odd=0;
//   for(const v of Object.values(freq)) if(v%2!==0) odd++;
//   return odd<=1;
// }

// 14. Reverse words in-place
// "the sky is blue" → "blue is sky the".

// function reverseWordsInPlace(s){
//   return s.trim().split(/\s+/).reverse().join(' ');
// }

// 15. Add binary strings
// "1010"+"1011" → "10101".

// function addBinary(a,b){
//   let i=a.length-1,j=b.length-1,carry=0,res='';
//   while(i>=0||j>=0||carry){
//     let sum=carry;
//     if(i>=0) sum+=+a[i--];
//     if(j>=0) sum+=+b[j--];
//     res=(sum%2)+res;
//     carry=Math.floor(sum/2);
//   }
//   return res;
// }

// 16. Multiply two large numbers given as strings

// function multiplyStrings(a,b){
//   const m=a.length,n=b.length,res=Array(m+n).fill(0);
//   for(let i=m-1;i>=0;i--){
//     for(let j=n-1;j>=0;j--){
//       const mul=(a[i]-'0')*(b[j]-'0');
//       const sum=mul+res[i+j+1];
//       res[i+j+1]=sum%10;
//       res[i+j]+=Math.floor(sum/10);
//     }
//   }
//   return res.join('').replace(/^0+/,'')||'0';
// }

// 17. Find longest common subsequence

// function lcs(a,b){
//   const m=a.length,n=b.length;
//   const dp=Array.from({length:m+1},()=>Array(n+1).fill(0));
//   for(let i=1;i<=m;i++){
//     for(let j=1;j<=n;j++){
//       dp[i][j]=a[i-1]===b[j-1] ? 1+dp[i-1][j-1] : Math.max(dp[i-1][j],dp[i][j-1]);
//     }
//   }
//   return dp[m][n];
// }

// 18. Remove minimum characters to make anagram

// function minRemoveAnagram(a,b){
//   const freq={};
//   for(const c of a) freq[c]=(freq[c]||0)+1;
//   for(const c of b) freq[c]=(freq[c]||0)-1;
//   return Object.values(freq).reduce((sum,v)=>sum+Math.abs(v),0);
// }

// 19. Smallest window containing another string

// function minWindowSubstring(s,t){
//   const need={}, have={};
//   for(const c of t) need[c]=(need[c]||0)+1;
//   let l=0,r=0,formed=0,minLen=Infinity,start=0;
//   const required=Object.keys(need).length;
//   while(r<s.length){
//     let c=s[r];
//     have[c]=(have[c]||0)+1;
//     if(have[c]===need[c]) formed++;
//     while(formed===required){
//       if(r-l+1<minLen){minLen=r-l+1; start=l;}
//       have[s[l]]--; if(have[s[l]]<need[s[l]]) formed--;
//       l++;
//     }
//     r++;
//   }
//   return minLen===Infinity? "": s.slice(start,start+minLen);
// }

// 20. Convert Roman numeral to integer

// function romanToInt(s){
//   const map={I:1,V:5,X:10,L:50,C:100,D:500,M:1000};
//   let res=0;
//   for(let i=0;i<s.length;i++){
//     if(i<s.length-1 && map[s[i]]<map[s[i+1]]) res-=map[s[i]];
//     else res+=map[s[i]];
//   }
//   return res;
// }

// 21. Convert integer to Roman numeral

// function intToRoman(num){
//   const vals=[1000,900,500,400,100,90,50,40,10,9,5,4,1];
//   const syms=["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
//   let res='';
//   for(let i=0;i<vals.length;i++){
//     while(num>=vals[i]){ res+=syms[i]; num-=vals[i]; }
//   }
//   return res;
// }

// 22. Zigzag conversion
// "PAYPALISHIRING", 3 → "PAHNAPLSIIGYIR".

// function zigzag(s,numRows){
//   if(numRows===1) return s;
//   const rows=Array(Math.min(numRows,s.length)).fill('');
//   let cur=0,down=false;
//   for(const c of s){
//     rows[cur]+=c;
//     if(cur===0||cur===numRows-1) down=!down;
//     cur+= down?1:-1;
//   }
//   return rows.join('');
// }

// 23. Decode string (k[encoded])
// "3[a2[c]]" → "accaccacc".

// function decodeString(s){
//   const countStack=[], strStack=[];
//   let curr='', num=0;
//   for(const c of s){
//     if(/\d/.test(c)) num=num*10+Number(c);
//     else if(c==='['){ countStack.push(num); strStack.push(curr); num=0; curr=''; }
//     else if(c===']'){ const times=countStack.pop(); curr=strStack.pop()+curr.repeat(times); }
//     else curr+=c;
//   }
//   return curr;
// }

// 24. Longest substring with at most K distinct characters

// function lengthOfLongestKDistinct(s,k){
//   const freq={}; let l=0,max=0;
//   for(let r=0;r<s.length;r++){
//     freq[s[r]]=(freq[s[r]]||0)+1;
//     while(Object.keys(freq).length>k){
//       freq[s[l]]--; if(freq[s[l]]===0) delete freq[s[l]];
//       l++;
//     }
//     max=Math.max(max,r-l+1);
//   }
//   return max;
// }

// 25. Rotate string by k characters
// "abcdef",2 → "cdefab".

// function rotateString(s,k){
//   k%=s.length;
//   return s.slice(k)+s.slice(0,k);
// }

// 26. Find smallest substring with all vowels

// function smallestVowelSubstring(s){
//   const need={a:1,e:1,i:1,o:1,u:1};
//   const have={}; let l=0,formed=0,minLen=Infinity,res='';
//   while(l<s.length){
//     for(let r=l;r<s.length;r++){
//       have[s[r]]=(have[s[r]]||0)+1;
//       if(need[s[r]] && have[s[r]]===1) formed++;
//       if(formed===5){
//         if(r-l+1<minLen){ minLen=r-l+1; res=s.slice(l,r+1);}
//         break;
//       }
//     }
//     have[s[l]]--; if(need[s[l]] && have[s[l]]===0) formed--;
//     l++;
//   }
//   return res;
// }

// 27. Find maximum occurring word in sentence

// function maxWord(s){
//   const words=s.trim().split(/\s+/);
//   const freq={}; let maxW='',maxF=0;
//   for(const w of words){ freq[w]=(freq[w]||0)+1; if(freq[w]>maxF){maxW=w; maxF=freq[w];} }
//   return maxW;
// }

// 28. Remove invalid parentheses (make valid string)

// function minRemoveToMakeValid(s){
//   const arr=[...s]; let bal=0;
//   for(let i=0;i<arr.length;i++){
//     if(arr[i]==='(') bal++;
//     else if(arr[i]===')'){
//       if(bal===0) arr[i]='';
//       else bal--;
//     }
//   }
//   for(let i=arr.length-1;i>=0 && bal>0;i--){
//     if(arr[i]==='('){ arr[i]=''; bal--; }
//   }
//   return arr.join('');
// }

// 29. Find longest word in dictionary that is subsequence of string

// function findLongestWord(s,d){
//   let res='';
//   function isSub(a,b){
//     let i=0,j=0;
//     while(i<a.length&&j<b.length){ if(a[i]===b[j]) i++; j++; }
//     return i===a.length;
//   }
//   for(const w of d){
//     if(isSub(w,s)){
//       if(w.length>res.length || (w.length===res.length && w<res)) res=w;
//     }
//   }
//   return res;
// }

// 30. Count palindromic substrings

// function countPalSubstrings(s){
//   let count=0;
//   const expand=(l,r)=>{
//     while(l>=0&&r<s.length&&s[l]===s[r]){ count++; l--; r++; }
//   };
//   for(let i=0;i<s.length;i++){
//     expand(i,i); expand(i,i+1);
//   }
//   return count;
// }

// 31. Check if two strings are scrambled (recursive DP)

// function isScramble(s1,s2){
//   if(s1===s2) return true;
//   if(s1.length!==s2.length) return false;
//   const key=s1+"#"+s2;
//   const memo={};
//   if(memo[key]!==undefined) return memo[key];
//   const n=s1.length;
//   for(let i=1;i<n;i++){
//     if(
//       (isScramble(s1.slice(0,i),s2.slice(0,i)) && isScramble(s1.slice(i),s2.slice(i))) ||
//       (isScramble(s1.slice(0,i),s2.slice(n-i)) && isScramble(s1.slice(i),s2.slice(0,n-i)))
//     ) return memo[key]=true;
//   }
//   return memo[key]=false;
// }

// 32. Shortest palindrome by adding characters in front

// function shortestPalindrome(s){
//   let rev=[...s].reverse().join('');
//   for(let i=0;i<s.length;i++){
//     if(s.startsWith(rev.slice(i))) return rev.slice(0,i)+s;
//   }
//   return '';
// }

// 33. Reorganize string so no two adjacent chars are same

// function reorganizeString(s){
//   const freq={}, arr=[];
//   for(const c of s) freq[c]=(freq[c]||0)+1;
//   for(const [ch,f] of Object.entries(freq)) arr.push([f,ch]);
//   arr.sort((a,b)=>b[0]-a[0]);
//   if(arr[0][0]>(s.length+1)/2) return "";
//   const res=Array(s.length);
//   let i=0;
//   for(const [f,ch] of arr){
//     for(let k=0;k<f;k++){
//       if(i>=s.length) i=1;
//       res[i]=ch; i+=2;
//     }
//   }
//   return res.join('');
// }

// 34. Split binary string into substrings with equal 0s and 1s

// function splitBinary(s){
//   let c0=0,c1=0,count=0;
//   for(const ch of s){
//     if(ch==='0') c0++; else c1++;
//     if(c0===c1) count++;
//   }
//   return count;
// }

// 35. Reverse string keeping special characters at place
// "a,b$c" → "c,b$a".

// function reverseKeepSpecial(s){
//   let arr=[...s], i=0,j=s.length-1;
//   while(i<j){
//     if(!/[a-zA-Z]/.test(arr[i])) i++;
//     else if(!/[a-zA-Z]/.test(arr[j])) j--;
//     else { [arr[i],arr[j]]=[arr[j],arr[i]]; i++; j--; }
//   }
//   return arr.join('');
// }

// 36. Remove all duplicates, keep last occurrence
// "banana" → "bna".

// function removeKeepLast(s){
//   const seen=new Set(), res=[];
//   for(let i=s.length-1;i>=0;i--){
//     if(!seen.has(s[i])){ seen.add(s[i]); res.push(s[i]); }
//   }
//   return res.reverse().join('');
// }

// 37. Find longest prefix which is also suffix

// function longestPrefixSuffix(s){
//   const n=s.length;
//   for(let len=n-1;len>0;len--){
//     if(s.slice(0,len)===s.slice(n-len)) return s.slice(0,len);
//   }
//   return '';
// }

// 38. Smallest subsequence of distinct characters

// function smallestSubsequence(s){
//   const last={}, stack=[], seen=new Set();
//   for(let i=0;i<s.length;i++) last[s[i]]=i;
//   for(let i=0;i<s.length;i++){
//     const c=s[i];
//     if(seen.has(c)) continue;
//     while(stack.length && stack[stack.length-1]>c && last[stack[stack.length-1]]>i){
//       seen.delete(stack.pop());
//     }
//     stack.push(c); seen.add(c);
//   }
//   return stack.join('');
// }

// 39. Check if string is subsequence of another

// function isSubsequence(s,t){
//   let i=0,j=0;
//   while(i<s.length && j<t.length){ if(s[i]===t[j]) i++; j++; }
//   return i===s.length;
// }

// 40. Count binary substrings with equal 0s and 1s

// function countBinarySubstrings(s){
//   let prev=0,curr=1,res=0;
//   for(let i=1;i<s.length;i++){
//     if(s[i]===s[i-1]) curr++;
//     else { res+=Math.min(prev,curr); prev=curr; curr=1; }
//   }
//   return res+Math.min(prev,curr);
// }

// 41. Find smallest subsequence that is palindrome

// function smallestPalSubseq(s){
//   for(let i=0;i<s.length-1;i++){
//     if(s[i]===s[i+1]) return s[i]+s[i+1];
//   }
//   return s[0];
// }

// 42. Count distinct substrings

// function countDistinctSubstrings(s){
//   const set=new Set();
//   for(let i=0;i<s.length;i++){
//     for(let j=i+1;j<=s.length;j++){
//       set.add(s.slice(i,j));
//     }
//   }
//   return set.size;
// }

// 43. Find minimum index of character to delete to make palindrome

// function minDelIndexPalindrome(s){
//   let l=0,r=s.length-1;
//   while(l<r){
//     if(s[l]!==s[r]){
//       if([...s.slice(l,r)].reverse().join('')===s.slice(l,r)) return r;
//       if([...s.slice(l+1,r+1)].reverse().join('')===s.slice(l+1,r+1)) return l;
//       return -1;
//     }
//     l++; r--;
//   }
//   return -1;
// }

// 44. Find next lexicographic permutation of string

// function nextPermutation(s){
//   let arr=[...s], i=arr.length-2;
//   while(i>=0 && arr[i]>=arr[i+1]) i--;
//   if(i<0) return arr.reverse().join('');
//   let j=arr.length-1;
//   while(arr[j]<=arr[i]) j--;
//   [arr[i],arr[j]]=[arr[j],arr[i]];
//   let left=i+1,right=arr.length-1;
//   while(left<right){ [arr[left],arr[right]]=[arr[right],arr[left]]; left++; right--; }
//   return arr.join('');
// }

// 45. Longest substring where each char appears at least k times

// function longestSubstringK(s,k){
//   if(s.length===0) return 0;
//   const freq={};
//   for(const c of s) freq[c]=(freq[c]||0)+1;
//   for(const [ch,f] of Object.entries(freq)){
//     if(f<k){
//       return Math.max(...s.split(ch).map(part=>longestSubstringK(part,k)));
//     }
//   }
//   return s.length;
// }

// 46. Find repeated DNA sequences (length 10)

// function findRepeatedDna(s){
//   const set=new Set(), res=new Set();
//   for(let i=0;i<=s.length-10;i++){
//     const sub=s.slice(i,i+10);
//     if(set.has(sub)) res.add(sub);
//     else set.add(sub);
//   }
//   return [...res];
// }

// 47. Check if two strings are rotations by reversing once

// function areRotations(s1,s2){
//   return s1.length===s2.length && (s1+s1).includes(s2);
// }

// 48. Longest happy prefix (same as border)

// function longestHappyPrefix(s){
//   const n=s.length, lps=Array(n).fill(0);
//   let len=0;
//   for(let i=1;i<n;i++){
//     while(len>0 && s[i]!==s[len]) len=lps[len-1];
//     if(s[i]===s[len]) len++;
//     lps[i]=len;
//   }
//   return s.slice(0,lps[n-1]);
// }

// 49. Count substrings with at least one vowel

// function countWithVowel(s){
//   const vowels=new Set('aeiou');
//   let count=0;
//   for(let i=0;i<s.length;i++){
//     for(let j=i+1;j<=s.length;j++){
//       if([...s.slice(i,j)].some(ch=>vowels.has(ch))) count++;
//     }
//   }
//   return count;
// }

// 50. Replace question marks with any char to avoid consecutive same
// "a?b?" → "acbd".

// function fillQuestionMarks(s){
//   let arr=[...s];
//   for(let i=0;i<arr.length;i++){
//     if(arr[i]==='?'){
//       for(let c of 'abc'){
//         if((i>0 && arr[i-1]===c)||(i<arr.length-1 && arr[i+1]===c)) continue;
//         arr[i]=c; break;
//       }
//     }
//   }
//   return arr.join('');
// }

// 🔴 Hard Level

// 1. Regular expression matching (with '.' and '*')
// Implement regex match for . and *.

// function isMatch(s,p){
//   const m=s.length,n=p.length;
//   const dp = Array.from({length:m+1},()=>Array(n+1).fill(false));
//   dp[0][0]=true;
//   for(let j=1;j<=n;j++){
//     if(p[j-1]==='*') dp[0][j] = dp[0][j-2];
//   }
//   for(let i=1;i<=m;i++){
//     for(let j=1;j<=n;j++){
//       if(p[j-1]==='.' || p[j-1]===s[i-1]) dp[i][j]=dp[i-1][j-1];
//       else if(p[j-1]==='*'){
//         dp[i][j]=dp[i][j-2] || ((p[j-2]==='.' || p[j-2]===s[i-1]) && dp[i-1][j]);
//       }
//     }
//   }
//   return dp[m][n];
// }
// console.log(isMatch("aab","c*a*b")); // true
// console.log(isMatch("mississippi","mis*is*p*.")); // false

// 2. Palindrome pairs
// Given list of words, find all index pairs [i,j] so words[i]+words[j] is palindrome.

// function palindromePairs(words){
//   const map = new Map();
//   words.forEach((w,i)=>map.set(w,i));
//   const res = [];
//   const isPal = s => {let l=0,r=s.length-1; while(l<r){ if(s[l++]!==s[r--]) return false;} return true;}
//   for(let i=0;i<words.length;i++){
//     const w = words[i];
//     for(let j=0;j<=w.length;j++){
//       const left = w.slice(0,j), right = w.slice(j);
//       const revLeft = left.split('').reverse().join('');
//       const revRight = right.split('').reverse().join('');
//       if(isPal(right) && map.has(revLeft) && map.get(revLeft)!==i) res.push([i,map.get(revLeft)]);
//       if(j>0 && isPal(left) && map.has(revRight) && map.get(revRight)!==i) res.push([map.get(revRight), i]);
//     }
//   }
//   return res;
// }
// console.log(palindromePairs(["bat","tab","cat"])); // [[0,1],[1,0]]
// console.log(palindromePairs(["abcd","dcba","lls","s","sssll"])); // [[0,1],[1,0],[3,2],[2,4]]

// 3. Minimum insertion to form a palindrome
// Convert string to palindrome with minimum insertions (use LCS).

// function minInsertions(s){
//   const t = s.split('').reverse().join('');
//   const n=s.length;
//   const dp = Array.from({length:n+1},()=>Array(n+1).fill(0));
//   for(let i=1;i<=n;i++) for(let j=1;j<=n;j++)
//     dp[i][j] = s[i-1]===t[j-1] ? dp[i-1][j-1]+1 : Math.max(dp[i-1][j], dp[i][j-1]);
//   return n - dp[n][n];
// }
// console.log(minInsertions("leetcode")); // 5

// 4. Maximum number of palindromic substrings after k swaps (advanced variant)
// (Here provide a greedy heuristic: count pairs) — simplified: maximum palindromic substrings by rearrangement is beyond short solution; present constructive approach: count odd frequency groups and decide swaps.

// function maxPalPartitions(s){
//   // heuristic: count freq; number of palindromic substrings maximized by splitting into single letters => length(s)
//   // For a more meaningful hard problem you'd implement custom logic; placeholder:
//   return s.length;
// }
// console.log(maxPalPartitions("ababa")); // 5
// console.log(maxPalPartitions("abc")); // 3

// (Note: this is a complex optimization; for contest versions you'd use DP/greedy per exact statement.)

// 5. Encode and decode strings (avoid delimiter collisions)
// Design encode/decode for list of strings.

// function encode(strs){
//   return strs.map(s=> s.length+'#'+s).join('');
// }
// function decode(s){
//   const res=[]; let i=0;
//   while(i<s.length){
//     let j=i;
//     while(s[j]!=='#') j++;
//     const len = Number(s.slice(i,j));
//     res.push(s.slice(j+1,j+1+len));
//     i = j+1+len;
//   }
//   return res;
// }
// console.log(encode(["hello","world"])); // "5#hello5#world"
// console.log(decode("5#hello5#world")); // ["hello","world"]

// 6. Word ladder (shortest transformation)

// function ladderLength(beginWord,endWord,wordList){
//   const set = new Set(wordList);
//   if(!set.has(endWord)) return 0;
//   let q=[beginWord], steps=1;
//   while(q.length){
//     const next=[];
//     for(const w of q){
//       if(w===endWord) return steps;
//       for(let i=0;i<w.length;i++){
//         for(let c=97;c<=122;c++){
//           const nw = w.slice(0,i) + String.fromCharCode(c) + w.slice(i+1);
//           if(set.has(nw)){ next.push(nw); set.delete(nw); }
//         }
//       }
//     }
//     q=next; steps++;
//   }
//   return 0;
// }
// console.log(ladderLength("hit","cog",["hot","dot","dog","lot","log","cog"])); // 5
// console.log(ladderLength("hit","cog",["hot","dot","dog","lot","log"])); // 0

// 7. Find all palindromic partitions

// function partition(s){
//   const res=[];
//   const isPal=(l,r)=>{
//     while(l<r) if(s[l++]!==s[r--]) return false;
//     return true;
//   };
//   const dfs=(start,cur)=>{
//     if(start===s.length){ res.push([...cur]); return; }
//     for(let end=start;end<s.length;end++){
//       if(isPal(start,end)){ cur.push(s.slice(start,end+1)); dfs(end+1,cur); cur.pop(); }
//     }
//   };
//   dfs(0,[]); return res;
// }

// 8. Minimum cuts for palindrome partitioning

// function minCut(s){
//   const n=s.length;
//   const dp = Array(n).fill(0);
//   const pal = Array.from({length:n},()=>Array(n).fill(false));
//   for(let i=n-1;i>=0;i--){
//     let min = Infinity;
//     for(let j=i;j<n;j++){
//       if(s[i]===s[j] && (j-i<2 || pal[i+1][j-1])){
//         pal[i][j]=true;
//         min = Math.min(min, j===n-1 ? 0 : 1+dp[j+1]);
//       }
//     }
//     dp[i]=min;
//   }
//   return dp[0];
// }
// console.log(minCut("aab")); // 1 ("aa","b")
// console.log(minCut("a")); // 0 ("a")
// console.log(minCut("ab")); // 1 ("a","b")

// 9. Smallest substring with all unique characters of s
// (Given s, find shortest substring that contains all distinct chars present in s)

// function smallestAllDistinct(s){
//   const distinct = new Set(s).size;
//   const freq = {}; let have=0,l=0,minLen=Infinity,ans='';
//   for(let r=0;r<s.length;r++){
//     freq[s[r]]=(freq[s[r]]||0)+1;
//     if(freq[s[r]]===1) have++;
//     while(have===distinct){
//       if(r-l+1 < minLen){ minLen=r-l+1; ans=s.slice(l,r+1); }
//       freq[s[l]]--; if(freq[s[l]]===0) have--;
//       l++;
//     }
//   }
//   return ans;
// }
// console.log(smallestAllDistinct("aabcbcdbca")); // "dbca"
// console.log(smallestAllDistinct("aaab")); // "a"
// console.log(smallestAllDistinct("abc")); // "abc"

// 10. Suffix array (build naive)

// function buildSuffixArray(s){
//   const arr = [];
//   for(let i=0;i<s.length;i++) arr.push([s.slice(i), i]);
//   arr.sort((a,b)=> a[0] < b[0] ? -1 : (a[0] > b[0] ? 1 : 0));
//   return arr.map(x=>x[1]);
// }
// console.log(buildSuffixArray("banana")); // [5,3,1,0,4,2] (suffixes in lex order)
// console.log(buildSuffixArray("abracadabra")); // [10,7,0,3,5,8,1,4,6,9,2]

// 11. Shortest superstring problem

// function shortestSuperstring(words){
//   const n=words.length;
//   const overlap=Array.from({length:n},()=>Array(n).fill(0));
//   for(let i=0;i<n;i++){
//     for(let j=0;j<n;j++){
//       if(i!==j){
//         for(let k=Math.min(words[i].length,words[j].length);k>0;k--){
//           if(words[i].endsWith(words[j].slice(0,k))){
//             overlap[i][j]=k; break;
//           }
//         }
//       }
//     }
//   }
//   const dp=Array.from({length:1<<n},()=>Array(n).fill(''));
//   for(let i=0;i<n;i++) dp[1<<i][i]=words[i];
//   for(let mask=1;mask<(1<<n);mask++){
//     for(let j=0;j<n;j++){
//       if(!(mask&(1<<j))) continue;
//       for(let i=0;i<n;i++){
//         if(i===j || !(mask&(1<<i))) continue;
//         const cand=dp[mask^(1<<j)][i]+words[j].slice(overlap[i][j]);
//         if(dp[mask][j]===''||cand.length<dp[mask][j].length) dp[mask][j]=cand;
//       }
//     }
//   }
//   let ans='';
//   for(const s of dp[(1<<n)-1]) if(ans===''||s.length<ans.length) ans=s;
//   return ans;
// }

// 12. Word ladder (transform start → end word with min steps)

// function ladderLength(beginWord,endWord,wordList){
//   const set=new Set(wordList);
//   if(!set.has(endWord)) return 0;
//   let q=[[beginWord,1]];
//   while(q.length){
//     let [word,steps]=q.shift();
//     if(word===endWord) return steps;
//     for(let i=0;i<word.length;i++){
//       for(let c=97;c<=122;c++){
//         const next=word.slice(0,i)+String.fromCharCode(c)+word.slice(i+1);
//         if(set.has(next)){
//           q.push([next,steps+1]);
//           set.delete(next);
//         }
//       }
//     }
//   }
//   return 0;
// }

// 13. Regular expression matching (., *)

// function isMatch(s,p){
//   const dp=Array.from({length:s.length+1},()=>Array(p.length+1).fill(false));
//   dp[0][0]=true;
//   for(let j=1;j<=p.length;j++) if(p[j-1]==='*') dp[0][j]=dp[0][j-2];
//   for(let i=1;i<=s.length;i++){
//     for(let j=1;j<=p.length;j++){
//       if(p[j-1]==='.'||p[j-1]===s[i-1]) dp[i][j]=dp[i-1][j-1];
//       else if(p[j-1]==='*'){
//         dp[i][j]=dp[i][j-2] || ((p[j-2]===s[i-1]||p[j-2]==='.') && dp[i-1][j]);
//       }
//     }
//   }
//   return dp[s.length][p.length];
// }

// 14. Wildcard matching (?, *)

// function isWildcard(s,p){
//   const dp=Array.from({length:s.length+1},()=>Array(p.length+1).fill(false));
//   dp[0][0]=true;
//   for(let j=1;j<=p.length;j++) if(p[j-1]==='*') dp[0][j]=dp[0][j-1];
//   for(let i=1;i<=s.length;i++){
//     for(let j=1;j<=p.length;j++){
//       if(p[j-1]==='?'||s[i-1]===p[j-1]) dp[i][j]=dp[i-1][j-1];
//       else if(p[j-1]==='*') dp[i][j]=dp[i-1][j]||dp[i][j-1];
//     }
//   }
//   return dp[s.length][p.length];
// }

// 15. Word break II (all sentences)

// function wordBreakAll(s,dict){
//   const set=new Set(dict), memo={};
//   function dfs(start){
//     if(memo[start]) return memo[start];
//     const res=[];
//     for(let end=start+1;end<=s.length;end++){
//       const word=s.slice(start,end);
//       if(set.has(word)){
//         if(end===s.length) res.push(word);
//         else{
//           const next=dfs(end);
//           for(const n of next) res.push(word+" "+n);
//         }
//       }
//     }
//     return memo[start]=res;
//   }
//   return dfs(0);
// }

// 16. Distinct subsequences count

// function numDistinct(s,t){
//   const m=s.length,n=t.length;
//   const dp=Array.from({length:m+1},()=>Array(n+1).fill(0));
//   for(let i=0;i<=m;i++) dp[i][0]=1;
//   for(let i=1;i<=m;i++){
//     for(let j=1;j<=n;j++){
//       dp[i][j]=dp[i-1][j];
//       if(s[i-1]===t[j-1]) dp[i][j]+=dp[i-1][j-1];
//     }
//   }
//   return dp[m][n];
// }

// 17. Minimum window subsequence

// function minWindowSubsequence(S,T){
//   let i=0,j=0,start=-1,len=Infinity;
//   while(i<S.length){
//     if(S[i]===T[j]){
//       j++;
//       if(j===T.length){
//         let end=i+1; j--;
//         while(j>=0){
//           if(S[i]===T[j]) j--;
//           i--;
//         }
//         i++;
//         j++;
//         if(end-i<len){ start=i; len=end-i; }
//       }
//     }
//     i++;
//   }
//   return start===-1? "": S.slice(start,start+len);
// }

// 18. Longest palindromic subsequence

// function longestPalSubseq(s){
//   const n=s.length;
//   const dp=Array.from({length:n},()=>Array(n).fill(0));
//   for(let i=n-1;i>=0;i--){
//     dp[i][i]=1;
//     for(let j=i+1;j<n;j++){
//       if(s[i]===s[j]) dp[i][j]=2+dp[i+1][j-1];
//       else dp[i][j]=Math.max(dp[i+1][j],dp[i][j-1]);
//     }
//   }
//   return dp[0][n-1];
// }

// 19. Edit distance (Levenshtein)

// function minDistance(word1,word2){
//   const m=word1.length,n=word2.length;
//   const dp=Array.from({length:m+1},()=>Array(n+1).fill(0));
//   for(let i=0;i<=m;i++) dp[i][0]=i;
//   for(let j=0;j<=n;j++) dp[0][j]=j;
//   for(let i=1;i<=m;i++){
//     for(let j=1;j<=n;j++){
//       if(word1[i-1]===word2[j-1]) dp[i][j]=dp[i-1][j-1];
//       else dp[i][j]=1+Math.min(dp[i-1][j],dp[i][j-1],dp[i-1][j-1]);
//     }
//   }
//   return dp[m][n];
// }

// 20. Count different palindromic subsequences

// function countPalSubseq(s){
//   const n=s.length, mod=1e9+7;
//   const dp=Array.from({length:n},()=>Array(n).fill(0));
//   for(let i=n-1;i>=0;i--){
//     dp[i][i]=1;
//     for(let j=i+1;j<n;j++){
//       if(s[i]===s[j]){
//         let l=i+1,r=j-1;
//         while(l<=r && s[l]!==s[i]) l++;
//         while(l<=r && s[r]!==s[i]) r--;
//         if(l>r) dp[i][j]=dp[i+1][j-1]*2+2;
//         else if(l===r) dp[i][j]=dp[i+1][j-1]*2+1;
//         else dp[i][j]=dp[i+1][j-1]*2-dp[l+1][r-1];
//       }else{
//         dp[i][j]=dp[i+1][j]+dp[i][j-1]-dp[i+1][j-1];
//       }
//       dp[i][j]=(dp[i][j]+mod)%mod;
//     }
//   }
//   return dp[0][n-1];
// }

// 21. Longest substring with balanced brackets

// function longestValidParentheses(s){
//   let stack=[-1], max=0;
//   for(let i=0;i<s.length;i++){
//     if(s[i]==='(') stack.push(i);
//     else{
//       stack.pop();
//       if(stack.length===0) stack.push(i);
//       else max=Math.max(max,i-stack[stack.length-1]);
//     }
//   }
//   return max;
// }

// 22. Serialize and deserialize string with escape chars

// function encode(strs){
//   return strs.map(s=>s.length+"#"+s).join('');
// }
// function decode(s){
//   let res=[],i=0;
//   while(i<s.length){
//     let j=i;
//     while(s[j]!=="#") j++;
//     let len=parseInt(s.slice(i,j));
//     res.push(s.slice(j+1,j+1+len));
//     i=j+1+len;
//   }
//   return res;
// }

// 23. Remove duplicate letters to make smallest lexicographic

// function removeDuplicateLetters(s){
//   const last={}, stack=[], seen=new Set();
//   for(let i=0;i<s.length;i++) last[s[i]]=i;
//   for(let i=0;i<s.length;i++){
//     const c=s[i];
//     if(seen.has(c)) continue;
//     while(stack.length && stack[stack.length-1]>c && last[stack[stack.length-1]]>i){
//       seen.delete(stack.pop());
//     }
//     stack.push(c); seen.add(c);
//   }
//   return stack.join('');
// }

// 24. Find repeated substring pattern

// function repeatedSubstringPattern(s){
//   return (s+s).slice(1,-1).includes(s);
// }

// 25. Longest substring with equal number of vowels and consonants

// function longestVowelConsonant(s){
//   const vowels=new Set("aeiou");
//   let diff=0,map={0:-1},max=0;
//   for(let i=0;i<s.length;i++){
//     if(vowels.has(s[i])) diff++;
//     else diff--;
//     if(diff in map) max=Math.max(max,i-map[diff]);
//     else map[diff]=i;
//   }
//   return max;
// }

// 26. Longest string chain

// function longestStrChain(words){
//   words.sort((a,b)=>a.length-b.length);
//   const dp={}, set=new Set(words);
//   let res=1;
//   for(const w of words){
//     dp[w]=1;
//     for(let i=0;i<w.length;i++){
//       const prev=w.slice(0,i)+w.slice(i+1);
//       if(dp[prev]) dp[w]=Math.max(dp[w],dp[prev]+1);
//     }
//     res=Math.max(res,dp[w]);
//   }
//   return res;
// }

// 27. Shortest palindrome by inserting characters anywhere

// function minInsertionsPalindrome(s){
//   const n=s.length;
//   const dp=Array.from({length:n},()=>Array(n).fill(0));
//   for(let len=2;len<=n;len++){
//     for(let i=0;i+len-1<n;i++){
//       let j=i+len-1;
//       if(s[i]===s[j]) dp[i][j]=dp[i+1][j-1];
//       else dp[i][j]=1+Math.min(dp[i+1][j],dp[i][j-1]);
//     }
//   }
//   return dp[0][n-1];
// }

// 28. Longest uncommon subsequence among strings

// function findLUSlength(strs){
//   strs.sort((a,b)=>b.length-a.length);
//   function isSub(a,b){
//     let i=0,j=0;
//     while(i<a.length && j<b.length){ if(a[i]===b[j]) i++; j++; }
//     return i===a.length;
//   }
//   for(let i=0;i<strs.length;i++){
//     let ok=true;
//     for(let j=0;j<strs.length;j++){
//       if(i!==j && isSub(strs[i],strs[j])){ ok=false; break; }
//     }
//     if(ok) return strs[i].length;
//   }
//   return -1;
// }

// 29. Find smallest substring that contains all characters with at least k frequency

// function smallestSubstringK(s,k){
//   let freq={}, l=0,res="",minLen=Infinity;
//   for(let r=0;r<s.length;r++){
//     freq[s[r]]=(freq[s[r]]||0)+1;
//     while(Object.values(freq).every(v=>v>=k)){
//       if(r-l+1<minLen){ minLen=r-l+1; res=s.slice(l,r+1); }
//       freq[s[l]]--; if(freq[s[l]]===0) delete freq[s[l]];
//       l++;
//     }
//   }
//   return res;
// }

// 30. Check if string is interleaving of two strings

// function isInterleave(s1,s2,s3){
//   if(s1.length+s2.length!==s3.length) return false;
//   const dp=Array.from({length:s1.length+1},()=>Array(s2.length+1).fill(false));
//   dp[0][0]=true;
//   for(let i=0;i<=s1.length;i++){
//     for(let j=0;j<=s2.length;j++){
//       if(i>0) dp[i][j]|=(dp[i-1][j] && s1[i-1]===s3[i+j-1]);
//       if(j>0) dp[i][j]|=(dp[i][j-1] && s2[j-1]===s3[i+j-1]);
//     }
//   }
//   return dp[s1.length][s2.length];
// }

// 31. Longest repeating non-overlapping substring

// function longestRepeatingNonOverlap(s){
//   const n=s.length;
//   let res="";
//   for(let len=n/2;len>=1;len--){
//     for(let i=0;i+2*len<=n;i++){
//       const a=s.slice(i,i+len), b=s.slice(i+len,i+2*len);
//       if(a===b && a.length>res.length) res=a;
//     }
//   }
//   return res;
// }

// 32. Count number of ways to decode string (1→A … 26→Z)

// function numDecodings(s){
//   if(!s||s[0]==="0") return 0;
//   const dp=Array(s.length+1).fill(0);
//   dp[0]=1; dp[1]=1;
//   for(let i=2;i<=s.length;i++){
//     if(s[i-1]!=="0") dp[i]+=dp[i-1];
//     const two=parseInt(s.slice(i-2,i));
//     if(two>=10 && two<=26) dp[i]+=dp[i-2];
//   }
//   return dp[s.length];
// }

// 33. Longest substring without repeating characters (optimized)

// function lengthOfLongestSubstring(s){
//   const map=new Map();
//   let left=0,max=0;
//   for(let right=0;right<s.length;right++){
//     if(map.has(s[right]) && map.get(s[right])>=left){
//       left=map.get(s[right])+1;
//     }
//     map.set(s[right],right);
//     max=Math.max(max,right-left+1);
//   }
//   return max;
// }

// 34. Encode and decode tiny URL (hash + map)

// class TinyURL {
//   constructor(){ this.map=new Map(); this.id=1; }
//   encode(longUrl){ this.map.set(this.id,longUrl); return "http://tiny/"+this.id++; }
//   decode(shortUrl){ return this.map.get(Number(shortUrl.split("/").pop())); }
// }

// 35. Longest palindromic substring using DP

// function longestPalindromeDP(s){
//   const n=s.length;
//   let dp=Array.from({length:n},()=>Array(n).fill(false));
//   let start=0,maxLen=1;
//   for(let i=0;i<n;i++) dp[i][i]=true;
//   for(let len=2;len<=n;len++){
//     for(let i=0;i+len-1<n;i++){
//       let j=i+len-1;
//       if(s[i]===s[j] && (len===2 || dp[i+1][j-1])){
//         dp[i][j]=true;
//         if(len>maxLen){ start=i; maxLen=len; }
//       }
//     }
//   }
//   return s.slice(start,start+maxLen);
// }

// 36. Smallest rotation string (lexicographically)

// function smallestRotation(s){
//   let ss=s+s, n=s.length, min=s;
//   for(let i=1;i<n;i++){
//     let cand=ss.slice(i,i+n);
//     if(cand<min) min=cand;
//   }
//   return min;
// }

// 37. Check if strings are isomorphic

// function isIsomorphic(s,t){
//   if(s.length!==t.length) return false;
//   const mapST={}, mapTS={};
//   for(let i=0;i<s.length;i++){
//     if((mapST[s[i]]&&mapST[s[i]]!==t[i]) || (mapTS[t[i]]&&mapTS[t[i]]!==s[i])) return false;
//     mapST[s[i]]=t[i]; mapTS[t[i]]=s[i];
//   }
//   return true;
// }

// 38. Find kth permutation of string

// function getPermutation(s,k){
//   const arr=[...s].sort();
//   const fact=[1];
//   for(let i=1;i<=arr.length;i++) fact[i]=fact[i-1]*i;
//   k--;
//   let res="";
//   for(let i=arr.length;i>0;i--){
//     let idx=Math.floor(k/fact[i-1]);
//     res+=arr[idx];
//     arr.splice(idx,1);
//     k%=fact[i-1];
//   }
//   return res;
// }

// 39. Rearrange string k distance apart

// function rearrangeString(s,k){
//   if(k===0) return s;
//   const freq={}, arr=[];
//   for(const c of s) freq[c]=(freq[c]||0)+1;
//   for(const [ch,f] of Object.entries(freq)) arr.push([f,ch]);
//   arr.sort((a,b)=>b[0]-a[0]);
//   const res=Array(s.length).fill(null);
//   let idx=0;
//   for(const [f,ch] of arr){
//     for(let i=0;i<f;i++){
//       let pos=(idx+i*k)%s.length;
//       while(res[pos]) pos=(pos+1)%s.length;
//       res[pos]=ch;
//     }
//     idx++;
//   }
//   return res.includes(null)? "": res.join('');
// }

// 40. Longest substring where each char appears even times

// function longestEvenFreq(s){
//   const map={0:-1}; let mask=0,max=0;
//   for(let i=0;i<s.length;i++){
//     let bit=s.charCodeAt(i)-97;
//     mask^=(1<<bit);
//     if(map[mask]!==undefined) max=Math.max(max,i-map[mask]);
//     else map[mask]=i;
//   }
//   return max;
// }

// 41. Shortest unique substring for each word

// function uniqueSubstring(words){
//   const res={};
//   for(const w of words){
//     for(let len=1;len<=w.length;len++){
//       for(let i=0;i+len<=w.length;i++){
//         const sub=w.slice(i,i+len);
//         let count=0;
//         for(const ww of words) if(ww.includes(sub)) count++;
//         if(count===1){ res[w]=sub; len=w.length+1; break; }
//       }
//     }
//   }
//   return res;
// }

// 42. Minimum delete operations to make two strings equal

// function minDelOperations(s1,s2){
//   const m=s1.length,n=s2.length;
//   const dp=Array.from({length:m+1},()=>Array(n+1).fill(0));
//   for(let i=1;i<=m;i++){
//     for(let j=1;j<=n;j++){
//       if(s1[i-1]===s2[j-1]) dp[i][j]=dp[i-1][j-1]+1;
//       else dp[i][j]=Math.max(dp[i-1][j],dp[i][j-1]);
//     }
//   }
//   return m+n-2*dp[m][n];
// }

// 43. Minimum insertions to make palindrome

// function minInsertions(s){
//   const n=s.length;
//   const dp=Array.from({length:n},()=>Array(n).fill(0));
//   for(let len=2;len<=n;len++){
//     for(let i=0;i+len-1<n;i++){
//       let j=i+len-1;
//       if(s[i]===s[j]) dp[i][j]=dp[i+1][j-1];
//       else dp[i][j]=1+Math.min(dp[i+1][j],dp[i][j-1]);
//     }
//   }
//   return dp[0][n-1];
// }

// 44. Longest valid substring with only two distinct chars

// function longestTwoDistinct(s){
//   const freq={}, k=2;
//   let l=0,max=0;
//   for(let r=0;r<s.length;r++){
//     freq[s[r]]=(freq[s[r]]||0)+1;
//     while(Object.keys(freq).length>k){
//       freq[s[l]]--; if(freq[s[l]]===0) delete freq[s[l]];
//       l++;
//     }
//     max=Math.max(max,r-l+1);
//   }
//   return max;
// }

// 45. Find smallest string with given numeric value (a=1,z=26)

// function getSmallestString(n,k){
//   let res=Array(n).fill('a'); k-=n;
//   let i=n-1;
//   while(k>0){
//     let add=Math.min(25,k);
//     res[i]=String.fromCharCode(97+add);
//     k-=add; i--;
//   }
//   return res.join('');
// }

// 46. Restore IP addresses from string

// function restoreIp(s){
//   const res=[];
//   function backtrack(start,parts){
//     if(parts.length===4 && start===s.length){ res.push(parts.join('.')); return; }
//     if(parts.length>=4) return;
//     for(let len=1;len<=3;len++){
//       if(start+len>s.length) break;
//       const part=s.slice(start,start+len);
//       if((part.length>1 && part[0]==="0")||+part>255) continue;
//       backtrack(start+len,[...parts,part]);
//     }
//   }
//   backtrack(0,[]);
//   return res;
// }

// 47. Longest duplicated substring

// function longestDupSubstring(s){
//   let mod=2**63-1, base=256;
//   let n=s.length, nums=[...s].map(c=>c.charCodeAt(0));
//   function search(L){
//     let h=0;
//     for(let i=0;i<L;i++) h=(h*base+nums[i])%mod;
//     let seen=new Set([h]);
//     let a=Math.pow(base,L,mod);
//     for(let i=1;i<n-L+1;i++){
//       h=(h*base-nums[i-1]*a+nums[i+L-1])%mod;
//       if(h<0) h+=mod;
//       if(seen.has(h)) return i;
//       seen.add(h);
//     }
//     return -1;
//   }
//   let l=1,r=n,ans="";
//   while(l<=r){
//     let mid=Math.floor((l+r)/2);
//     let idx=search(mid);
//     if(idx!==-1){ ans=s.slice(idx,idx+mid); l=mid+1; }
//     else r=mid-1;
//   }
//   return ans;
// }

// 48. Longest subsequence with at most k distinct characters

// function longestKDistinctSubseq(s,k){
//   const freq={}; let res="";
//   function backtrack(i,cur){
//     if(i===s.length){
//       let set=new Set(cur);
//       if(set.size<=k && cur.length>res.length) res=cur;
//       return;
//     }
//     backtrack(i+1,cur+s[i]);
//     backtrack(i+1,cur);
//   }
//   backtrack(0,"");
//   return res;
// }

// 49. Generate all balanced parentheses of n pairs

// function generateParenthesis(n){
//   const res=[];
//   function backtrack(cur,open,close){
//     if(cur.length===2*n){ res.push(cur); return; }
//     if(open<n) backtrack(cur+"(",open+1,close);
//     if(close<open) backtrack(cur+")",open,close+1);
//   }
//   backtrack("",0,0);
//   return res;
// }

// 50. Check if two strings are scramble strings (DP + recursion)

// function isScramble(s1,s2){
//   const memo={};
//   function dfs(a,b){
//     if(a===b) return true;
//     const key=a+"#"+b;
//     if(memo[key]!==undefined) return memo[key];
//     if(a.length!==b.length || [...a].sort().join('')!==[...b].sort().join('')) return memo[key]=false;
//     const n=a.length;
//     for(let i=1;i<n;i++){
//       if(dfs(a.slice(0,i),b.slice(0,i)) && dfs(a.slice(i),b.slice(i))) return memo[key]=true;
//       if(dfs(a.slice(0,i),b.slice(n-i)) && dfs(a.slice(i),b.slice(0,n-i))) return memo[key]=true;
//     }
//     return memo[key]=false;
//   }
//   return dfs(s1,s2);
// }

