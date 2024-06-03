//Suzuki needs help lining up his students!
//https://www.codewars.com/kata/5701800886306a876a001031

function lineupStudents(students) {
  return students
    .split(" ")
    .sort()
    .reverse()
    .sort((a, b) => b.length - a.length);
}

string =
  "Tadashi Takahiro Takao Takashi Takayuki Takehiko Takeo Takeshi Takeshi";

console.log(lineupStudents(string));
