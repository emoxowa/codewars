//Nickname Generator
//https://www.codewars.com/kata/593b1909e68ff627c9000186

function nicknameGenerator(name) {
  if (name.length <= 3) {
    return "Error: Name too short";
  }
  return /[^aeiou]/i.test(name[2]) ? name.slice(0, 3) : name.slice(0, 4);
}

console.log(nicknameGenerator("Kayne"));
