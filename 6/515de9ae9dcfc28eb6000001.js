//Split Strings
//https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/train/javascript

function solution(str) {
  return str.length % 2 ? (str+'_').match(/.{2}/gi) : str.match(/.{2}/gi) || [];
}

console.log(solution(""));

//Best Solutions

function solution(s) {
  return (s + "_").match(/.{2}/g) || [];
}