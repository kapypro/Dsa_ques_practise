// 🟢 Easy Level

// Q1: Find the Maximum Element in an Array

// function findMax(arr) {
//   return Math.max(...arr);
// }
// console.log(findMax([1, 5, 3, 9, 2])); // 9

// Q2: Find the Minimum Element in an Array

// function findMin(arr) {
//   return Math.min(...arr);
// }
// console.log(findMin([1, 5, 3, 9, 2])); // 1

// Q3: Reverse an Array

// function reverseArray(arr) {
//   return arr.reverse();
// }
// console.log(reverseArray([1, 2, 3, 4])); // [4,3,2,1]

// Q4: Check if Array is Sorted

// function isSorted(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < arr[i - 1]) return false;
//   }
//   return true;
// }
// console.log(isSorted([1, 2, 3, 4])); // true
// console.log(isSorted([1, 3, 2]));   // false

// Q5: Find Sum of Elements

// function sumArray(arr) {
//   return arr.reduce((sum, num) => sum + num, 0);
// }
// console.log(sumArray([1, 2, 3, 4])); // 10

// Q6: Find Average of Elements

// function averageArray(arr) {
//   return arr.reduce((a, b) => a + b, 0) / arr.length;
// }
// console.log(averageArray([2, 4, 6, 8])); // 5

// Q7: Count Occurrences of an Element

// function countOccurrences(arr, x) {
//   return arr.filter(el => el === x).length;
// }
// console.log(countOccurrences([1, 2, 2, 3, 2], 2)); // 3

// Q8: Find Index of an Element

// function findIndex(arr, x) {
//   return arr.indexOf(x);
// }
// console.log(findIndex([10, 20, 30], 20)); // 1

// Q9: Remove Duplicates from Array

// function removeDuplicates(arr) {
//   return [...new Set(arr)];
// }
// console.log(removeDuplicates([1, 2, 2, 3, 4, 4])); // [1,2,3,4]

// Q10: Merge Two Arrays

// function mergeArrays(arr1, arr2) {
//   return arr1.concat(arr2);
// }
// console.log(mergeArrays([1, 2], [3, 4])); // [1,2,3,4]

// Q11: Find Second Largest Element

// function secondLargest(arr) {
//   let unique = [...new Set(arr)].sort((a, b) => b - a);
//   return unique.length > 1 ? unique[1] : null;
// }
// console.log(secondLargest([10, 20, 4, 20, 10])); // 10

// Q12: Find Second Smallest Element

// function secondSmallest(arr) {
//   let unique = [...new Set(arr)].sort((a, b) => a - b);
//   return unique.length > 1 ? unique[1] : null;
// }
// console.log(secondSmallest([4, 2, 7, 2, 9])); // 4

// Q13: Check if Two Arrays are Equal

// function arraysEqual(a, b) {
//   if (a.length !== b.length) return false;
//   for (let i = 0; i < a.length; i++) {
//     if (a[i] !== b[i]) return false;
//   }
//   return true;
// }
// console.log(arraysEqual([1, 2, 3], [1, 2, 3])); // true

// Q14: Rotate Array Left by 1

// function rotateLeft(arr) {
//   arr.push(arr.shift());
//   return arr;
// }
// console.log(rotateLeft([1, 2, 3, 4])); // [2,3,4,1]

// Q15: Rotate Array Right by 1

// function rotateRight(arr) {
//   arr.unshift(arr.pop());
//   return arr;
// }
// console.log(rotateRight([1, 2, 3, 4])); // [4,1,2,3]

// Q16: Find Largest Sum of Subarray of Size K

// function maxSubarraySum(arr, k) {
//   let maxSum = 0;
//   for (let i = 0; i <= arr.length - k; i++) {
//     let sum = 0;
//     for (let j = i; j < i + k; j++) {
//       sum += arr[j];
//     }
//     maxSum = Math.max(maxSum, sum);
//   }
//   return maxSum;
// }
// console.log(maxSubarraySum([2, 1, 5, 1, 3, 2], 3)); // 9

// Q17: Find Missing Number in Array (1 to N)

// function missingNumber(arr, n) {
//   let expectedSum = (n * (n + 1)) / 2;
//   let actualSum = arr.reduce((a, b) => a + b, 0);
//   return expectedSum - actualSum;
// }
// console.log(missingNumber([1, 2, 4, 5], 5)); // 3

// Q18: Find All Pairs with Given Sum

// function pairSum(arr, target) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === target) {
//         result.push([arr[i], arr[j]]);
//       }
//     }
//   }
//   return result;
// }
// console.log(pairSum([1, 2, 3, 4, 5], 5)); // [[1,4],[2,3]]

// Q19: Find Intersection of Two Arrays

// function intersection(arr1, arr2) {
//   return arr1.filter(x => arr2.includes(x));
// }
// console.log(intersection([1, 2, 3], [2, 3, 4])); // [2,3]

// Q20: Find Union of Two Arrays

// function union(arr1, arr2) {
//   return [...new Set([...arr1, ...arr2])];
// }
// console.log(union([1, 2, 3], [2, 3, 4])); // [1,2,3,4]

// Q21: Find the Frequency of All Elements

// function frequencyCount(arr) {
//   let freq = {};
//   for (let num of arr) {
//     freq[num] = (freq[num] || 0) + 1;
//   }
//   return freq;
// }
// console.log(frequencyCount([1, 2, 2, 3, 3, 3]));
// // { '1': 1, '2': 2, '3': 3 }

// Q22: Find Duplicate Elements

// function findDuplicates(arr) {
//   let seen = new Set();
//   let duplicates = new Set();
//   for (let num of arr) {
//     if (seen.has(num)) duplicates.add(num);
//     else seen.add(num);
//   }
//   return [...duplicates];
// }
// console.log(findDuplicates([1, 2, 2, 3, 4, 4])); // [2,4]

// Q23: Find Unique Elements

// function findUnique(arr) {
//   let freq = {};
//   for (let num of arr) {
//     freq[num] = (freq[num] || 0) + 1;
//   }
//   return Object.keys(freq).filter(x => freq[x] === 1).map(Number);
// }
// console.log(findUnique([1, 2, 2, 3, 4, 4])); // [1,3]

// Q24: Move All Zeros to End

// function moveZeros(arr) {
//   let nonZero = arr.filter(x => x !== 0);
//   let zeros = Array(arr.length - nonZero.length).fill(0);
//   return [...nonZero, ...zeros];
// }
// console.log(moveZeros([0, 1, 0, 3, 12])); // [1,3,12,0,0]

// Q25: Find Longest Word in Array

// function longestWord(arr) {
//   return arr.reduce((a, b) => (a.length >= b.length ? a : b));
// }
// console.log(longestWord(["apple", "banana", "grapefruit", "kiwi"])); // "grapefruit"

// Q26: Convert Array to String

// function arrayToString(arr) {
//   return arr.join(", ");
// }
// console.log(arrayToString([1, 2, 3])); // "1, 2, 3"

// Q27: Convert String to Array

// function stringToArray(str) {
//   return str.split(" ");
// }
// console.log(stringToArray("I love coding")); // ["I","love","coding"]

// Q28: Find Largest Difference

// function largestDiff(arr) {
//   let min = Math.min(...arr);
//   let max = Math.max(...arr);
//   return max - min;
// }
// console.log(largestDiff([10, 3, 5, 20, 8])); // 17

// Q29: Find Kth Largest Element

// function kthLargest(arr, k) {
//   return [...new Set(arr)].sort((a, b) => b - a)[k - 1];
// }
// console.log(kthLargest([3, 2, 1, 5, 6, 4], 2)); // 5

// Q30: Find Kth Smallest Element

// function kthSmallest(arr, k) {
//   return [...new Set(arr)].sort((a, b) => a - b)[k - 1];
// }
// console.log(kthSmallest([7, 10, 4, 3, 20, 15], 3)); // 7

// Q31: Remove Negative Numbers

// function removeNegatives(arr) {
//   return arr.filter(num => num >= 0);
// }
// console.log(removeNegatives([1, -2, 3, -4, 5])); // [1,3,5]

// Q32: Replace Negative Numbers with Zero

// function replaceNegatives(arr) {
//   return arr.map(num => (num < 0 ? 0 : num));
// }
// console.log(replaceNegatives([1, -2, 3, -4])); // [1,0,3,0]

// Q33: Find Elements Greater than X

// function greaterThanX(arr, x) {
//   return arr.filter(num => num > x);
// }
// console.log(greaterThanX([1, 5, 8, 2], 4)); // [5,8]

// Q34: Find Elements Smaller than X

// function smallerThanX(arr, x) {
//   return arr.filter(num => num < x);
// }
// console.log(smallerThanX([10, 3, 7, 1], 5)); // [3,1]

// Q35: Remove Specific Element

// function removeElement(arr, x) {
//   return arr.filter(num => num !== x);
// }
// console.log(removeElement([1, 2, 3, 2, 4], 2)); // [1,3,4]

// Q36: Insert Element at Index

// function insertAt(arr, index, value) {
//   arr.splice(index, 0, value);
//   return arr;
// }
// console.log(insertAt([1, 2, 4], 2, 3)); // [1,2,3,4]

// Q37: Delete Element at Index

// function deleteAt(arr, index) {
//   arr.splice(index, 1);
//   return arr;
// }
// console.log(deleteAt([1, 2, 3, 4], 2)); // [1,2,4]

// Q38: Reverse String Array

// function reverseStrings(arr) {
//   return arr.map(str => str.split("").reverse().join(""));
// }
// console.log(reverseStrings(["abc", "def"])); // ["cba","fed"]

// Q39: Find Palindrome Words

// function palindromeWords(arr) {
//   return arr.filter(str => str === str.split("").reverse().join(""));
// }
// console.log(palindromeWords(["madam", "hello", "level"])); // ["madam","level"]

// Q40: Remove Vowels from Strings in Array

// function removeVowels(arr) {
//   return arr.map(str => str.replace(/[aeiou]/gi, ""));
// }
// console.log(removeVowels(["apple", "orange"])); // ["ppl","rng"]

