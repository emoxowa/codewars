//First non-repeating character
//https://www.codewars.com/kata/52bc74d4ac05d0945d00054e/train/javascript

function firstNonRepeatingLetter(s) {
  for (let i = 0; i < s.length; i++) {
    let a = s.substring(0, i).toLowerCase();
    let b = s.slice(i + 1).toLowerCase();
    if (a.includes(s[i].toLowerCase()) || b.includes(s[i].toLowerCase())) {
      continue;
    } else {
      return s[i];
    }
  }
  return '';
}

console.log(firstNonRepeatingLetter("sTreSS"));

// substring(i-1, i)  s slice(i+1)
