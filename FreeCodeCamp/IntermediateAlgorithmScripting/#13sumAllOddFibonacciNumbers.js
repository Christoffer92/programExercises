//Bonfire: Sum All Odd Fibonacci Numbers
function sumFibs(num) {

  var firstNum = 1; 
  var secoundNum = 1;
  var fibNum = 2;
  var sum = 2;

  while (num >= fibNum){
    fibNum = firstNum + secoundNum;
    
    if (fibNum % 2 != 0 && fibNum <= num){
      sum += fibNum;
      console.log(fibNum, sum);
    }
    
    firstNum = secoundNum;
    secoundNum = fibNum;
  }
  console.log(sum);

  return sum;
}

sumFibs(75025);
//Tests succeded: 1000, 4000000, 4, 75024, 75025
//Made by: Christoffer92