//Alphabet symmetry
//https://www.codewars.com/kata/59d9ff9f7905dfeed50000b0

function solve(arr){  
  const alph = "abcdefghijklmnopqrstuvwxyz".split("");
  let reuslt = [];
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i].split('')
    let count = 0;
    for (let j = 0; j < item.length; j++) {
      if (alph.indexOf(item[j].toLowerCase()) === j)
        count++;
    }
    reuslt.push(count);
  }
  return reuslt;
};

function solve(arr){  
  const alphabeth = "abcdefghijklmnopqrstuvwxyz";
  return arr.map(x => x.toLowerCase().split('').filter((y,i) => i==alphabeth.indexOf(y)).length);
};

console.log(solve(["abode", "ABc", "xyzD"]));
