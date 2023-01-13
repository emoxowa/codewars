//Incrementer
//https://www.codewars.com/kata/590e03aef55cab099a0002e8/train/javascript

function incrementer(nums) {
  return nums
    ? nums.map((i, index) =>
        i + index + 1 < 9 ? i+ index + 1 : (i + index + 1)%10
      )
    : [];
}

console.log(incrementer([3, 6, 9, 8, 9]));

//Best Solutions 
function incrementer(num) {
  return num.map((a, i) => (a + i + 1) % 10);
}

console.log(1 % 10);