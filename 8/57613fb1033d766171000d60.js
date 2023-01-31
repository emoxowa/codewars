//UEFA EURO 2016
//https://www.codewars.com/kata/57613fb1033d766171000d60/train/javascript

function uefaEuro2016(teams, scores) {
  if (scores[0] === scores[1])
    return `At match ${teams[0]} - ${teams[1]}, teams played draw.`;
  else
    return `At match ${teams[0]} - ${teams[1]}, ${
      teams[scores.indexOf(Math.max(...scores))]
    } won!`;
}