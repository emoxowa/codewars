//Encrypt this!
//https://www.codewars.com/kata/5848565e273af816fb000449/train/javascript

var encryptThis = function (text) {
  return text.split(' ')
    .map((i) => {
    return (
      i[0].charCodeAt(0) +
      (i.length > 1 ? i[i.length - 1] : "") +
      (i.length > 2 ? i.substr(2, i.length - 3)+i[1] : "")
    );
  }).join(' ');
};

console.log(encryptThis("A wise old owl lived in an oak"));