// Q41: Count Even Numbers

// function countEvens(arr) {
//   return arr.filter(num => num % 2 === 0).length;
// }
// console.log(countEvens([1, 2, 3, 4, 6])); // 3

// Q42: Count Odd Numbers

// function countOdds(arr) {
//   return arr.filter(num => num % 2 !== 0).length;
// }
// console.log(countOdds([1, 2, 3, 4, 5])); // 3

// Q43: Find Even Numbers

// function evenNumbers(arr) {
//   return arr.filter(num => num % 2 === 0);
// }
// console.log(evenNumbers([1, 2, 3, 4])); // [2,4]

// Q44: Find Odd Numbers

// function oddNumbers(arr) {
//   return arr.filter(num => num % 2 !== 0);
// }
// console.log(oddNumbers([1, 2, 3, 4])); // [1,3]

// Q45: Check if Array Contains Duplicates

// function hasDuplicates(arr) {
//   return new Set(arr).size !== arr.length;
// }
// console.log(hasDuplicates([1, 2, 3, 2])); // true

// Q46: Find Common Elements in Multiple Arrays

// function commonElements(...arrays) {
//   return arrays.reduce((a, b) => a.filter(x => b.includes(x)));
// }
// console.log(commonElements([1, 2, 3], [2, 3, 4], [3, 2, 5])); // [2,3]

// Q47: Flatten 2D Array

// function flattenArray(arr) {
//   return arr.flat();
// }
// console.log(flattenArray([[1, 2], [3, 4], [5]])); // [1,2,3,4,5]

// Q48: Flatten Nested Array (Any Depth)

// function deepFlatten(arr) {
//   return arr.flat(Infinity);
// }
// console.log(deepFlatten([1, [2, [3, [4]]]])); // [1,2,3,4]

// Q49: Remove Falsey Values

// function removeFalsey(arr) {
//   return arr.filter(Boolean);
// }
// console.log(removeFalsey([0, 1, false, 2, "", 3])); // [1,2,3]

// Q50: Shuffle Array

// function shuffleArray(arr) {
//   return arr.sort(() => Math.random() - 0.5);
// }
// console.log(shuffleArray([1, 2, 3, 4, 5]));

// 🟡 Medium Level

// Q1: Kadane’s Algorithm – Maximum Subarray Sum

// function maxSubarraySum(arr) {
//   let maxSoFar = arr[0], currMax = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     currMax = Math.max(arr[i], currMax + arr[i]);
//     maxSoFar = Math.max(maxSoFar, currMax);
//   }
//   return maxSoFar;
// }
// console.log(maxSubarraySum([-2,1,-3,4,-1,2,1,-5,4])); // 6

// Q2: Find Leaders in an Array

// function leaders(arr) {
//   let n = arr.length;
//   let result = [];
//   let maxRight = arr[n-1];
//   result.push(maxRight);
//   for (let i = n-2; i >= 0; i--) {
//     if (arr[i] > maxRight) {
//       result.push(arr[i]);
//       maxRight = arr[i];
//     }
//   }
//   return result.reverse();
// }
// console.log(leaders([16, 17, 4, 3, 5, 2])); // [17,5,2]

// Q3: Stock Buy and Sell (Max Profit)

// function maxProfit(prices) {
//   let minPrice = Infinity, maxProfit = 0;
//   for (let price of prices) {
//     minPrice = Math.min(minPrice, price);
//     maxProfit = Math.max(maxProfit, price - minPrice);
//   }
//   return maxProfit;
// }
// console.log(maxProfit([7,1,5,3,6,4])); // 5

// Q4: Rearrange Positive and Negative Numbers Alternately

// function rearrange(arr) {
//   let pos = arr.filter(x => x >= 0);
//   let neg = arr.filter(x => x < 0);
//   let result = [];
//   let i = 0;
//   while (i < pos.length || i < neg.length) {
//     if (i < pos.length) result.push(pos[i]);
//     if (i < neg.length) result.push(neg[i]);
//     i++;
//   }
//   return result;
// }
// console.log(rearrange([1,2,-3,-4,5,6,-7])); 
// // [1,-3,2,-4,5,-7,6]

// Q5: Find Majority Element (> n/2 times) – Boyer-Moore

// function majorityElement(nums) {
//   let count = 0, candidate = null;
//   for (let num of nums) {
//     if (count === 0) candidate = num;
//     count += (num === candidate) ? 1 : -1;
//   }
//   return candidate;
// }
// console.log(majorityElement([3,3,4,2,3,3,5])); // 3

// Q6: Next Greater Element

// function nextGreater(arr) {
//   let stack = [], result = Array(arr.length).fill(-1);
//   for (let i = 0; i < arr.length; i++) {
//     while (stack.length && arr[i] > arr[stack[stack.length-1]]) {
//       result[stack.pop()] = arr[i];
//     }
//     stack.push(i);
//   }
//   return result;
// }
// console.log(nextGreater([4, 5, 2, 25])); // [5,25,25,-1]

// Q7: Longest Consecutive Sequence

// function longestConsecutive(nums) {
//   let set = new Set(nums);
//   let longest = 0;
//   for (let num of set) {
//     if (!set.has(num-1)) {
//       let length = 1;
//       while (set.has(num+length)) length++;
//       longest = Math.max(longest, length);
//     }
//   }
//   return longest;
// }
// console.log(longestConsecutive([100,4,200,1,3,2])); // 4

// Q8: Rotate Array by K Positions

// function rotateArray(arr, k) {
//   k = k % arr.length;
//   return [...arr.slice(-k), ...arr.slice(0, -k)];
// }
// console.log(rotateArray([1,2,3,4,5,6,7], 3)); // [5,6,7,1,2,3,4]

// Q9: Trapping Rainwater

// function trapRainWater(height) {
//   let n = height.length;
//   let left = Array(n).fill(0), right = Array(n).fill(0);
//   left[0] = height[0];
//   for (let i = 1; i < n; i++) left[i] = Math.max(left[i-1], height[i]);
//   right[n-1] = height[n-1];
//   for (let i = n-2; i >= 0; i--) right[i] = Math.max(right[i+1], height[i]);
//   let water = 0;
//   for (let i = 0; i < n; i++) water += Math.min(left[i], right[i]) - height[i];
//   return water;
// }
// console.log(trapRainWater([0,1,0,2,1,0,1,3,2,1,2,1])); // 6

// Q10: Find Peak Element

// function findPeak(arr) {
//   let n = arr.length;
//   for (let i = 0; i < n; i++) {
//     if ((i === 0 || arr[i] >= arr[i-1]) && (i === n-1 || arr[i] >= arr[i+1])) {
//       return arr[i];
//     }
//   }
//   return -1;
// }
// console.log(findPeak([1,2,1,3,5,6,4])); // 2 or 6

// Q11: Rearrange Array in Zig-Zag Fashion

