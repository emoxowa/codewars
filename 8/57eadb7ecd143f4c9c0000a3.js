//Abbreviate a Two Word Name
//https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/train/javascript

function abbrevName(name) {
  const [i, f] = name.split(" ");
  return i[0].toUpperCase() + `.` + f[0].toUpperCase();
}