//Simple Encryption #1 - Alternating Split
//https://www.codewars.com/kata/57814d79a56c88e3e0000786/train/javascript

function encrypt(text, n) {
  if (n <= 0 || !text ) {
    return text;
  }
  let arr1 = [];
  let arr2 = [];
  for (let i = 0; i < text.length; i++) {
    if (i % 2) {
      arr1.push(text[i]);
    } else {
      arr2.push(text[i]);
    }
  }
  return  n == 1 ? [...arr1, ...arr2].join('') : encrypt([...arr1, ...arr2], --n);
}


function decrypt(encryptedText, n) { 
  if (n <= 0 || !encryptedText) {
    return encryptedText;
  }
  let arr1 = encryptedText.slice(Math.floor(encryptedText.length/2));
  let arr2 = encryptedText.substring(0, Math.floor(encryptedText.length / 2));
  let arr = [];
  for (let i = 0; i < arr1.length; i++) {
    arr.push(arr1[i]);
    arr.push(arr2[i]);
  }
  n--;
  return n <= 0 ? arr.join("") : decrypt(arr.join(''), n);
}

console.log(encrypt("This is a test!", 3));
console.log(decrypt(" Tah itse sits!", 3));