var test = parseInt(process.argv[2]) || 600851475143;

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

var largestPrimeFactor = function(value) {
  var factors = [];
  for (var x = 2 ; x < Math.sqrt(value) ; x++) {
    if (value % x === 0 && isPrime(x)) {
      factors.push(x);
    }
  }
  return factors;
};

console.log(test);
console.log(largestPrimeFactor(test));