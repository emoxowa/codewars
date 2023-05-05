//Love vs friendship
//https://www.codewars.com/kata/59706036f6e5d1e22d000016/train/javascript

function wordsToMarks(string: string): number {  
  let result: number = 0;
  for (let i = 0; i < string.length; i++) {
    result += string[i].charCodeAt(0)-96;
  }
  return result;
}

console.log(wordsToMarks("love"));

