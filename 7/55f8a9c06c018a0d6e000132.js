//Regex validate PIN code
//https://www.codewars.com/kata/55f8a9c06c018a0d6e000132/train/javascript

function validatePIN(pin) {
  return (
    (/\d{4}/.test(pin) && pin.length === 4) ||
    (pin.length === 6 && /\d{6}/.test(pin))
  );
}

//Best Solutions

function validatePIN(pin) {
  return /^(\d{4}|\d{6})$/.test(pin);
}