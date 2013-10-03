//sum of even fibonacci numbers under 4mm
var aTimer = process.hrtime();
var prev = [1, 1];
var evenSum = 0;
var fibo = 0;
while (true) {
  //don't go past the stop point
  if (prev[0] + prev[1] >= 4000000) break;
  
  //create a fibonacci
  fibo = prev[0] + prev[1];
  
  //add up the even fibonacci numbers
  if (fibo % 2 == 0) evenSum += fibo;
  
  //set prev values
  prev[0] = prev[1];
  prev[1] = fibo;
}
var aTimerDiff = process.hrtime(aTimer);
var aTimerNano = aTimerDiff[0] * 1e9 + aTimerDiff[1];
console.log('The sum is: '+ evenSum);
console.log('Benchmark took %d nanoseconds.', aTimerNano);