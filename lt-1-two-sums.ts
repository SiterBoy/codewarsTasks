// https://leetcode.com/problems/two-sum/
//
//
//   Example 1:
//
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
//   Example 2:
//
// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:
//
// Input: nums = [3,3], target = 6
// Output: [0,1]

var twoSum = function(nums:number[], target:number) {

  // //BRUTEFORCE SOLUTION
  // for (let i = 0; i < nums.length - 1; i++){
  //   for (let j = 1; j < nums.length; j++) {
  //     if(nums[i] + nums[j] === target && i !== j) return [i,j];
  //   }
  // }

  //HASH MAP SOLUTION
  const map = new Map;
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if(map.has(complement)) {
      return [map.get(complement),i]
    }
    map.set(nums[i], i);
  }
};

console.log(twoSum([3,2,4],6 ));