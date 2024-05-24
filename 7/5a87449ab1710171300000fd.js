//Tidy Number (Special Numbers Series #9)
//https://www.codewars.com/kata/5a87449ab1710171300000fd

function tidyNumber(n) {
  const str = String(n);
  for (let i = 0; i < str.length; i++) {
    if (str[i + 1] < str[i]) {
      return false
    }
  }
  return true
}

console.log(tidyNumber(2789));
