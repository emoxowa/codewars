//Consecutive strings
//https://www.codewars.com/kata/56a5d994ac971f1ac500003e/train/javascript

function longestConsec(strarr, k) {
  let arr = [];
  for (let i = 0; i < strarr.length; i++) {
    arr.push(strarr.slice(i, k+i).join(""));
  }
  return (k > strarr.length || k <=0 ) ? '' : arr.sort((a,b) => b.length - a.length)[0] ;
}

console.log(longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 3));
