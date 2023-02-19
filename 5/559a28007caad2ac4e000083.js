//Perimeter of squares in a rectangle
//https://www.codewars.com/kata/559a28007caad2ac4e000083/train/javascript

function perimeter(n) {
  let arr = [0, 1];
  for (let i = 0; i < n; i++) {
    arr.push(arr[i] + arr[i + 1]);
  } 
  return arr.reduce((sum, curr) => sum + curr, 0) * 4;
}

console.log(perimeter(0));

