//Coding Meetup #3 - Higher-Order Functions Series - Is Ruby coming?
//https://www.codewars.com/kata/5827acd5f524dd029d0005a4

function isRubyComing(list) {
  return list.some((i) => i.language === "Ruby");
}

const list1 = [
  {
    firstName: "Emma",
    lastName: "Z.",
    country: "Netherlands",
    continent: "Europe",
    age: 29,
    language: "Ruby",
  },
  {
    firstName: "Piotr",
    lastName: "B.",
    country: "Poland",
    continent: "Europe",
    age: 128,
    language: "Javascript",
  },
  {
    firstName: "Jayden",
    lastName: "P.",
    country: "Jamaica",
    continent: "Americas",
    age: 42,
    language: "JavaScript",
  },
];

console.log(isRubyComing(list1));