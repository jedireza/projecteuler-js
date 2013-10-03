var foundIt = false;
var test = 10;
var result;
while (foundIt === false) {
  var isEvenlyDivisible = true;
  for (var x = 1 ; x < 21 ; x++) {
    if (test % x !== 0) {
      isEvenlyDivisible = false;
      break;
    }
  }
  if (isEvenlyDivisible) {
    foundIt = true;
    result = test;
    break;
  }
  
  test++;
}
console.log(result);