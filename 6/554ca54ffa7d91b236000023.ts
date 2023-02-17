//Delete occurrences of an element if it occurs more than n times
//https://www.codewars.com/kata/554ca54ffa7d91b236000023/train/javascript

function deleteNth(arr: number[], n: number): number[] {
  let result: number[] = []; 
  for (let i = 0; i < arr.length; i++) {
    if (result.filter(item => item === arr[i]).length < n) {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(deleteNth([20,37,20,21], 1));