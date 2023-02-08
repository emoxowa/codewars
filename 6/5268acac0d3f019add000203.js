//Design a Simple Automaton (Finite State Machine)
//https://www.codewars.com/kata/5268acac0d3f019add000203/train/javascript

class Automaton {
  readCommands(commands) {
    return (
      commands.reduce(
        (acc, command) =>
          command === "1" ? "q2" : { q1: "q1", q2: "q3", q3: "q2" }[acc],
        "q1"
      ) === "q2"
    );
  }
}

var myAutomaton = new Automaton();
console.log(myAutomaton.readCommands([
  '1', '0', '1', '0', '1',
  '1', '0', '0', '0', '0',
  '1', '0', '1', '0', '1',
  '0', '1', '0', '0', '0',
  '0'
])); //q2, q3, q2, q2, q3

//Best Solutions

const myAutomaton = {
  readCommands: (c) => /1(00)*$/.test(c.join("")),
};