// function zigZag(arr) {
//   let flag = true;
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (flag && arr[i] > arr[i+1]) {
//       [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
//     }
//     if (!flag && arr[i] < arr[i+1]) {
//       [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
//     }
//     flag = !flag;
//   }
//   return arr;
// }
// console.log(zigZag([4, 3, 7, 8, 6, 2, 1])); 
// // [3,7,4,8,2,6,1]

// Q12: Find Subarray with Given Sum

// function subarraySum(arr, target) {
//   let map = new Map();
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//     if (sum === target) return [0, i];
//     if (map.has(sum - target)) return [map.get(sum - target) + 1, i];
//     map.set(sum, i);
//   }
//   return [];
// }
// console.log(subarraySum([1,2,3,7,5], 12)); // [1,3] (2+3+7)

// Q13: Find All Subarrays with Zero Sum

// function zeroSumSubarrays(arr) {
//   let map = new Map();
//   map.set(0, [-1]);
//   let sum = 0, result = [];
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//     if (map.has(sum)) {
//       for (let idx of map.get(sum)) {
//         result.push([idx+1, i]);
//       }
//     }
//     if (!map.has(sum)) map.set(sum, []);
//     map.get(sum).push(i);
//   }
//   return result;
// }
// console.log(zeroSumSubarrays([3,4,-7,1,3,3,1,-4]));
// // [[0,2],[1,3],[2,5],[5,7]]

// Q14: Sort Array of 0s, 1s, and 2s (Dutch National Flag)

// function sort012(arr) {
//   let low = 0, mid = 0, high = arr.length - 1;
//   while (mid <= high) {
//     if (arr[mid] === 0) {
//       [arr[low], arr[mid]] = [arr[mid], arr[low]];
//       low++; mid++;
//     } else if (arr[mid] === 1) {
//       mid++;
//     } else {
//       [arr[mid], arr[high]] = [arr[high], arr[mid]];
//       high--;
//     }
//   }
//   return arr;
// }
// console.log(sort012([0,1,2,0,1,2,1,0])); 
// // [0,0,0,1,1,1,2,2]

// Q15: Find Duplicate Number (1 to N Range)

// function findDuplicate(nums) {
//   let slow = nums[0], fast = nums[0];
//   do {
//     slow = nums[slow];
//     fast = nums[nums[fast]];
//   } while (slow !== fast);
//   fast = nums[0];
//   while (slow !== fast) {
//     slow = nums[slow];
//     fast = nums[fast];
//   }
//   return slow;
// }
// console.log(findDuplicate([1,3,4,2,2])); // 2

// Q16: Find Missing and Repeating Number

// function findMissingRepeating(arr, n) {
//   let freq = Array(n+1).fill(0);
//   for (let num of arr) freq[num]++;
//   let missing, repeating;
//   for (let i = 1; i <= n; i++) {
//     if (freq[i] === 0) missing = i;
//     if (freq[i] > 1) repeating = i;
//   }
//   return {missing, repeating};
// }
// console.log(findMissingRepeating([4,3,6,2,1,1], 6)); 
// // {missing: 5, repeating: 1}

// Q17: Find All Triplets with Zero Sum

// function tripletsZeroSum(arr) {
//   arr.sort((a, b) => a - b);
//   let result = [];
//   for (let i = 0; i < arr.length-2; i++) {
//     if (i > 0 && arr[i] === arr[i-1]) continue;
//     let l = i+1, r = arr.length-1;
//     while (l < r) {
//       let sum = arr[i] + arr[l] + arr[r];
//       if (sum === 0) {
//         result.push([arr[i], arr[l], arr[r]]);
//         while (l < r && arr[l] === arr[l+1]) l++;
//         while (l < r && arr[r] === arr[r-1]) r--;
//         l++; r--;
//       } else if (sum < 0) l++;
//       else r--;
//     }
//   }
//   return result;
// }
// console.log(tripletsZeroSum([-1,0,1,2,-1,-4]));
// // [[-1,-1,2],[-1,0,1]]

// Q18: Maximum Product Subarray

// function maxProduct(nums) {
//   let maxProd = nums[0], minProd = nums[0], result = nums[0];
//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i] < 0) [maxProd, minProd] = [minProd, maxProd];
//     maxProd = Math.max(nums[i], maxProd * nums[i]);
//     minProd = Math.min(nums[i], minProd * nums[i]);
//     result = Math.max(result, maxProd);
//   }
//   return result;
// }
// console.log(maxProduct([2,3,-2,4])); // 6

// Q19: Merge Overlapping Intervals

// function mergeIntervals(intervals) {
//   intervals.sort((a, b) => a[0] - b[0]);
//   let result = [intervals[0]];
//   for (let i = 1; i < intervals.length; i++) {
//     let last = result[result.length-1];
//     if (intervals[i][0] <= last[1]) {
//       last[1] = Math.max(last[1], intervals[i][1]);
//     } else {
//       result.push(intervals[i]);
//     }
//   }
//   return result;
// }
// console.log(mergeIntervals([[1,3],[2,6],[8,10],[15,18]]));
// // [[1,6],[8,10],[15,18]]

// Q20: Find Minimum in Rotated Sorted Array

// function findMinRotated(nums) {
//   let left = 0, right = nums.length-1;
//   while (left < right) {
//     let mid = Math.floor((left+right)/2);
//     if (nums[mid] > nums[right]) left = mid+1;
//     else right = mid;
//   }
//   return nums[left];
// }
// console.log(findMinRotated([4,5,6,7,0,1,2])); // 0

// Q21: Find Kth Largest Element Using Heap

// function kthLargest(nums, k) {
//   nums.sort((a, b) => b - a);
//   return nums[k-1];
// }
// console.log(kthLargest([3,2,1,5,6,4], 2)); // 5

// Q22: Find Kth Smallest Element Using Heap

// function kthSmallest(nums, k) {
//   nums.sort((a, b) => a - b);
//   return nums[k-1];
// }
// console.log(kthSmallest([7,10,4,3,20,15], 3)); // 7

// Q23: Maximum Circular Subarray Sum

// function maxCircularSubarray(nums) {
//   const kadane = (arr) => {
//     let maxSoFar = arr[0], currMax = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//       currMax = Math.max(arr[i], currMax + arr[i]);
//       maxSoFar = Math.max(maxSoFar, currMax);
//     }
//     return maxSoFar;
//   };
  
//   let maxKadane = kadane(nums);
//   let totalSum = nums.reduce((a, b) => a + b, 0);
//   let minKadane = kadane(nums.map(x => -x));
//   return totalSum + minKadane === 0 ? maxKadane : Math.max(maxKadane, totalSum + minKadane);
// }
// console.log(maxCircularSubarray([5,-3,5])); // 10

// Q24: Minimum Number of Platforms Required (Train Schedule)

// function minPlatforms(arrivals, departures) {
//   arrivals.sort((a, b) => a - b);
//   departures.sort((a, b) => a - b);
  
//   let i = 0, j = 0, platforms = 0, result = 0;
//   while (i < arrivals.length && j < departures.length) {
//     if (arrivals[i] <= departures[j]) {
//       platforms++; i++;
//       result = Math.max(result, platforms);
//     } else {
//       platforms--; j++;
//     }
//   }
//   return result;
// }
// console.log(minPlatforms([900,940,950,1100,1500,1800], [910,1200,1120,1130,1900,2000])); 
// // 3

// Q25: Rearrange Array in Wave Form

// function waveArray(arr) {
//   arr.sort((a, b) => a - b);
//   for (let i = 0; i < arr.length-1; i+=2) {
//     [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
//   }
//   return arr;
// }
// console.log(waveArray([10,90,49,2,1,5,23])); 
// // [2,1,10,5,49,23,90]

// Q26: Maximum Sum of Non-Adjacent Elements

// function maxNonAdjacentSum(nums) {
//   let incl = 0, excl = 0;
//   for (let num of nums) {
//     let newExcl = Math.max(incl, excl);
//     incl = excl + num;
//     excl = newExcl;
//   }
//   return Math.max(incl, excl);
// }
// console.log(maxNonAdjacentSum([3,2,7,10])); // 13

// Q27: Count Inversions in an Array

// function countInversions(arr) {
//   function mergeSort(nums) {
//     if (nums.length <= 1) return [nums, 0];
//     let mid = Math.floor(nums.length/2);
//     let [left, leftInv] = mergeSort(nums.slice(0, mid));
//     let [right, rightInv] = mergeSort(nums.slice(mid));
//     let [merged, mergeInv] = merge(left, right);
//     return [merged, leftInv + rightInv + mergeInv];
//   }
  
//   function merge(left, right) {
//     let i = 0, j = 0, merged = [], inv = 0;
//     while (i < left.length && j < right.length) {
//       if (left[i] <= right[j]) merged.push(left[i++]);
//       else {
//         merged.push(right[j++]);
//         inv += left.length - i;
//       }
//     }
//     return [merged.concat(left.slice(i)).concat(right.slice(j)), inv];
//   }
  
//   return mergeSort(arr)[1];
// }
// console.log(countInversions([2,4,1,3,5])); // 3

// Q28: Find First Missing Positive Integer

// function firstMissingPositive(nums) {
//   let set = new Set(nums);
//   let i = 1;
//   while (true) {
//     if (!set.has(i)) return i;
//     i++;
//   }
// }
// console.log(firstMissingPositive([3,4,-1,1])); // 2

// Q29: Product of Array Except Self

// function productExceptSelf(nums) {
//   let n = nums.length;
//   let left = Array(n).fill(1), right = Array(n).fill(1);
//   for (let i = 1; i < n; i++) left[i] = left[i-1] * nums[i-1];
//   for (let i = n-2; i >= 0; i--) right[i] = right[i+1] * nums[i+1];
//   return nums.map((_, i) => left[i] * right[i]);
// }
// console.log(productExceptSelf([1,2,3,4])); // [24,12,8,6]

// Q30: Minimum Jumps to Reach End

// function minJumps(nums) {
//   if (nums[0] === 0) return -1;
//   let maxReach = nums[0], step = nums[0], jump = 1;
//   for (let i = 1; i < nums.length; i++) {
//     if (i === nums.length-1) return jump;
//     maxReach = Math.max(maxReach, i + nums[i]);
//     step--;
//     if (step === 0) {
//       jump++;
//       if (i >= maxReach) return -1;
//       step = maxReach - i;
//     }
//   }
//   return -1;
// }
// console.log(minJumps([1,3,5,8,9,2,6,7,6,8,9])); // 3

// Q31: Trapping Rain Water

// function trapRainWater(height) {
//   let left = 0, right = height.length - 1;
//   let leftMax = 0, rightMax = 0, water = 0;
  
//   while (left < right) {
//     if (height[left] < height[right]) {
//       if (height[left] >= leftMax) leftMax = height[left];
//       else water += leftMax - height[left];
//       left++;
//     } else {
//       if (height[right] >= rightMax) rightMax = height[right];
//       else water += rightMax - height[right];
//       right--;
//     }
//   }
//   return water;
// }
// console.log(trapRainWater([0,1,0,2,1,0,1,3,2,1,2,1])); // 6

// Q32: Rotate Array by k Steps

// function rotateArray(nums, k) {
//   k %= nums.length;
//   nums.reverse();
//   nums.splice(0, k, ...nums.slice(0, k).reverse());
//   nums.splice(k, nums.length-k, ...nums.slice(k).reverse());
//   return nums;
// }
// console.log(rotateArray([1,2,3,4,5,6,7], 3)); // [5,6,7,1,2,3,4]

// Q33: Majority Element (> n/2 times)

// function majorityElement(nums) {
//   let count = 0, candidate = null;
//   for (let num of nums) {
//     if (count === 0) candidate = num;
//     count += (num === candidate ? 1 : -1);
//   }
//   return candidate;
// }
// console.log(majorityElement([3,2,3])); // 3

// Q34: Check if Array is a Subset of Another

// function isSubset(arr1, arr2) {
//   let set = new Set(arr1);
//   for (let x of arr2) {
//     if (!set.has(x)) return false;
//   }
//   return true;
// }
// console.log(isSubset([1,2,3,4,5], [2,4,5])); // true

// Q35: Find Pair with Given Sum

// function hasPairWithSum(nums, target) {
//   let set = new Set();
//   for (let num of nums) {
//     if (set.has(target - num)) return true;
//     set.add(num);
//   }
//   return false;
// }
// console.log(hasPairWithSum([10,15,3,7], 17)); // true

// Q36: Maximum Product Subarray

// function maxProduct(nums) {
//   let maxProd = nums[0], minProd = nums[0], result = nums[0];
//   for (let i = 1; i < nums.length; i++) {
//     let temp = maxProd;
//     maxProd = Math.max(nums[i], nums[i] * maxProd, nums[i] * minProd);
//     minProd = Math.min(nums[i], nums[i] * temp, nums[i] * minProd);
//     result = Math.max(result, maxProd);
//   }
//   return result;
// }
// console.log(maxProduct([2,3,-2,4])); // 6

// Q37: Maximum Length of Consecutive Ones (with one flip)

// function longestOnes(nums, k) {
//   let left = 0, zeroCount = 0, maxLen = 0;
//   for (let right = 0; right < nums.length; right++) {
//     if (nums[right] === 0) zeroCount++;
//     while (zeroCount > k) {
//       if (nums[left] === 0) zeroCount--;
//       left++;
//     }
//     maxLen = Math.max(maxLen, right - left + 1);
//   }
//   return maxLen;
// }
// console.log(longestOnes([1,1,0,0,1,1,1,0,1], 1)); // 5

// Q38: Maximum Length of Subarray with Sum = K

// function maxSubArrayLen(nums, k) {
//   let map = new Map();
//   let sum = 0, maxLen = 0;
//   for (let i = 0; i < nums.length; i++) {
//     sum += nums[i];
//     if (sum === k) maxLen = i + 1;
//     if (map.has(sum - k)) maxLen = Math.max(maxLen, i - map.get(sum - k));
//     if (!map.has(sum)) map.set(sum, i);
//   }
//   return maxLen;
// }
// console.log(maxSubArrayLen([1,-1,5,-2,3], 3)); // 4

// Q39: Longest Consecutive Sequence

// function longestConsecutive(nums) {
//   let set = new Set(nums);
//   let maxLen = 0;
  
//   for (let num of set) {
//     if (!set.has(num-1)) {
//       let length = 1;
//       while (set.has(num+length)) length++;
//       maxLen = Math.max(maxLen, length);
//     }
//   }
//   return maxLen;
// }
// console.log(longestConsecutive([100,4,200,1,3,2])); // 4

// Q40: Maximum Erasure Value (Unique Subarray Sum)

// function maximumUniqueSubarray(nums) {
//   let set = new Set();
//   let left = 0, sum = 0, maxSum = 0;
//   for (let right = 0; right < nums.length; right++) {
//     while (set.has(nums[right])) {
//       set.delete(nums[left]);
//       sum -= nums[left];
//       left++;
//     }
//     set.add(nums[right]);
//     sum += nums[right];
//     maxSum = Math.max(maxSum, sum);
//   }
//   return maxSum;
// }
// console.log(maximumUniqueSubarray([4,2,4,5,6])); // 17

// Q41: Sliding Window Maximum

// function maxSlidingWindow(nums, k) {
//   let deque = [], result = [];
//   for (let i = 0; i < nums.length; i++) {
//     while (deque.length && deque[0] <= i - k) deque.shift();
//     while (deque.length && nums[deque[deque.length - 1]] < nums[i]) deque.pop();
//     deque.push(i);
//     if (i >= k - 1) result.push(nums[deque[0]]);
//   }
//   return result;
// }
// console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3));
// // [3,3,5,5,6,7]

// Q42: Find Subarray with Given Sum (positive numbers)

// function subarrayWithSum(nums, target) {
//   let left = 0, sum = 0;
//   for (let right = 0; right < nums.length; right++) {
//     sum += nums[right];
//     while (sum > target) {
//       sum -= nums[left++];
//     }
//     if (sum === target) return [left, right];
//   }
//   return [-1, -1];
// }
// console.log(subarrayWithSum([1,2,3,7,5], 12)); // [1,3]

// Q43: Minimum Size Subarray Sum

// function minSubArrayLen(target, nums) {
//   let left = 0, sum = 0, minLen = Infinity;
//   for (let right = 0; right < nums.length; right++) {
//     sum += nums[right];
//     while (sum >= target) {
//       minLen = Math.min(minLen, right - left + 1);
//       sum -= nums[left++];
//     }
//   }
//   return minLen === Infinity ? 0 : minLen;
// }
// console.log(minSubArrayLen(7, [2,3,1,2,4,3])); // 2

// Q44: Minimum Swaps to Bring Elements ≤ K Together

// function minSwaps(nums, k) {
//   let count = nums.filter(x => x <= k).length;
//   let bad = 0;
//   for (let i = 0; i < count; i++) if (nums[i] > k) bad++;
//   let ans = bad;
//   for (let i = 0, j = count; j < nums.length; i++, j++) {
//     if (nums[i] > k) bad--;
//     if (nums[j] > k) bad++;
//     ans = Math.min(ans, bad);
//   }
//   return ans;
// }
// console.log(minSwaps([2,1,5,6,3], 3)); // 1

// Q45: Rearrange Array Alternating Positive and Negative

// function rearrangePosNeg(nums) {
//   let pos = nums.filter(x => x >= 0);
//   let neg = nums.filter(x => x < 0);
//   let result = [];
//   let i = 0, j = 0;
//   while (i < pos.length || j < neg.length) {
//     if (i < pos.length) result.push(pos[i++]);
//     if (j < neg.length) result.push(neg[j++]);
//   }
//   return result;
// }
// console.log(rearrangePosNeg([1,2,-3,-1,-2,3])); 
// // [1,-3,2,-1,3,-2]

// Q46: Minimum Operations to Make Array Equal

// function minOperations(n) {
//   let target = Math.floor(n/2);
//   return target * (target + (n % 2));
// }
// console.log(minOperations(3)); // 2

// Q47: Next Greater Element

// function nextGreaterElement(nums) {
//   let stack = [], result = Array(nums.length).fill(-1);
//   for (let i = nums.length - 1; i >= 0; i--) {
//     while (stack.length && stack[stack.length - 1] <= nums[i]) stack.pop();
//     if (stack.length) result[i] = stack[stack.length - 1];
//     stack.push(nums[i]);
//   }
//   return result;
// }
// console.log(nextGreaterElement([4,5,2,25])); // [5,25,25,-1]

// Q48: Stock Buy and Sell (Multiple Transactions Allowed)

// function maxProfit(prices) {
//   let profit = 0;
//   for (let i = 1; i < prices.length; i++) {
//     if (prices[i] > prices[i-1]) profit += prices[i] - prices[i-1];
//   }
//   return profit;
// }
// console.log(maxProfit([7,1,5,3,6,4])); // 7

// Q49: Stock Buy and Sell (At Most One Transaction)

// function maxProfitOne(prices) {
//   let minPrice = Infinity, maxProfit = 0;
//   for (let price of prices) {
//     minPrice = Math.min(minPrice, price);
//     maxProfit = Math.max(maxProfit, price - minPrice);
//   }
//   return maxProfit;
// }
// console.log(maxProfitOne([7,1,5,3,6,4])); // 5

// Q50: Stock Buy and Sell (At Most Two Transactions)

// function maxProfitTwo(prices) {
//   let buy1 = -Infinity, sell1 = 0;
//   let buy2 = -Infinity, sell2 = 0;
//   for (let price of prices) {
//     buy1 = Math.max(buy1, -price);
//     sell1 = Math.max(sell1, buy1 + price);
//     buy2 = Math.max(buy2, sell1 - price);
//     sell2 = Math.max(sell2, buy2 + price);
//   }
//   return sell2;
// }
// console.log(maxProfitTwo([3,3,5,0,0,3,1,4])); // 6

// 🔴 Hard Level

// Q1: Median of Two Sorted Arrays

// function findMedianSortedArrays(nums1, nums2) {
//   let arr = [...nums1, ...nums2].sort((a, b) => a - b);
//   let n = arr.length;
//   if (n % 2 === 0) return (arr[n/2 - 1] + arr[n/2]) / 2;
//   else return arr[Math.floor(n/2)];
// }
// console.log(findMedianSortedArrays([1,3], [2])); // 2

// Q2: Find Minimum in Rotated Sorted Array

// function findMin(nums) {
//   let left = 0, right = nums.length - 1;
//   while (left < right) {
//     let mid = Math.floor((left + right) / 2);
//     if (nums[mid] > nums[right]) left = mid + 1;
//     else right = mid;
//   }
//   return nums[left];
// }
// console.log(findMin([4,5,6,7,0,1,2])); // 0

// Q3: Search in Rotated Sorted Array

// function search(nums, target) {
//   let left = 0, right = nums.length - 1;
//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);
//     if (nums[mid] === target) return mid;
//     if (nums[left] <= nums[mid]) {
//       if (nums[left] <= target && target < nums[mid]) right = mid - 1;
//       else left = mid + 1;
//     } else {
//       if (nums[mid] < target && target <= nums[right]) left = mid + 1;
//       else right = mid - 1;
//     }
//   }
//   return -1;
// }
// console.log(search([4,5,6,7,0,1,2], 0)); // 4

// Q4: Find Peak Element

// function findPeakElement(nums) {
//   let left = 0, right = nums.length - 1;
//   while (left < right) {
//     let mid = Math.floor((left + right) / 2);
//     if (nums[mid] < nums[mid+1]) left = mid + 1;
//     else right = mid;
//   }
//   return left;
// }
// console.log(findPeakElement([1,2,1,3,5,6,4])); // 5 (index of 6)

// Q5: Largest Rectangle in Histogram

// function largestRectangleArea(heights) {
//   let stack = [], maxArea = 0;
//   heights.push(0);
//   for (let i = 0; i < heights.length; i++) {
//     while (stack.length && heights[i] < heights[stack[stack.length - 1]]) {
//       let h = heights[stack.pop()];
//       let w = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
//       maxArea = Math.max(maxArea, h * w);
//     }
//     stack.push(i);
//   }
//   return maxArea;
// }
// console.log(largestRectangleArea([2,1,5,6,2,3])); // 10

// Q6: Maximal Rectangle in a Binary Matrix

// function maximalRectangle(matrix) {
//   if (!matrix.length) return 0;
//   let n = matrix[0].length, heights = Array(n).fill(0), maxArea = 0;
  
//   function largestRectangle(heights) {
//     let stack = [], max = 0;
//     heights.push(0);
//     for (let i = 0; i <= heights.length; i++) {
//       while (stack.length && heights[i] < heights[stack[stack.length - 1]]) {
//         let h = heights[stack.pop()];
//         let w = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
//         max = Math.max(max, h * w);
//       }
//       stack.push(i);
//     }
//     heights.pop();
//     return max;
//   }
  
//   for (let row of matrix) {
//     for (let i = 0; i < n; i++) {
//       heights[i] = row[i] === "1" ? heights[i] + 1 : 0;
//     }
//     maxArea = Math.max(maxArea, largestRectangle(heights));
//   }
  
//   return maxArea;
// }
// console.log(maximalRectangle([
//   ["1","0","1","0","0"],
//   ["1","0","1","1","1"],
//   ["1","1","1","1","1"],
//   ["1","0","0","1","0"]
// ])); // 6

// Q7: Median of a Row-Wise Sorted Matrix

// function matrixMedian(matrix) {
//   let arr = [];
//   for (let row of matrix) arr.push(...row);
//   arr.sort((a, b) => a - b);
//   let n = arr.length;
//   return n % 2 === 0 ? (arr[n/2 - 1] + arr[n/2]) / 2 : arr[Math.floor(n/2)];
// }
// console.log(matrixMedian([[1,3,5],[2,6,9],[3,6,9]])); // 5

// Q8: Maximum Sum Rectangle in a 2D Matrix

// function maxSumRectangle(matrix) {
//   let rows = matrix.length, cols = matrix[0].length, maxSum = -Infinity;
  
//   for (let left = 0; left < cols; left++) {
//     let temp = Array(rows).fill(0);
//     for (let right = left; right < cols; right++) {
//       for (let i = 0; i < rows; i++) temp[i] += matrix[i][right];
      
//       let sum = temp[0], maxHere = temp[0];
//       for (let i = 1; i < rows; i++) {
//         sum = Math.max(temp[i], sum + temp[i]);
//         maxHere = Math.max(maxHere, sum);
//       }
//       maxSum = Math.max(maxSum, maxHere);
//     }
//   }
  
//   return maxSum;
// }
// console.log(maxSumRectangle([
//   [1,2,-1,-4,-20],
//   [-8,-3,4,2,1],
//   [3,8,10,1,3],
//   [-4,-1,1,7,-6]
// ])); // 29

// Q9: Word Search in a Grid

// function exist(board, word) {
//   let rows = board.length, cols = board[0].length;
  
//   function dfs(r, c, i) {
//     if (i === word.length) return true;
//     if (r < 0 || c < 0 || r >= rows || c >= cols || board[r][c] !== word[i]) return false;
    
//     let temp = board[r][c];
//     board[r][c] = "#";
    
//     let found = dfs(r+1, c, i+1) || dfs(r-1, c, i+1) || dfs(r, c+1, i+1) || dfs(r, c-1, i+1);
//     board[r][c] = temp;
//     return found;
//   }
  
//   for (let r = 0; r < rows; r++) {
//     for (let c = 0; c < cols; c++) {
//       if (dfs(r, c, 0)) return true;
//     }
//   }
//   return false;
// }
// console.log(exist([
//   ["A","B","C","E"],
//   ["S","F","C","S"],
//   ["A","D","E","E"]
// ], "ABCCED")); // true

// Q10: Sudoku Solver

// function solveSudoku(board) {
//   function isValid(r, c, ch) {
//     for (let i = 0; i < 9; i++) {
//       if (board[r][i] === ch || board[i][c] === ch) return false;
//       let row = 3 * Math.floor(r/3) + Math.floor(i/3);
//       let col = 3 * Math.floor(c/3) + i % 3;
//       if (board[row][col] === ch) return false;
//     }
//     return true;
//   }
  
//   function backtrack() {
//     for (let r = 0; r < 9; r++) {
//       for (let c = 0; c < 9; c++) {
//         if (board[r][c] === ".") {
//           for (let ch = "1".charCodeAt(0); ch <= "9".charCodeAt(0); ch++) {
//             let char = String.fromCharCode(ch);
//             if (isValid(r, c, char)) {
//               board[r][c] = char;
//               if (backtrack()) return true;
//               board[r][c] = ".";
//             }
//           }
//           return false;
//         }
//       }
//     }
//     return true;
//   }
  
//   backtrack();
//   return board;
// }
// let sudoku = [
//   ["5","3",".",".","7",".",".",".","."],
//   ["6",".",".","1","9","5",".",".","."],
//   [".","9","8",".",".",".",".","6","."],
//   ["8",".",".",".","6",".",".",".","3"],
//   ["4",".",".","8",".","3",".",".","1"],
//   ["7",".",".",".","2",".",".",".","6"],
//   [".","6",".",".",".",".","2","8","."],
//   [".",".",".","4","1","9",".",".","5"],
//   [".",".",".",".","8",".",".","7","9"]
// ];
// console.log(solveSudoku(sudoku));

// Q11: Longest Increasing Subsequence (O(n log n))

// function lengthOfLIS(nums) {
//   const tails = [];
//   for (const x of nums) {
//     let l = 0, r = tails.length;
//     while (l < r) {
//       const m = (l + r) >> 1;
//       if (tails[m] < x) l = m + 1; else r = m;
//     }
//     tails[l] = x;
//   }
//   return tails.length;
// }
// console.log(lengthOfLIS([10,9,2,5,3,7,101,18])); // 4

// Q12: Shortest Subarray with Sum ≥ K (Monotonic Deque)

// function shortestSubarray(nums, K) {
//   const n = nums.length, pre = Array(n+1).fill(0);
//   for (let i = 0; i < n; i++) pre[i+1] = pre[i] + nums[i];
//   const dq = []; // stores indices with increasing pre[]
//   let ans = Infinity;
//   for (let i = 0; i <= n; i++) {
//     while (dq.length && pre[i] - pre[dq[0]] >= K) ans = Math.min(ans, i - dq.shift());
//     while (dq.length && pre[i] <= pre[dq[dq.length-1]]) dq.pop();
//     dq.push(i);
//   }
//   return ans === Infinity ? -1 : ans;
// }
// console.log(shortestSubarray([2,-1,2], 3)); // 3

// Q13: Smallest Range Covering Elements from K Sorted Lists

// function smallestRange(nums) {
//   // nums: array of k sorted arrays
//   const k = nums.length;
//   const idx = Array(k).fill(0);
//   let heap = []; // min-heap by value: [val, listIndex]
//   let currentMax = -Infinity;

//   const push = (val, li) => {
//     heap.push([val, li]);
//     let i = heap.length - 1;
//     while (i > 0) {
//       const p = (i - 1) >> 1;
//       if (heap[p][0] <= heap[i][0]) break;
//       [heap[p], heap[i]] = [heap[i], heap[p]];
//       i = p;
//     }
//   };
//   const pop = () => {
//     const top = heap[0];
//     const last = heap.pop();
//     if (heap.length) {
//       heap[0] = last;
//       let i = 0;
//       while (true) {
//         let l = i*2+1, r = i*2+2, s = i;
//         if (l < heap.length && heap[l][0] < heap[s][0]) s = l;
//         if (r < heap.length && heap[r][0] < heap[s][0]) s = r;
//         if (s === i) break;
//         [heap[i], heap[s]] = [heap[s], heap[i]];
//         i = s;
//       }
//     }
//     return top;
//   };

//   for (let i = 0; i < k; i++) {
//     push(nums[i][0], i);
//     currentMax = Math.max(currentMax, nums[i][0]);
//   }

//   let best = [-1e9, 1e9];
//   while (true) {
//     const [minVal, li] = pop();
//     if (currentMax - minVal < best[1] - best[0]) best = [minVal, currentMax];
//     idx[li]++;
//     if (idx[li] === nums[li].length) break;
//     const nextVal = nums[li][idx[li]];
//     push(nextVal, li);
//     if (nextVal > currentMax) currentMax = nextVal;
//   }
//   return best;
// }
// console.log(smallestRange([[4,10,15,24,26],[0,9,12,20],[5,18,22,30]])); // [20,24]

// Q14: K-th Smallest Pair Distance (Binary Search + Two Pointers)

// function smallestDistancePair(nums, k) {
//   nums.sort((a,b)=>a-b);
//   let lo = 0, hi = nums[nums.length-1] - nums[0];
//   const countPairs = d => {
//     let cnt = 0, j = 0;
//     for (let i = 0; i < nums.length; i++) {
//       while (j < nums.length && nums[j] - nums[i] <= d) j++;
//       cnt += j - i - 1;
//     }
//     return cnt;
//   };
//   while (lo < hi) {
//     const mid = (lo + hi) >> 1;
//     if (countPairs(mid) >= k) hi = mid; else lo = mid + 1;
//   }
//   return lo;
// }
// console.log(smallestDistancePair([1,3,1], 1)); // 0

// Q15: Split Array Largest Sum (Minimize Largest Subarray Sum)

// function splitArray(nums, m) {
//   let lo = Math.max(...nums), hi = nums.reduce((a,b)=>a+b,0);
//   const can = cap => {
//     let parts = 1, sum = 0;
//     for (const x of nums) {
//       if (sum + x > cap) { parts++; sum = x; } else sum += x;
//     }
//     return parts <= m;
//   };
//   while (lo < hi) {
//     const mid = Math.floor((lo + hi) / 2);
//     if (can(mid)) hi = mid; else lo = mid + 1;
//   }
//   return lo;
// }
// console.log(splitArray([7,2,5,10,8], 2)); // 18

// Q16: Count of Range Sum in [lower, upper]

// function countRangeSum(nums, lower, upper) {
//   const pre = [0];
//   for (const x of nums) pre.push(pre[pre.length-1] + x);

//   function sortCount(arr, l, r) {
//     if (r - l <= 1) return 0;
//     const m = (l + r) >> 1;
//     let cnt = sortCount(arr, l, m) + sortCount(arr, m, r);
//     let j = m, k = m, t = m, tmp = [];
//     for (let i = l; i < m; i++) {
//       while (k < r && arr[k] - arr[i] < lower) k++;
//       while (j < r && arr[j] - arr[i] <= upper) j++;
//       while (t < r && arr[t] < arr[i]) tmp.push(arr[t++]);
//       tmp.push(arr[i]);
//       cnt += j - k;
//     }
//     while (t < r) tmp.push(arr[t++]);
//     for (let i = l; i < r; i++) arr[i] = tmp[i - l];
//     return cnt;
//   }
//   return sortCount(pre, 0, pre.length);
// }
// console.log(countRangeSum([-2,5,-1], -2, 2)); // 3

// Q17: Max Sum Rectangle No Larger Than K (2D)

// function maxSumSubmatrix(matrix, K) {
//   const rows = matrix.length, cols = matrix[0].length;
//   let best = -Infinity;
//   for (let left = 0; left < cols; left++) {
//     const rowSum = Array(rows).fill(0);
//     for (let right = left; right < cols; right++) {
//       for (let r = 0; r < rows; r++) rowSum[r] += matrix[r][right];
//       // find max subarray sum <= K for rowSum
//       const prefix = [0];
//       let sum = 0;
//       for (const x of rowSum) {
//         sum += x;
//         // need smallest prefix >= sum - K
//         let l = 0, h = prefix.length;
//         while (l < h) {
//           const m = (l + h) >> 1;
//           if (prefix[m] >= sum - K) h = m; else l = m + 1;
//         }
//         if (l < prefix.length) best = Math.max(best, sum - prefix[l]);
//         // insert sum into prefix (sorted)
//         let p = 0, q = prefix.length;
//         while (p < q) {
//           const m = (p + q) >> 1;
//           if (prefix[m] < sum) p = m + 1; else q = m;
//         }
//         prefix.splice(p, 0, sum);
//       }
//     }
//   }
//   return best;
// }
// console.log(maxSumSubmatrix([[1,0,1],[0,-2,3]], 2)); // 2

// Q18: Subarray Sums Divisible by K

// function subarraysDivByK(nums, K) {
//   const freq = new Map([[0,1]]);
//   let sum = 0, ans = 0;
//   for (const x of nums) {
//     sum = (sum + x) % K;
//     if (sum < 0) sum += K;
//     ans += (freq.get(sum) || 0);
//     freq.set(sum, (freq.get(sum) || 0) + 1);
//   }
//   return ans;
// }
// console.log(subarraysDivByK([4,5,0,-2,-3,1], 5)); // 7

// Q19: Minimum Number of Swaps to Sort an Array

// function minSwapsToSort(arr) {
//   const n = arr.length;
//   const paired = arr.map((v,i)=>[v,i]).sort((a,b)=>a[0]-b[0]);
//   const visited = Array(n).fill(false);
//   let swaps = 0;
//   for (let i = 0; i < n; i++) {
//     if (visited[i] || paired[i][1] === i) continue;
//     let cycle = 0, j = i;
//     while (!visited[j]) {
//       visited[j] = true;
//       j = paired[j][1];
//       cycle++;
//     }
//     swaps += cycle - 1;
//   }
//   return swaps;
// }
// console.log(minSwapsToSort([10, 19, 6, 3, 5])); // 2

// Q20: Range Sum Query with Point Updates (Segment Tree)

// class NumArray {
//   constructor(nums) {
//     this.n = nums.length;
//     this.seg = Array(4*this.n).fill(0);
//     const build = (idx, l, r) => {
//       if (l === r) { this.seg[idx] = nums[l]; return; }
//       const m = (l + r) >> 1;
//       build(idx*2, l, m);
//       build(idx*2+1, m+1, r);
//       this.seg[idx] = this.seg[idx*2] + this.seg[idx*2+1];
//     };
//     if (this.n) build(1, 0, this.n-1);
//   }
//   update(i, val) {
//     const upd = (idx, l, r) => {
//       if (l === r) { this.seg[idx] = val; return; }
//       const m = (l + r) >> 1;
//       if (i <= m) upd(idx*2, l, m); else upd(idx*2+1, m+1, r);
//       this.seg[idx] = this.seg[idx*2] + this.seg[idx*2+1];
//     };
//     upd(1, 0, this.n-1);
//   }
//   sumRange(L, R) {
//     const qry = (idx, l, r) => {
//       if (R < l || r < L) return 0;
//       if (L <= l && r <= R) return this.seg[idx];
//       const m = (l + r) >> 1;
//       return qry(idx*2, l, m) + qry(idx*2+1, m+1, r);
//     };
//     return qry(1, 0, this.n-1);
//   }
// }
// const na = new NumArray([1,3,5]);
// console.log(na.sumRange(0,2)); // 9
// na.update(1,2);
// console.log(na.sumRange(0,2)); // 8

// Q21: Maximum XOR of Two Numbers in an Array (bitwise trie)

// class TrieNode {
//   constructor() { this.next = [null, null]; }
// }
// class XORTrie {
//   constructor() { this.root = new TrieNode(); }
//   insert(num) {
//     let node = this.root;
//     for (let i = 31; i >= 0; i--) {
//       const bit = (num >> i) & 1;
//       if (!node.next[bit]) node.next[bit] = new TrieNode();
//       node = node.next[bit];
//     }
//   }
//   maxXor(num) {
//     let node = this.root, res = 0;
//     for (let i = 31; i >= 0; i--) {
//       const bit = (num >> i) & 1, want = 1 - bit;
//       if (node.next[want]) { res |= (1 << i); node = node.next[want]; }
//       else node = node.next[bit];
//     }
//     return res;
//   }
// }
// function findMaximumXOR(nums) {
//   const trie = new XORTrie();
//   let max = 0;
//   trie.insert(nums[0]);
//   for (let i = 1; i < nums.length; i++) {
//     max = Math.max(max, trie.maxXor(nums[i]));
//     trie.insert(nums[i]);
//   }
//   return max;
// }
// console.log(findMaximumXOR([3,10,5,25,2,8])); // 28

// Q22: Sliding Window Median (balanced sorted array using binary search)

// // Note: uses a sorted array with binary insert/remove => O(n log k) overall per step
// function binaryInsert(arr, x) {
//   let l = 0, r = arr.length;
//   while (l < r) { const m = (l + r) >> 1; if (arr[m] < x) l = m + 1; else r = m; }
//   arr.splice(l, 0, x);
// }
// function binaryRemove(arr, x) {
//   let l = 0, r = arr.length - 1;
//   while (l <= r) {
//     const m = (l + r) >> 1;
//     if (arr[m] === x) { arr.splice(m, 1); return; }
//     if (arr[m] < x) l = m + 1; else r = m - 1;
//   }
// }
// function medianSlidingWindow(nums, k) {
//   const window = [];
//   const res = [];
//   for (let i = 0; i < nums.length; i++) {
//     binaryInsert(window, nums[i]);
//     if (i >= k) binaryRemove(window, nums[i - k]);
//     if (i >= k - 1) {
//       const mid = Math.floor((k - 1) / 2);
//       if (k % 2 === 1) res.push(window[mid + (k%2===1?0:0)]);
//       else res.push((window[mid] + window[mid + 1]) / 2);
//     }
//   }
//   return res;
// }
// console.log(medianSlidingWindow([1,3,-1,-3,5,3,6,7], 3)); // [1, -1, -1, 3, 5, 6]

// Q23: K Smallest Pairs (nums1 and nums2 sorted) — min-heap approach

// class MinHeap {
//   constructor() { this.a = []; }
//   push(x) { this.a.push(x); this._up(this.a.length-1); }
//   pop() { if (!this.a.length) return null; const top = this.a[0]; const last = this.a.pop(); if (this.a.length) { this.a[0] = last; this._down(0); } return top; }
//   _up(i){ while(i){ const p = (i-1)>>1; if (this.a[p][0] <= this.a[i][0]) break; [this.a[p],this.a[i]]=[this.a[i],this.a[p]]; i=p; } }
//   _down(i){ const n=this.a.length; while(true){ let l=2*i+1, r=l+1, s=i; if(l<n && this.a[l][0]<this.a[s][0]) s=l; if(r<n && this.a[r][0]<this.a[s][0]) s=r; if(s===i) break; [this.a[s],this.a[i]]=[this.a[i],this.a[s]]; i=s; } }
//   size(){ return this.a.length; }
// }
// function kSmallestPairs(nums1, nums2, k) {
//   const res = [];
//   if (!nums1.length || !nums2.length) return res;
//   const heap = new MinHeap();
//   for (let i = 0; i < Math.min(nums1.length, k); i++) heap.push([nums1[i] + nums2[0], i, 0]);
//   while (k-- > 0 && heap.size()) {
//     const [sum, i, j] = heap.pop();
//     res.push([nums1[i], nums2[j]]);
//     if (j + 1 < nums2.length) heap.push([nums1[i] + nums2[j+1], i, j+1]);
//   }
//   return res;
// }
// console.log(kSmallestPairs([1,7,11],[2,4,6], 3)); // [[1,2],[1,4],[1,6]]

// Q24: Longest Subarray with At Most K Distinct Numbers (sliding window)

// function longestKDistinct(nums, k) {
//   let left = 0, maxLen = 0;
//   const map = new Map();
//   for (let right = 0; right < nums.length; right++) {
//     map.set(nums[right], (map.get(nums[right]) || 0) + 1);
//     while (map.size > k) {
//       map.set(nums[left], map.get(nums[left]) - 1);
//       if (map.get(nums[left]) === 0) map.delete(nums[left]);
//       left++;
//     }
//     maxLen = Math.max(maxLen, right - left + 1);
//   }
//   return maxLen;
// }
// console.log(longestKDistinct([1,2,1,2,3], 2)); // 4 (subarray [1,2,1,2])

// Q25: Find All Unique Quadruplets Summing to Target (4-sum)

// function fourSum(nums, target) {
//   nums.sort((a,b)=>a-b);
//   const res = [];
//   for (let i = 0; i < nums.length - 3; i++) {
//     if (i>0 && nums[i]===nums[i-1]) continue;
//     for (let j = i+1; j < nums.length - 2; j++) {
//       if (j>i+1 && nums[j]===nums[j-1]) continue;
//       let left = j+1, right = nums.length-1;
//       while (left < right) {
//         const sum = nums[i]+nums[j]+nums[left]+nums[right];
//         if (sum === target) {
//           res.push([nums[i],nums[j],nums[left],nums[right]]);
//           while (left < right && nums[left]===nums[left+1]) left++;
//           while (left < right && nums[right]===nums[right-1]) right--;
//           left++; right--;
//         } else if (sum < target) left++; else right--;
//       }
//     }
//   }
//   return res;
// }
// console.log(fourSum([1,0,-1,0,-2,2], 0));
// // [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]

// Q26: Count Subarrays with Product Less Than K

// function numSubarrayProductLessThanK(nums, k) {
//   if (k <= 1) return 0;
//   let prod = 1, left = 0, ans = 0;
//   for (let right = 0; right < nums.length; right++) {
//     prod *= nums[right];
//     while (prod >= k) prod /= nums[left++];
//     ans += right - left + 1;
//   }
//   return ans;
// }
// console.log(numSubarrayProductLessThanK([10,5,2,6], 100)); // 8

// Q27: Longest Mountain in Array

// function longestMountain(arr) {
//   let n = arr.length, ans = 0;
//   let i = 1;
//   while (i < n - 1) {
//     // peak exists at i if arr[i-1] < arr[i] > arr[i+1]
//     if (!(arr[i] > arr[i-1] && arr[i] > arr[i+1])) { i++; continue; }
//     let left = i - 1;
//     while (left > 0 && arr[left] > arr[left-1]) left--;
//     let right = i + 1;
//     while (right < n - 1 && arr[right] > arr[right+1]) right++;
//     // expand properly:
//     while (left < i && arr[left] < arr[left+1]) left++;
//     while (right > i && arr[right] < arr[right-1]) right--;
//     // simpler correct two-side expand:
//     left = i;
//     while (left > 0 && arr[left] > arr[left-1]) left--;
//     right = i;
//     while (right < n-1 && arr[right] > arr[right+1]) right++;
//     ans = Math.max(ans, right - left + 1);
//     i = right + 1;
//   }
//   return ans;
// }
// console.log(longestMountain([2,1,4,7,3,2,5])); // 5 ( [1,4,7,3,2] )

// Q28: Minimum Window Subsequence (find shortest window in S that has T as subsequence)

// function minWindowSubsequence(S, T) {
//   const n = S.length, m = T.length;
//   let minLen = Infinity, start = -1;
//   for (let i = 0; i < n; i++) {
//     if (S[i] !== T[0]) continue;
//     let s = i, t = 0;
//     // forward match
//     while (s < n && t < m) {
//       if (S[s] === T[t]) t++;
//       s++;
//     }
//     if (t < m) break; // no more matches
//     // s is index after match end, now shrink backwards
//     let end = s - 1;
//     t = m - 1;
//     while (end >= i) {
//       if (S[end] === T[t]) t--;
//       if (t < 0) break;
//       end--;
//     }
//     const len = s - (end + 1);
//     if (len < minLen) { minLen = len; start = end + 1; }
//   }
//   return start === -1 ? "" : S.slice(start, start + minLen);
// }
// console.log(minWindowSubsequence("abcdebdde", "bde")); // "bcde" (one valid minimal)

// Q29: Maximum Length of Repeated Subarray (longest common subarray)

// function findLength(nums1, nums2) {
//   const n = nums1.length, m = nums2.length;
//   const dp = Array(m+1).fill(0);
//   let res = 0;
//   for (let i = n-1; i >= 0; i--) {
//     for (let j = 0; j < m; j++) {
//       if (nums1[i] === nums2[j]) {
//         dp[j] = 1 + (dp[j+1] || 0);
//         res = Math.max(res, dp[j]);
//       } else dp[j] = 0;
//     }
//   }
//   return res;
// }
// console.log(findLength([1,2,3,2,1],[3,2,1,4,7])); // 3 (subarray [3,2,1])

// Q30: Count of Increasing Subsequences of Length k (DP)

// function numIncreasingSubsequences(nums, k) {
//   const n = nums.length;
//   if (k === 0) return 1;
//   // dp[len][i] = number of increasing subseq of length len ending at i
//   const dp = Array.from({length:k+1}, () => Array(n).fill(0));
//   for (let i = 0; i < n; i++) dp[1][i] = 1;
//   for (let len = 2; len <= k; len++) {
//     for (let i = 0; i < n; i++) {
//       let sum = 0;
//       for (let j = 0; j < i; j++) {
//         if (nums[j] < nums[i]) sum += dp[len-1][j];
//       }
//       dp[len][i] = sum;
//     }
//   }
//   return dp[k].reduce((a,b)=>a+b, 0);
// }
// console.log(numIncreasingSubsequences([1,2,3,4], 2)); // 6 (pairs)

// Q31: Max Chunks to Make Array Sorted (II)

// function maxChunksToSorted(arr) {
//   const sorted = [...arr].sort((a,b)=>a-b);
//   let map = new Map(), count = 0;
//   let diff = 0;
//   for (let i = 0; i < arr.length; i++) {
//     map.set(arr[i], (map.get(arr[i]) || 0) + 1);
//     if (map.get(arr[i]) === 0) map.delete(arr[i]);
//     map.set(sorted[i], (map.get(sorted[i]) || 0) - 1);
//     if (map.get(sorted[i]) === 0) map.delete(sorted[i]);
//     if (map.size === 0) count++;
//   }
//   return count;
// }
// console.log(maxChunksToSorted([2,1,3,4,4])); // 4

// Q32: Median of Two Sorted Arrays (Binary Search)

// function findMedianSortedArrays(A, B) {
//   if (A.length > B.length) return findMedianSortedArrays(B, A);
//   let m = A.length, n = B.length;
//   let imin = 0, imax = m, half = (m + n + 1) >> 1;
//   while (imin <= imax) {
//     let i = (imin + imax) >> 1;
//     let j = half - i;
//     if (i < m && B[j-1] > A[i]) imin = i + 1;
//     else if (i > 0 && A[i-1] > B[j]) imax = i - 1;
//     else {
//       let maxLeft = 0;
//       if (i === 0) maxLeft = B[j-1];
//       else if (j === 0) maxLeft = A[i-1];
//       else maxLeft = Math.max(A[i-1], B[j-1]);
//       if ((m+n) % 2 === 1) return maxLeft;
//       let minRight = 0;
//       if (i === m) minRight = B[j];
//       else if (j === n) minRight = A[i];
//       else minRight = Math.min(A[i], B[j]);
//       return (maxLeft + minRight) / 2;
//     }
//   }
// }
// console.log(findMedianSortedArrays([1,3],[2])); // 2

// Q33: Count Inversions in Array

// function countInversions(arr) {
//   function mergeSort(nums) {
//     if (nums.length <= 1) return [nums, 0];
//     let mid = nums.length >> 1;
//     let [left, invL] = mergeSort(nums.slice(0, mid));
//     let [right, invR] = mergeSort(nums.slice(mid));
//     let i=0,j=0,merged=[],inv=invL+invR;
//     while (i<left.length && j<right.length) {
//       if (left[i] <= right[j]) merged.push(left[i++]);
//       else { merged.push(right[j++]); inv += left.length - i; }
//     }
//     return [merged.concat(left.slice(i)).concat(right.slice(j)), inv];
//   }
//   return mergeSort(arr)[1];
// }
// console.log(countInversions([2,4,1,3,5])); // 3

// Q34: Maximum Product Subarray

// function maxProduct(nums) {
//   let maxHere = nums[0], minHere = nums[0], res = nums[0];
//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i] < 0) [maxHere, minHere] = [minHere, maxHere];
//     maxHere = Math.max(nums[i], maxHere * nums[i]);
//     minHere = Math.min(nums[i], minHere * nums[i]);
//     res = Math.max(res, maxHere);
//   }
//   return res;
// }
// console.log(maxProduct([2,3,-2,4])); // 6

// Q35: Trapping Rain Water (Stack Method)

// function trap(height) {
//   let stack = [], water = 0;
//   for (let i = 0; i < height.length; i++) {
//     while (stack.length && height[i] > height[stack[stack.length-1]]) {
//       let top = stack.pop();
//       if (!stack.length) break;
//       let dist = i - stack[stack.length-1] - 1;
//       let bounded = Math.min(height[i], height[stack[stack.length-1]]) - height[top];
//       water += dist * bounded;
//     }
//     stack.push(i);
//   }
//   return water;
// }
// console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1])); // 6

// Q36: Minimum Number of Jumps to Reach End

// function minJumps(arr) {
//   if (arr.length <= 1) return 0;
//   if (arr[0] === 0) return -1;
//   let maxReach = arr[0], step = arr[0], jumps = 1;
//   for (let i = 1; i < arr.length; i++) {
//     if (i === arr.length-1) return jumps;
//     maxReach = Math.max(maxReach, i + arr[i]);
//     step--;
//     if (step === 0) {
//       jumps++;
//       if (i >= maxReach) return -1;
//       step = maxReach - i;
//     }
//   }
//   return -1;
// }
// console.log(minJumps([1,3,5,8,9,2,6,7,6,8,9])); // 3

// Q37: Maximum Circular Subarray Sum

// function maxSubarraySumCircular(nums) {
//   let total = 0, maxSum = -Infinity, curMax = 0, minSum = Infinity, curMin = 0;
//   for (let x of nums) {
//     curMax = Math.max(curMax + x, x);
//     maxSum = Math.max(maxSum, curMax);
//     curMin = Math.min(curMin + x, x);
//     minSum = Math.min(minSum, curMin);
//     total += x;
//   }
//   return maxSum > 0 ? Math.max(maxSum, total - minSum) : maxSum;
// }
// console.log(maxSubarraySumCircular([1,-2,3,-2])); // 3

// Q38: Longest Consecutive Sequence

// function longestConsecutive(nums) {
//   let set = new Set(nums);
//   let longest = 0;
//   for (let num of set) {
//     if (!set.has(num-1)) {
//       let curr = num, length = 1;
//       while (set.has(curr+1)) { curr++; length++; }
//       longest = Math.max(longest, length);
//     }
//   }
//   return longest;
// }
// console.log(longestConsecutive([100,4,200,1,3,2])); // 4

// Q39: Max Sum of Non-Overlapping Subarrays

// function maxSumTwoNoOverlap(nums, L, M) {
//   function helper(A, B) {
//     let n = nums.length, res = 0;
//     let sumA = 0, maxA = 0;
//     for (let i = A; i <= n; i++) {
//       sumA = nums.slice(i-A,i).reduce((a,b)=>a+b,0);
//       if (i === A) maxA = sumA; else maxA = Math.max(maxA, sumA);
//       if (i >= A+B) {
//         let sumB = nums.slice(i-B,i).reduce((a,b)=>a+b,0);
//         res = Math.max(res, maxA + sumB);
//       }
//     }
//     return res;
//   }
//   return Math.max(helper(L,M), helper(M,L));
// }
// console.log(maxSumTwoNoOverlap([0,6,5,2,2,5,1,9,4], 1, 2)); // 20

// Q40: Maximum Rectangle in Binary Matrix

// function maximalRectangle(matrix) {
//   if (!matrix.length) return 0;
//   let n = matrix[0].length, heights = Array(n).fill(0), maxArea = 0;
//   function largestRectangleArea(heights) {
//     let stack = [], max = 0;
//     for (let i = 0; i <= heights.length; i++) {
//       let h = (i === heights.length ? 0 : heights[i]);
//       while (stack.length && h < heights[stack[stack.length-1]]) {
//         let height = heights[stack.pop()];
//         let width = stack.length ? i - stack[stack.length-1] - 1 : i;
//         max = Math.max(max, height * width);
//       }
//       stack.push(i);
//     }
//     return max;
//   }
//   for (let row of matrix) {
//     for (let j = 0; j < n; j++) {
//       heights[j] = row[j] === "1" ? heights[j] + 1 : 0;
//     }
//     maxArea = Math.max(maxArea, largestRectangleArea(heights));
//   }
//   return maxArea;
// }
// console.log(maximalRectangle([
//   ["1","0","1","0","0"],
//   ["1","0","1","1","1"],
//   ["1","1","1","1","1"],
//   ["1","0","0","1","0"]
// ])); // 6

// Q41: Serialize and Deserialize an Array (handles nested arrays)

// function serialize(arr) {
//   return JSON.stringify(arr);
// }
// function deserialize(s) {
//   return JSON.parse(s);
// }
// const a = [1, [2, [3, 4]], "hello", null];
// const s = serialize(a);
// console.log(s);            // JSON string
// console.log(deserialize(s)); // original array

// Q42: Word Break II — return all sentences (DFS + memo)

// function wordBreak(s, wordDict) {
//   const set = new Set(wordDict);
//   const memo = new Map();
//   function dfs(start) {
//     if (memo.has(start)) return memo.get(start);
//     if (start === s.length) return [''];
//     const res = [];
//     for (let end = start + 1; end <= s.length; end++) {
//       const word = s.slice(start, end);
//       if (set.has(word)) {
//         for (const tail of dfs(end)) {
//           res.push(tail ? word + ' ' + tail : word);
//         }
//       }
//     }
//     memo.set(start, res);
//     return res;
//   }
//   return dfs(0);
// }
// console.log(wordBreak("catsanddog", ["cat","cats","and","sand","dog"]));
// // ["cat sand dog","cats and dog"]

// Q43: Longest Valid Parentheses

// function longestValidParentheses(s) {
//   let maxLen = 0, stack = [-1];
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === '(') stack.push(i);
//     else {
//       stack.pop();
//       if (!stack.length) stack.push(i);
//       else maxLen = Math.max(maxLen, i - stack[stack.length - 1]);
//     }
//   }
//   return maxLen;
// }
// console.log(longestValidParentheses(")()())")); // 4

