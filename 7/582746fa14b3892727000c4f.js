//Coding Meetup #1 - Higher-Order Functions Series - Count the number of JavaScript developers coming from Europe
//https://www.codewars.com/kata/582746fa14b3892727000c4f/train/javascript

function countDevelopers(list) {
  return list.reduce(
    (sum, curr) =>
      sum +
      (curr.continent == "Europe" && curr.language == "JavaScript" ? 1 : 0),
    0
  );
}