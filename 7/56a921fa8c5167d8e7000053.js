//Password validator
//https://www.codewars.com/kata/56a921fa8c5167d8e7000053

function password(str) {
  return (
    str.length > 7 && /[A-Z]/.test(str) && /[a-z]/.test(str) && /\d/.test(str)
  );
}

console.log(password("Ab1!@#$%^&*()-_+={}[]|:;?/>.<,"));
