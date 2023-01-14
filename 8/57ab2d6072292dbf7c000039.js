//Polish alphabet
//https://www.codewars.com/kata/57ab2d6072292dbf7c000039/train/javascript

function correctPolishLetters (string) {
  let alf = {
    'ą': "a",
    'ć': "c",
    'ę': "e",
    'ł': 'l',
    'ń': 'n',
    'ó': 'o',
    'ś': 's',
    'ź': 'z',
    'ż': 'z',
  }
  return string.split('').map((item) => alf[item] ? alf[item] : item ).join('');
}

console.log(correctPolishLetters("Jędrzej Błądziński"));

// Best Solutions

function correctPolishLetters(string) {
  var dict = {
    ą: "a",
    ć: "c",
    ę: "e",
    ł: "l",
    ń: "n",
    ó: "o",
    ś: "s",
    ź: "z",
    ż: "z",
  };
  return string.replace(/[ąćęłńóśźż]/g, (match) => dict[match]);
}

