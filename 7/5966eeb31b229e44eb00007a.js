//V A P O R C O D E
//https://www.codewars.com/kata/5966eeb31b229e44eb00007a

function vaporcode(string) {
  return string.replaceAll(' ', '').toUpperCase().split('').join(' ');
 }

console.log(vaporcode("Why isnt my code working"));