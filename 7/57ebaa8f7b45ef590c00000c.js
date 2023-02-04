//Numbers to Letters
//https://www.codewars.com/kata/57ebaa8f7b45ef590c00000c/train/javascript

function switcher(x) {
  return x
    .map((i) => String.fromCharCode(97 + 26 - +i))
    .join("")
    .replace(/[\^_`]/g, (match) => {
      switch (match) {
        case "^":
          return " ";
        case "_":
          return "?";
        case "`":
          return "!";
      }
    });
}

//Best Solutions

const alpha = " zyxwvutsrqponmlkjihgfedcba!? ";
const switcher = (x) => x.map((item) => alpha[item]).join("");