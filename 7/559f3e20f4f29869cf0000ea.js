//Sort with Arrow Functions
//Order People by age Using Arrow Function

var OrderPeople = function (people) {
  return people.sort((a, b) => a.age - b.age);
};
