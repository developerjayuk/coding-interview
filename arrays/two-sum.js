// Challenge: In an array find two numbers that add up to a specific target number. 
// https://leetcode.com/problems/two-sum/description/
// Return the indices of the two numbers in an array. 
// If no solution is found, return an empty array.  

// 1. verify the constraints
// is there always a solution - no
// can there be multiple solutions - no
// can there be duplicate numbers in the array - no

// 2. write out some test cases

// Target = 11
//  [3,2,5,1,9] = [2,5]
//  [] = []
//  [11] = []
//  [2,9] = [0,1]

// 3. Think through the solutions
// a. Pointer (brute force) approach - try first number and then look for the remainder of the target number in the rest of the array.
// - if the remainder is found, return the indices of the two numbers.
// - if the remainder is not found, move to the next number and repeat the process until a solution is found or the end of the array is reached.

const array = [3, 2, 5, 1, 9];
const targetNumber = 11;

// Original
function twoSum (nums, target) {
  for (let p1 = 0; p1 < nums.length - 1; p1++) {
    let first = nums[p1];
    
    let remainder = target - first;
    //console.log("Remainder: " + remainder);

    for (let p2 = p1 + 1; p2 < nums.length; p2++) {
      let second = nums[p2];
      //console.log("Second: " + second);

      if (remainder === second)
      {
        // success path
        console.log('Match Found:');
        return [p1, p2];
      } 
    }
  }

  return null;
}

// Optimised
function twoSumOptimised (nums, target) {
  // use a map and one loop
  const numMap = new Map();

  for (let p = 0; p < nums.length; p++) {
    const currentMapVal = numMap.get(nums[p]);

    if (currentMapVal !== undefined) {
      return [currentMapVal, p];
    }

    // store the remainder and the index of the current number in the map
    const remainder = target - nums[p];
    numMap.set(remainder, p);
  }

  return null;
}

// console.log(twoSum(array, targetNumber));
console.log(twoSumOptimised(array, targetNumber));
