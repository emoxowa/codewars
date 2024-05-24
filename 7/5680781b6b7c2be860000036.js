//Find the vowels
//https://www.codewars.com/kata/5680781b6b7c2be860000036

function vowelIndices(word) {
  let vowels = ['a', 'i', 'u', 'o', 'e', 'y']
  let arr = [];

  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i].toLowerCase())) {
      arr.push(i+1);
    }
  }
  return arr;
}

console.log(vowelIndices("YoMama"));
