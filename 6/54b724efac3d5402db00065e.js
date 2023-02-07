//Decode the Morse code
//https://www.codewars.com/kata/54b724efac3d5402db00065e/train/javascript

decodeMorse = function (morseCode) {
  return morseCode
    .trim()
    .split("   ")
    .map((i) => i.split(" ").map((item) => (item = MORSE_CODE[item])).join(""))
    .join(' ');
};