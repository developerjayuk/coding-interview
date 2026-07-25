// Challenge: In an array find two numbers that will build the largest container of water.
// https://leetcode.com/problems/container-with-most-water/description/

// Test cases
// [4,3,2,1,4] = 16
// [] = 0
// [4] = 0

const array = [0, 2, 8, 0, 7, 3, 1];

// Original brute force
function waterContainer(height) {
  let maxArea = 0;
  const arrayLength = height.length;

  for (let i1 = 0; i1 < arrayLength; i1++) {
    for (let i2 = i1 + 1; i2 < arrayLength; i2++) {
      const maxHeight = Math.min(height[i1], height[i2]);

      const area = maxHeight * (i2 - i1);

      maxArea = Math.max(maxArea, area);
    }
  }

  return maxArea;
}

// More Optimised approach - 2 pointer
function waterContainerOptimised(heights) {
  let p1 = 0;
  let p2 = heights.length - 1;
  let maxArea = 0;

  while (p1 < p2) {
    const height = Math.min(heights[p1], heights[p2]);
    const width = p2 - p1;
    const area = height * width;
    maxArea = Math.max(maxArea, area);

    if (heights[p1] <= heights[p2]) {
      p1++;
    } else {
      p2--;
    }
  }

  return maxArea;
}

console.log(waterContainer(array));
console.log(waterContainerOptimised(array));
