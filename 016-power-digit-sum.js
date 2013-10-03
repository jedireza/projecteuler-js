var bigint = require('big-integer');

var digit = process.argv[2] || 2;
var power = process.argv[3] || 1000;
var product = bigint(digit).pow(power);
console.log(product.value.join(''));
var sum = 0;
for (var x = 0 ; x < product.toString().length ; x++) {
  sum += parseInt(product.toString()[x]);
}
console.log(sum);