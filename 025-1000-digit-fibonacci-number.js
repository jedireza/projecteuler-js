var bigint = require('big-integer');

//sum of even fibonacci numbers under 4mm
var prev = [0, 1];
var fibo = 1;
var term = 1;

while (true) {
  //create a fibonacci
  fibo = bigint(prev[0]).add(prev[1]);
  term++;
  
  //don't go past the stop point
  if (fibo.toString().length >= 1000) {
    console.log();
    console.log(term +') ['+ fibo.toString().length +'] '+ fibo.toString());
    break;
  }
  
  //set prev values
  prev[0] = prev[1].toString();
  prev[1] = fibo.toString();
}
