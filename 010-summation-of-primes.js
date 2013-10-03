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
var cap = process.argv[2] || 2000000;
for (var x = 2 ; x < cap ; x++) {
  if (isPrime(x)) {
    primes.push(x);
  }
  
  if (x % 10000) {
    console.log('finding primes...'+ x)
  }
}

var sum = 0;
for (var x = 0 ; x < primes.length ; x++) {
  sum += primes[x];
}

//console.log(primes);
console.log(sum);