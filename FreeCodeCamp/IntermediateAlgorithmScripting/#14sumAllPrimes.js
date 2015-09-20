//Bonfire: Sum All Primes
function isPrime(num){
  // I used trail division.
  
  var isPrime = false;  
  if (num == 2)     //2 is the exception for the rule.
    return true;    
  if (num % 2 == 0) // All even numbers are composites, so not a prime number.
    return false;
  
  for (var i = 2; i<=num-1; i++){
    if (num % i == 0){              // A prime may only be divided into a whole number by 1 and itself.
    return false;  
    }
    else {
     isPrime = true; 
    }
  }
  return isPrime;
}

function sumPrimes(num) {
  var sum = 0;
  for (var i = 0; i<=num; i++){  //Here we sum up all primes up to and including the provided number.
    if (isPrime(i) == true){
      sum += i;
    }
  }
  return sum;
}

sumPrimes(10);
//Tested with: 10, 977.
//Christoffer92