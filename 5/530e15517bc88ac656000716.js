//Rot13
//https://www.codewars.com/kata/530e15517bc88ac656000716/train/javascript

function rot13(message) {
  return message.replace(/[a-z]/gi, (i) =>
    i.toUpperCase() === i
      ? String.fromCharCode(((i.charCodeAt() - 65 + 13) % 26) + 65)
      : String.fromCharCode(((i.charCodeAt() - 97 + 13) % 26) + 97)
  );
}

console.log(rot13("M9"));

//Best Solutions

function rot132(message) {
  var abc = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLM';
  return message.replace(/[a-z]/gi, c => abc[abc.indexOf(c) + 13]);
}

