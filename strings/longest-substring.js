// Challenge: In a string find the longest substring without repeating characters.
// https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
// Return the length of the longest substring without repeating characters.
// If no solution is found, return 0.

// 1. verify the constraints
// assume all letters are lowercase

// 2. write out some test cases

// Target = 11
//  "abcabcbb" = 3
//  "bbbbb" = 1
//  "" = 0

// 3. Think through the solutions

// a. Pointer (brute force) approach - try first letter and then look for the next letter in the rest of the string.

const myString = "abcdafbcbb";

var longestString = (s) => {
  let maxLength = 0;

  for (let i = 0; i < s.length; i++) {
    const seen = new Set();
    const char1 = s[i];
    seen.add(char1);
    let tempMaxLength = 1;

    for (let i2 = i + 1; i2 < s.length; i2++) {
      const char2 = s[i2];

      if (seen.has(char2)) {
        break;
      } else {
        seen.add(char2);
        tempMaxLength++;
      }
    }

    maxLength = Math.max(tempMaxLength, maxLength);
  }

  return maxLength;
};

// b. More optimised sliding window technique
//abcdafbcbb
var longestStringOptimised = (s) => {
  let maxLength = 0;
  let left = 0;
  const seen = new Map();

  for (let right = 0; right < s.length; right++) {
    const char = s[right];
    const seenIndex = seen.get(char);

    // only move left if the repeat is inside the current window
    if (seenIndex !== undefined && seenIndex >= left) {
      left = seenIndex + 1;
    }

    seen.set(char, right);
    console.log("Left: " + left + " Right: " + right);
    console.log(seen);
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
};

// console.log(longestString(myString));
console.log(longestStringOptimised(myString));
