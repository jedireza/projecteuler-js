var collatz = function(value, chain) {
  //stop if 1
  if (value == 1) {
    return 1;
  }
  //even or odd?
  else if (value % 2 == 0) {
    chain.push(value / 2);
    return collatz(value / 2, chain);
  }
  else {
    chain.push((value * 3) + 1);
    return collatz((value * 3) + 1, chain);
  }
};

var cap = process.argv[2] || 999999;
var longestChain = [];
for (var x = cap ; x > 0 ; x--) {
  var chain = [x];
  collatz(x, chain);
  
  if (chain.length > longestChain.length) {
    longestChain = chain;
  }
  console.log('Collatz`d: '+ x);
}

console.log(longestChain);