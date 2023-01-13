//Highest Scoring Word
//https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/javascript

function high(x) { 
  x = x.split(" ");
  let  arr = x.map((item) =>
        [...item].reduce((sum, curr) => sum + (curr.charCodeAt(0) - 96), 0)
      )
    ;
  return x[arr.indexOf(Math.max(...arr))];
}

console.log(high("man i need a taxi up to ubud"));

