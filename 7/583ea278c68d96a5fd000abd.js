//Coding Meetup #17 - Higher-Order Functions Series - Sort by programming language
//https://www.codewars.com/kata/583ea278c68d96a5fd000abd

function sortByLanguage(list) {
  return list.sort(
    (a, b) =>
      a.language.localeCompare(b.language) ||
      a.firstName.localeCompare(b.firstName)
  );
}

var list1 = [
  {
    firstName: "Nikau",
    lastName: "R.",
    country: "New Zealand",
    continent: "Oceania",
    age: 39,
    language: "Ruby",
  },
  {
    firstName: "Precious",
    lastName: "G.",
    country: "South Africa",
    continent: "Africa",
    age: 22,
    language: "JavaScript",
  },
  {
    firstName: "Maria",
    lastName: "S.",
    country: "Peru",
    continent: "Americas",
    age: 30,
    language: "C",
  },
  {
    firstName: "Agustin",
    lastName: "V.",
    country: "Uruguay",
    continent: "Americas",
    age: 19,
    language: "JavaScript",
  },
];

console.log(sortByLanguage(list1));