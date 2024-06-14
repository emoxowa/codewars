//Sort My Animals
//https://www.codewars.com/kata/58ff1c8b13b001a5a50005b4

function sortAnimal(animals) {
  return [...animals].sort(
    (a, b) => a.numberOfLegs - b.numberOfLegs || a.name.localeCompare(b.name)
  );
}

console.log(
  sortAnimal([
    { name: "Centipede", numberOfLegs: 100 },
    { name: "Snail", numberOfLegs: 0 },
    { name: "Lizard", numberOfLegs: 4 },
    { name: "Dog", numberOfLegs: 4 },
    { name: "Human", numberOfLegs: 2 },
    { name: "Bird", numberOfLegs: 2 },
  ])
);
