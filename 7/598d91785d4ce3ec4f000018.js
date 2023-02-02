//Word values
//https://www.codewars.com/kata/598d91785d4ce3ec4f000018/train/javascript

function wordValue(a) {
  return a.map(
    (i, index) =>
      i
        .replace(/\ /g, "")
        .split("")
        .map((item) => item.charCodeAt(0) - 96)
        .reduce((sum, curr) => sum + curr, 0) *
      (index + 1)
  );
}

console.log(wordValue(["ds  sdfs "]));