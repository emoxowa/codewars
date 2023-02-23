//Pick peaks
//https://www.codewars.com/kata/5279f6fe5ab7f447890006a7/train/javascript

function pickPeaks(arr) {
  let obj = { pos: [], peaks: [] };
  for (let i = 1; i < arr.length; i++) {
    let k = i;
    while (arr[i] == arr[i + 1]) {
      i++;
    }
    if (arr[k] > arr[k - 1] && arr[i] > arr[i + 1]) {
      obj.pos.push(k);
      obj.peaks.push(arr[k]);
    }
    }
  return obj;
}

console.log(
  pickPeaks([ 1, 2, 5, 4, 3, 2, 3, 6, 4, 1, 2, 3, 3, 4, 5, 3, 2, 1, 2, 3, 5, 5, 4, 3 ])
);

