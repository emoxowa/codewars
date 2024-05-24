//Build a square
//59a96d71dbe3b06c0200009c

function generateShape(integer) { 
  let arr = [];
  for (let i = 0; i < integer; i++) {
    arr.push("+".repeat(integer));
  }
  return arr.join('\n');
}

function generateShape(n) {
  return ("+".repeat(n) + "\n").repeat(n).trim();
}

console.log(generateShape(8));