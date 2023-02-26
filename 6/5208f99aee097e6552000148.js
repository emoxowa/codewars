//Break camelCase
//https://www.codewars.com/kata/5208f99aee097e6552000148/train/javascript

function solution(string) {
  return string.replace(/[A-Z]/g, (a) => ` ${a}` );
}

console.log(solution("camelCasingTest"));