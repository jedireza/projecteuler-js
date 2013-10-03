var sumOfSquares = 0;
var squareOfSums = 0;

for (var x = 1 ; x < 101 ; x++) {
  sumOfSquares += x * x;
  squareOfSums += x;
}

squareOfSums *= squareOfSums;

console.log('Sum of squares: '+ sumOfSquares);
console.log('Square of sums: '+ squareOfSums);
console.log('Diff: '+ (squareOfSums - sumOfSquares));