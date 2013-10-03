var getDivisors = function(value) {
  var divisors = [];
  
  //always divisible by 1
  divisors.push(1);
  
  //divisor testing
  for (var x = 2 ; x < value ; x++) {
    if (value % x === 0) {
      divisors.push(x);
    }
  }
  
  return divisors;
};

var sumOfDivisors = function(value) {
  var divisors = getDivisors(value);
  
  var sum = 0;
  for (var x = 0 ; x < divisors.length ; x++) {
    sum += divisors[x];
  }
  return sum;
};

var findAmicableNumbers = function(cap) {
  var amicableNumbers = [];
  
  for (var a = 1 ; a < cap ; a++) {
    var b = sumOfDivisors(a);
    var c = sumOfDivisors(b);
    
    if (a === c && a !== b) {
      if (amicableNumbers.indexOf(a) == -1) {
        amicableNumbers.push(a);
      }
      if (amicableNumbers.indexOf(b) == -1) {
        amicableNumbers.push(b);
      }
    }
  }
  
  return amicableNumbers;
};

var amicables = findAmicableNumbers(10000);
console.log(amicables);

var sum = 0;
for (var x = 0 ; x < amicables.length ; x++) {
  sum += amicables[x];
}

console.log(sum);