// Q44: Count Distinct Subsequences (count ways to form T from S)

// function numDistinct(s, t) {
//   const m = t.length, n = s.length;
//   const dp = Array(m+1).fill(0);
//   dp[0] = 1;
//   for (let j = 1; j <= n; j++) {
//     for (let i = m; i >= 1; i--) {
//       if (t[i-1] === s[j-1]) dp[i] += dp[i-1];
//     }
//   }
//   return dp[m];
// }
// console.log(numDistinct("rabbbit", "rabbit")); // 3

// Q45: Maximum Sum of K Non-Overlapping Subarrays (DP)

// function maxSumOfKSubarrays(nums, k, len) {
//   // k subarrays each of length len
//   const n = nums.length;
//   const sums = Array(n - len + 1).fill(0);
//   let window = 0;
//   for (let i = 0; i < n; i++) {
//     window += nums[i];
//     if (i >= len) window -= nums[i - len];
//     if (i >= len - 1) sums[i - len + 1] = window;
//   }
//   const dp = Array.from({length: k+1}, () => Array(sums.length+1).fill(-Infinity));
//   for (let j = 0; j <= sums.length; j++) dp[0][j] = 0;
//   for (let i = 1; i <= k; i++) {
//     for (let j = 1; j <= sums.length; j++) {
//       dp[i][j] = Math.max(dp[i][j-1], sums[j-1] + (j - len >= 0 ? dp[i-1][j - len] : (i===1?0:-Infinity)));
//     }
//   }
//   return dp[k][sums.length];
// }
// console.log(maxSumOfKSubarrays([1,2,1,2,6,7,5,1], 2, 2)); // example -> 16

