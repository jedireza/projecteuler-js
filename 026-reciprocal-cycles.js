var maxCycleFinder = function(input) {
  var results = [];
  for (var x = 0 ; x < input.length ; x++) {
    results.push(cycleProcessor(input.slice(x)));
  }
  
  var maxCycle = 0;
  results.forEach(function(size) {
    if (size > maxCycle) {
      maxCycle = size;
    }
  });
  
  return maxCycle;
};

var cycleProcessor = function(input) {
  var match = undefined;
  for (var x = 1 ; x < input.length ; x++) {
    var piece1 = input.slice(0, x);
    var piece2 = input.slice(x, piece1.length + x);
    if (piece1 === piece2) {
      if (piece1[0] !== '0' && piece1.indexOf(match) === -1) {
        match = piece1;
      }
    }
  }
  return match ? match.length : 0;
};

var bigint = require('big-integer');
var precision = '0';
for (var i = 1 ; i <= 2700 ; i++) {
  precision += '0';
}
var start = bigint('1' + precision);
var largestCycleFound = {
  denominator: undefined,
  source: '',
  count: 0
};
for (var i = 500 ; i < 1000 ; i++) {
  var source = start.divide(i).toString();
  var maxCyclesFound = maxCycleFinder(source);
  if (maxCyclesFound > largestCycleFound.count) {
    largestCycleFound.denominator = i;
    largestCycleFound.source = '0.'+ source;
    largestCycleFound.count = maxCyclesFound;
  }
}
console.log(largestCycleFound);
