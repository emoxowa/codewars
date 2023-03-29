//Help the bookseller !
//https://www.codewars.com/kata/54dc6f5a224c26032800005c/train/javascript

function stockList(listOfArt, listOfCat) {
  let obj = {};
  let arr = [];
  for (let i = 0; i < listOfArt.length; i++) {
    if (!obj[listOfArt[i][0]]) {
      obj[listOfArt[i][0]] = +listOfArt[i].replace(/[\D]/g, "");
    } else {
      obj[listOfArt[i][0]] +=+listOfArt[i].replace(/[\D]/g, "");
    }
  }
  listOfCat.map((i) => obj[i] ? arr.push(`(${i} : ${obj[i]})`): arr.push(`(${i} : 0)`));
  return listOfArt.length != 0 ? arr.join(" - ") : '';
}

let b = ["BBAR 150", "CDXE 515", "BKWR 250", "BTSQ 890", "DRTY 600"];
let c = ["A", "B", "C", "D"];

console.log(stockList(b, c));