// Q46: Alien Dictionary (topological sort of characters)

// function alienOrder(words) {
//   const graph = new Map(), indeg = new Map();
//   for (const w of words) for (const c of w) { graph.set(c, new Set()); indeg.set(c, 0); }
//   for (let i = 0; i < words.length - 1; i++) {
//     const a = words[i], b = words[i+1];
//     let j = 0;
//     while (j < a.length && j < b.length && a[j] === b[j]) j++;
//     if (j < a.length && j < b.length) {
//       if (!graph.get(a[j]).has(b[j])) {
//         graph.get(a[j]).add(b[j]);
//         indeg.set(b[j], indeg.get(b[j]) + 1);
//       }
//     } else if (a.length > b.length) return ""; // invalid case
//   }
//   const q = [];
//   for (const [c,d] of indeg) if (d === 0) q.push(c);
//   let res = '';
//   while (q.length) {
//     const c = q.shift();
//     res += c;
//     for (const nei of graph.get(c)) {
//       indeg.set(nei, indeg.get(nei) - 1);
//       if (indeg.get(nei) === 0) q.push(nei);
//     }
//   }
//   return res.length === indeg.size ? res : "";
// }
// console.log(alienOrder(["wrt","wrf","er","ett","rftt"])); // one valid order e.g. "wertf"

