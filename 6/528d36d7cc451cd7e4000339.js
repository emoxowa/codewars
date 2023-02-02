//Who has the most money?
//https://www.codewars.com/kata/528d36d7cc451cd7e4000339/train/javascript


class Student {
  constructor(name, fives, tens, twenties) {
    this.name = name;
    this.fives = fives;
    this.tens = tens;
    this.twenties = twenties;
  }
}

  const andy = new Student("Andy", 0, 0, 2);
  const stephen = new Student("Stephen", 0, 4, 0);
  const eric = new Student("Eric", 8, 1, 0);
  const david = new Student("David", 2, 0, 1);
  const phil = new Student("Phil", 0, 2, 1);
  const cam = new Student("Cameron", 2, 2, 0);
  const geoff = new Student("Geoff", 0, 3, 0);

function mostMoney(students) {
  let money = students.map((i) => 5 * i.fives + 10 * i.tens + 20 * i.twenties);
  let max = Math.max(...money);
  return money.every((i) => i === max) & students.length > 1
    ? "all"
    : students[money.indexOf(max)].name;
}

console.log(mostMoney([andy]));