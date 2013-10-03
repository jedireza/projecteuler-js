var bigint = require('big-integer');
var cap = parseInt(process.argv[2]) || 100;
var product = bigint(cap);

for (var x = cap - 1 ; x > 0 ; x--) {
  product = product.multiply(x);
}

console.log(product.toString());

var sum = 0;
for (var x = 0 ; x < product.toString().length ; x++) {
  sum += parseInt(product.toString()[x]);
}


console.log(sum);