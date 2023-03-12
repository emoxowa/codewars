//Give me a Diamond
//https://www.codewars.com/kata/5503013e34137eeeaa001648/train/javascript

function diamond(n) {
  if (n <= 0 || n % 2 === 0) return null;
  let result = "";
  for (let i = 1; i <= n; i += 2) {
    result += " ".repeat((n - i) / 2) + "*".repeat(i) + "\n";
  }
  for (let i = n - 2; i >= 1; i -= 2) {
    result += " ".repeat((n - i) / 2) + "*".repeat(i) + "\n";
  }
  return result;
}