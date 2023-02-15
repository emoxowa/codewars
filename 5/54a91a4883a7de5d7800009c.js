//String incrementer
//https://www.codewars.com/kata/54a91a4883a7de5d7800009c/train/javascript

function incrementString(strng) {
  return /[^0-9]$/g.test(strng)
    ? strng + "1"
    : strng.replace(/[0-9]+$/g, (a) => (+a + 1).toString().padStart(a.length, "0"));
}

console.log(incrementString("foo09"));