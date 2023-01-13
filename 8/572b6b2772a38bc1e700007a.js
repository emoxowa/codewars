//ASCII Total
//https://www.codewars.com/kata/572b6b2772a38bc1e700007a/train/javascript

function uniTotal(string) {
  return [...string].reduce((acc, curr) => acc + curr.charCodeAt(0), 0);
}