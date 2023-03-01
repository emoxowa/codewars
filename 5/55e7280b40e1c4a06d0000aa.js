//Best travel
//https://www.codewars.com/kata/55e7280b40e1c4a06d0000aa/train/javascript

function chooseBestSum(t, k, ls) {
  let arr = [];

  function rec(sum, ar, n) {
    console.log(arr);
    if (n == 0) {
      arr.push(sum);
    } else {
      for (let i = 0; i < ar.length; i++) {
        rec(sum + ar[i], ar.slice(i + 1), n - 1);
      }
    }
  }

  rec(0, ls, k);

  var sol = arr.sort((a, b) => b - a).find((a) => a <= t);
  return typeof sol === "undefined" ? null : sol;
}

console.log(chooseBestSum(163, 3, [50, 55, 56, 57, 58]));




