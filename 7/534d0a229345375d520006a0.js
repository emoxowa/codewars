//Power of two
//https://www.codewars.com/kata/534d0a229345375d520006a0

function isPowerOfTwo(n) {
 return Number.isInteger(Math.log2(n));
}

console.log(isPowerOfTwo(536870912));
