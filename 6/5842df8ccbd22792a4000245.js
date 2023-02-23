//Write Number in Expanded Form
//https://www.codewars.com/kata/5842df8ccbd22792a4000245/train/javascript

function expandedForm(num) {
  let result = '';
  let arr = Array.from(String(num), Number);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      result += arr[i] + "0".repeat(String(num).length - 1) + ` + `;
    }
    num = Math.floor(num / 10);
  }
  return result.slice(0, -3);
}

console.log(expandedForm(70304));

//Best Solutions

function expandedForm(num) {
  return String(num)
    .split("")
    .map((num, index, arr) => num + "0".repeat(arr.length - index - 1))
    .filter((num) => Number(num) != 0)
    .join(" + ");
}