// Q47: Burst Balloons (DP)

// function maxCoins(nums) {
//   const arr = [1, ...nums.filter(n=>n>0), 1];
//   const n = arr.length;
//   const dp = Array.from({length:n}, ()=>Array(n).fill(0));
//   for (let len = 2; len < n; len++) {
//     for (let left = 0; left < n - len; left++) {
//       const right = left + len;
//       for (let k = left + 1; k < right; k++) {
//         dp[left][right] = Math.max(dp[left][right], arr[left]*arr[k]*arr[right] + dp[left][k] + dp[k][right]);
//       }
//     }
//   }
//   return dp[0][n-1];
// }
// console.log(maxCoins([3,1,5,8])); // 167

// Q48: Find Duplicate Subtrees (binary tree) — serialize subtrees

// function findDuplicateSubtrees(root) {
//   const map = new Map(), res = [];
//   function dfs(node) {
//     if (!node) return "#";
//     const s = node.val + "," + dfs(node.left) + "," + dfs(node.right);
//     map.set(s, (map.get(s) || 0) + 1);
//     if (map.get(s) === 2) res.push(node);
//     return s;
//   }
//   dfs(root);
//   return res;
// }
// // Example usage requires building a tree; this is the algorithm core.

// Q49: Minimum Cost to Merge Stones (interval DP)

