//Char Code Calculation
//https://www.codewars.com/kata/57f75cc397d62fc93d000059/train/javascript

function calc(x) {
  let total1 = x.replace(/\w/g, (i) => i.charCodeAt(0));
  let sum1 = Array.from(total1, Number).reduce((sum, curr) => sum + curr, 0);
  let total2 = total1.replace(/7/g, 1);
  let sum2 = Array.from(total2, Number).reduce((sum, curr) => sum + curr, 0);
  return sum1-sum2;
}

console.log(calc("aaaaaddddr"));

//Перевести в чаркод +
//Заменить 7-ки на 1-ки (replace)
//Найти разницу

