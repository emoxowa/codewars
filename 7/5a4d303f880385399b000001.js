//Strong Number (Special Numbers Series #2)
//https://www.codewars.com/kata/5a4d303f880385399b000001/train/javascript

function strong(n) {
  let sum = 0;
  let arr = n.toString().split('');
  for (let i = 0; i < arr.length; i++) {
    arr[i] = +arr[i];
    let num = 1;
    for (let j = 1; j <= arr[i]; j++) {
      num *= j;    
    }  
    sum += num;
  }
  return sum === n ? "STRONG!!!!" : "Not Strong !!";
}

console.log(strong(145));

console.log(Array.from(String(145), Number));
