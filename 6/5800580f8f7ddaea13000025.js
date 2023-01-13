//Sum The Tree
//https://www.codewars.com/kata/5800580f8f7ddaea13000025/train/javascript

// return the sum of all values in the tree, including the root
function sumTheTreeValues(root) {
  let sum = 0;
  function eachRecursive(obj)
  {
      for (let k in obj)
      { if (typeof obj[k] == "object")
        eachRecursive(obj[k]);
      else {
        sum += obj.value;
      }
      }
  }
  eachRecursive(root);
  return sum;
}

console.log(
  sumTheTreeValues({
    value: 11,
    left: { value: 0, left: null, right: null },
    right: {
      value: 0,
      left: null,
      right: { value: 1, left: null, right: null },
    },
  })
);

//Best Solutions

function sumTheTreeValues(root) {
  return !root
    ? 0
    : root.value + sumTheTreeValues(root.left) + sumTheTreeValues(root.right);
}