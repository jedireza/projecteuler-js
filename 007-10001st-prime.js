var isPrime = function(value) {
  if (value % 2 === 0) {
    return (value === 2);
  }
  else if (value % 3 === 0) {
    return (value === 3);
  }
  else {
    for (var x = 5 ; x < value/2 ; x += 2) {
      if (value % 3 === 0) continue;
      
      if (value % x == 0) {
        return false;
      }
    }
    
    return true;
  }
};

var primes = [];
var test = 2;
while (primes.length !== 10001) {
  if (isPrime(test)) {
    primes.push(test);
  }
  test++;
}

console.log(primes.pop());