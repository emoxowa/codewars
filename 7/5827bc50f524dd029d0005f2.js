//Coding Meetup #4 - Higher-Order Functions Series - Find the first Python developer
//https://www.codewars.com/kata/5827bc50f524dd029d0005f2

function getFirstPython(list) {
  const obj = list.find((i) => i.language === "Python");
  return obj
    ? `${obj.firstName}, ${obj.country}`
    : "There will be no Python developers";
}

const list1 = [
  {
    firstName: "Mark",
    lastName: "G.",
    country: "Scotland",
    continent: "Europe",
    age: 22,
    language: "JavaScript",
  },
  {
    firstName: "Victoria",
    lastName: "T.",
    country: "Puerto Rico",
    continent: "Americas",
    age: 30,
    language: "Python",
  },
  {
    firstName: "Emma",
    lastName: "B.",
    country: "Norway",
    continent: "Europe",
    age: 19,
    language: "Clojure",
  },
];

console.log(getFirstPython(list1));
