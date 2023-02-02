//Valid Parentheses
//https://www.codewars.com/kata/52774a314c2333f0a7000688/train/javascript

function validParentheses(parens) {
  str = parens.replace(/\(\)/g, "");
  return str.length === 0 ? true : /\(\)/.test(str) ? validParentheses(str) : false;
}

console.log(validParentheses("(((())))"));

//Best Solutions

function validParentheses(v) {
  while (v.includes("()")) {
    v = v.replace("()", "");
  }
  return v.length === 0;
}