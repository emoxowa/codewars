//MinMinMax
//https://www.codewars.com/kata/58d3487a643a3f6aa20000ff/train/javascript

function minMinMax(array) {
  let minimumAbsent = Math.min(...array);
  while (array.includes(minimumAbsent)) {
    minimumAbsent += 1;
  }
  return [Math.min(...array), minimumAbsent, Math.max(...array)];
}

console.log(minMinMax([2, -4, 8, -5, 9, 7]));

//Best Solutions
minMinMax2 = (array) => {
  b = Math.min(...array);
  while (array.includes(b) == true) {
    b += 1;
  }
  return [Math.min(...array), b, Math.max(...array)];
};