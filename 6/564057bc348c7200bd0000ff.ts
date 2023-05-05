//A Rule of Divisibility by 13
//https://www.codewars.com/kata/564057bc348c7200bd0000ff/train/javascript

function thirt(n: number) : number {
  const mode: number[] = [1, 10, 9, 12, 3, 4];
  n = Array.from(String(n), Number)
    .reverse()
    .map((i, index) => i * mode[index % 6])
    .reduce((sum, curr) => sum + curr, 0);
  return n < 100 ? n : thirt(n);
}

console.log(thirt(1234567));
