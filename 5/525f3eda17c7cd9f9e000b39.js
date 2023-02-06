//Calculating with Functions
//https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39/train/javascript

function zero() {return arguments[0] ? Math.floor(eval('0' + arguments[0])) : '0'}
function one() {return arguments[0] ? Math.floor(eval('1' + arguments[0])) : '1'}
function two() {return arguments[0] ? Math.floor(eval('2' + arguments[0])) : '2'}
function three() {return arguments[0] ? Math.floor(eval('3' + arguments[0])) : '3'}
function four() {return arguments[0] ? Math.floor(eval('4' + arguments[0])) : '4'}
function five() {return arguments[0] ? Math.floor(eval('5' + arguments[0])) : '5'}
function six() {return arguments[0] ? Math.floor(eval('6' + arguments[0])) : '6'}
function seven() {return arguments[0] ? Math.floor(eval('7' + arguments[0])) : '7'}
function eight() {return arguments[0] ? Math.floor(eval('8' + arguments[0])) : '8'}
function nine() {return arguments[0] ? Math.floor(eval('9' + arguments[0])) : '9'}

function plus() {return '+' + arguments[0]}
function minus() {return '-' + arguments[0]}
function times() {return '*' + arguments[0]}
function dividedBy() {return '/' + arguments[0]}

console.log(six(dividedBy(two())));

//Best Solutions 
const zero = (a) => (a ? a(0) : 0);
const one = (a) => (a ? a(1) : 1);
const two = (a) => (a ? a(2) : 2);
const three = (a) => (a ? a(3) : 3);
const four = (a) => (a ? a(4) : 4);
const five = (a) => (a ? a(5) : 5);
const six = (a) => (a ? a(6) : 6);
const seven = (a) => (a ? a(7) : 7);
const eight = (a) => (a ? a(8) : 8);
const nine = (a) => (a ? a(9) : 9);

const plus = (a) => (b) => a + b;
const minus = (a) => (b) => b - a;
const dividedBy = (a) => (b) => Math.floor(b / a);
const times = (a) => (b) => a * b;