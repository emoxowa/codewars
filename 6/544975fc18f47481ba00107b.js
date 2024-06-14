//Circularly Sorted Array
//https://www.codewars.com/kata/544975fc18f47481ba00107b

function isCircleSorted(arr) {
  const index = arr.findIndex((el, i, arr) => el > arr[i + 1]);
  let resultArr = index === -1 ? arr : [...arr.slice(index + 1), ...arr.slice(0, index + 1)]; 
  for (let i = 0; i < resultArr.length; i++) {
    if (resultArr[i + 1] < resultArr[i]) {
      return false
    }
  }
  return true
}

console.log(isCircleSorted([-90, -80, -38, -18, 28, 83]));
