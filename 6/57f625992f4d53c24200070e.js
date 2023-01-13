//Lottery Ticket
//https://www.codewars.com/kata/57f625992f4d53c24200070e/train/javascript

function bingo(ticket, win) {
  let count = 0;
  for (let i = 0; i < ticket.length; i++) {
    let arr = ticket[i][0].split('').map((item) => item.charCodeAt(0));
    if (arr.includes(ticket[i][1]))
      count++;
  }
  return count >= win ? "Winner!" : "Loser!";
}

console.log(bingo([["XQMH",78], ["ISOQGK",74], ["HRXFAWB",66], ["IQMAC",67], ["XEIXH",67], ["SQK",71]], 1));

function bingo2(ticket, win) {
  let count = 0;
  ticket.map((i) => {
    let arr = i[0].split("").map((item) => item.charCodeAt(0));
    arr.includes(i[1]) && count++;
  })
  return count >= win ? "Winner!" : "Loser!";
}

console.log(bingo2([["XQMH",78], ["ISOQGK",74], ["HRXFAWB",66], ["IQMAC",67], ["XEIXH",67], ["SQK",71]], 1));
