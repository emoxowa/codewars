//Crash Override
//https://www.codewars.com/kata/578c1e2edaa01a9a02000b7f/train/javascript

function aliasGen(a, b) {
  if (!/[a-z]/gi.test(a[0]) || !/[a-z]/gi.test(b[0])) {
    return "Your name must start with a letter from A - Z.";
  } else {
    return `${firstName[a[0].toUppercase()]} ${surname[b[0].toUppercase()]}`;
  }
}

console.log(aliasGen("Anuddanumbha", "23200"));