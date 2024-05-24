//Coding Meetup #2 - Higher-Order Functions Series - Greet developers
//https://www.codewars.com/kata/58279e13c983ca4a2a00002a

function greetDevelopers(list) {
  for (let i = 0; i < list.length; i++) {
    list[
      i
    ].greeting = `Hi ${list[i].firstName}, what do you like the most about ${list[i].language}?`;
  }

  return list;
}

function greetDevelopers(list) {
  list.map(
    (i) =>
      (i.greeting = `Hi ${i.firstName}, what do you like the most about ${i.language}?`)
  );
  return list;
}

const list1 = [
  {
    firstName: "Sofia",
    lastName: "I.",
    country: "Argentina",
    continent: "Americas",
    age: 35,
    language: "Java",
  },
  {
    firstName: "Lukas",
    lastName: "X.",
    country: "Croatia",
    continent: "Europe",
    age: 35,
    language: "Python",
  },
  {
    firstName: "Madison",
    lastName: "U.",
    country: "United States",
    continent: "Americas",
    age: 32,
    language: "Ruby",
  },
];

console.log(greetDevelopers(list1));
