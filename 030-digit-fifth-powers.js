var result = 0;
for (var i = 2 ; i < 1000000 ; i++) {
  var parts = i.toString().split('');
  var partsSum = 0;
  parts.forEach(function(num){
    partsSum += Math.pow(parseInt(num), 5);
  });
  if (partsSum === i) {
    result += i;
  }
}
console.log(result);
