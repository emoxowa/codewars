//Integer depth
//https://www.codewars.com/kata/59b401e24f98a813f9000026/train/javascript

function computeDepth(x) {
  let arr = [];
  let depth = 0;
  while (arr.length < 10) {
    depth++;
    arr.push(Array.from(String(x * depth), Number)); 
    arr = [...new Set(arr.flat())];
  } 
  return depth;
  }


console.log(computeDepth(1));

//Best Solutions

function computeDepth2(x) {
  let depth = 0;
  let arr = [];

  while (arr.length < 10) {
    depth++;
    arr = [...arr, ...Array.from(String(x * depth), Number)];
    arr = Array.from(new Set(arr));
  }
  return depth;
}

console.log(computeDepth2(156));