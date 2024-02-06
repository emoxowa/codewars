//Array - squareUp b!ij
//https://www.codewars.com/kata/5a8bcd980025e99381000099/train/javascript

function squareUp(n) {
  let arr = [];

  for (let i = 1; i < n; i++) {
    for(let j = n; j >= 1; j--) {
      arr.push(j <= i ? j : 0);
    }
  }

  return arr; 
}

console.log(squareUp(4));

