//Regex Password Validation
//https://www.codewars.com/kata/52e1476c8147a7547a000811/train/javascript

const REGEXP = /^(?!.*[\W_])(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

console.log("djI38D55");

//Best Solutions

const REGEXP1 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[A-Za-z\d]{6,}$/;