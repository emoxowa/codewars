//Parts of a list
//https://www.codewars.com/kata/56f3a1e899b386da78000732

function partlist(arr) {
  let result = [];
  for (let i = 1; i < arr.length; i++) {
    result.push([arr.slice(0, i).join(" "), arr.slice(i).join(" ")]);
  }
  return result;
}

console.log(partlist(["I", "wish", "I", "hadn't", "come"]));
