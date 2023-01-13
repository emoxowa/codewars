//Crash Override
//https://www.codewars.com/kata/578c1e2edaa01a9a02000b7f/train/javascript

function aliasGen(a, b) {
  if (a[0].match(/\d/) || b[0].match(/\d/)) {
    return "Your name must start with a letter from A - Z.";
  } else
    return firstName[a[0].toUpperCase()] + " " + surname[b[0].toUpperCase()];
}