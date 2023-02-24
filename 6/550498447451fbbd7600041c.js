//Are they the "same"?
//https://www.codewars.com/kata/550498447451fbbd7600041c/train/javascript

function comp(array1, array2) {
  if (array1 === [] || array2 === [] || !array1 || !array2) return false; 
  let arr2 = array2.map(i => Math.sqrt(i)).sort((a, b) => a - b);
  return array1
        .sort((a, b) => a - b)
        .map((i, index) => (i = i - arr2[index]))
        .every((i) => i == 0)
}

console.log(
  comp(
    [],
    null
  )
);

//Best Solutions 

function comp(a, b) {
  return !!a && !!b && a.map(x => x*x).sort().join() == b.sort().join();
}