//Sort Numbers
//https://www.codewars.com/kata/5174a4c0f2769dd8b1000003/train/javascript

function solution(nums) {
  return nums ? nums.sort((a, b) => a - b) : [];
}