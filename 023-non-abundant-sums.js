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

var abundantList = [];
for (var x = 1 ; x <= 28123 ; x++) {
  var divisorSum = sumOfDivisors(x);
  if (divisorSum > x && abundantList.indexOf(x) == -1) {
    abundantList.push(x);
  }
}
abundantList.sort(function(a, b) {
  return a - b;
});

//find all the numbers that can be made from two abundant numbers < 28123
var madeFromAbundants = [];
for (var x = 0 ; x < abundantList.length ; x++) {
  for (var y = x ; y < abundantList.length ; y++) {
    var option1 = abundantList[x] + abundantList[y];
    if (option1 < 28123) {
      if (madeFromAbundants.indexOf(option1) == -1) {
        console.log(option1);
        madeFromAbundants.push(option1);
      }
    }
    else {
      break;
    }
  }
}

//find the sum of numbers that cannot be made from abundants
var sum = 0;
for (var x = 1 ; x <= 20161 ; x++) {
  if (madeFromAbundants.indexOf(x) == -1) {
    sum += x;
  }
}

//console.log(madeFromAbundants);
console.log(sum);