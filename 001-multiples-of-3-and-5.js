//brute force
console.log('------------------');
console.log('Brute Force Method');
console.log('------------------');
var aTimer = process.hrtime();
var sum = 0;
for (var x = 3 ; x < 1000 ; x++) {
  if (x % 3 === 0 || x % 5 === 0) {
    sum += x;
  }
}
console.log('The sum of them is: '+ sum);
//console.log(aTimer);
var aTimerDiff = process.hrtime(aTimer);
var aTimerNano = aTimerDiff[0] * 1e9 + aTimerDiff[1];
console.log('Benchmark took %d nanoseconds.', aTimerNano);

//arithmetic method
console.log('------------------');
console.log('Arithmetic Method');
console.log('------------------');
var bTimer = process.hrtime();
var term3 = 333;
var threes = 3 * term3 * (term3 + 1) / 2;
var term5 = 199;
var fives = 5 * term5 * (term5 + 1) / 2;
var term15 = 66;
var fifteens = 15 * term15 * (term15 + 1) / 2;
console.log('The sum of them is: '+ (threes + fives - fifteens));
//console.log(bTimer);
var bTimerDiff = process.hrtime(bTimer);
var bTimerNano = bTimerDiff[0] * 1e9 + bTimerDiff[1];
console.log('Benchmark took %d nanoseconds.', bTimerNano);

console.log('------------------');
console.log('Which is Faster');
console.log('------------------');
if (bTimerNano > aTimerNano) {
  console.log('A is %d nanoseconds faster than B.', bTimerNano - aTimerNano)
}
else {
  console.log('B is %d nanoseconds faster than A.', aTimerNano - bTimerNano)
}