// function mergeStones(stones, K) {
//   const n = stones.length;
//   if ((n - 1) % (K - 1) !== 0) return -1;
//   const prefix = Array(n+1).fill(0);
//   for (let i = 0; i < n; i++) prefix[i+1] = prefix[i] + stones[i];
//   const dp = Array.from({length:n}, ()=>Array(n).fill(0));
//   for (let len = K; len <= n; len++) {
//     for (let i = 0; i + len - 1 < n; i++) {
//       const j = i + len - 1;
//       dp[i][j] = Infinity;
//       for (let m = i; m < j; m += K-1) {
//         dp[i][j] = Math.min(dp[i][j], dp[i][m] + dp[m+1][j]);
//       }
//       if ((len - 1) % (K - 1) === 0) dp[i][j] += prefix[j+1] - prefix[i];
//     }
//   }
//   return dp[0][n-1];
// }
// console.log(mergeStones([3,2,4,1], 2)); // 20

// Q50: Maximum Frequency Stack (support push/pop with freq priority)

// class FreqStack {
//   constructor() {
//     this.freq = new Map();
//     this.group = new Map();
//     this.maxf = 0;
//   }
//   push(x) {
//     const f = (this.freq.get(x) || 0) + 1;
//     this.freq.set(x, f);
//     if (!this.group.has(f)) this.group.set(f, []);
//     this.group.get(f).push(x);
//     this.maxf = Math.max(this.maxf, f);
//   }
//   pop() {
//     const x = this.group.get(this.maxf).pop();
//     this.freq.set(x, this.freq.get(x) - 1);
//     if (this.group.get(this.maxf).length === 0) this.maxf--;
//     return x;
//   }
// }
// const fs = new FreqStack();
// fs.push(5); fs.push(7); fs.push(5); fs.push(7); fs.push(4); fs.push(5);
// console.log(fs.pop()); // 5
// console.log(fs.pop()); // 7
// console.log(fs.pop()); // 5
// console.log(fs.pop()); // 4















































































































