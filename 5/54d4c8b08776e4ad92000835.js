//What's a Perfect Power anyway?
//https://www.codewars.com/kata/54d4c8b08776e4ad92000835/train/javascript

var isPP = function (n) {
    let max = Math.floor(n/2);
    for (let i = 2; i <= max; i++) {
      for (let j = 2; i*j <= n; j++) {
        if (i ** j === n) {
          return [i, j];
        }
      }
    }
  return null;
};


console.log(isPP(9));

//Best Solutions

var isPP = function(n){
  for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
    let j = Math.round(Math.log(n) / Math.log(i))
    if (Math.pow(i, j) == n) {
      return [i, j]
    };
  }
  return null;
}
