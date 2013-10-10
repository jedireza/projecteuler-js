var bigint = require('big-integer');
var results = {};
for (var a = 2 ; a <= 100 ; a++) {
  for (var b = 2 ; b <= 100 ; b++) {
    var result = bigint(a).pow(b);
    results[result.toString()] = true;
  }
}
console.log(Object.keys(results).length);
