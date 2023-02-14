//Equal Sides Of An Array
//https://www.codewars.com/kata/5679aa472b8f57fb8c000047/train/javascript

function findEvenIndex(arr) {
  for (let i = 0; i < arr.length; i++) {
    let a = arr.reduce((sum, curr, index) => sum + (index < i ? curr: 0), 0);
    let b = arr.reduce((sum, curr, index) => sum + (index > i ? curr : 0), 0);
    if (a == b) {
      return i;
    }
  }
  return -1; 
}

console.log(findEvenIndex([1, 100, 50, -51, 1, 1]));