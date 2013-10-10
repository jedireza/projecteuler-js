var result = 1;
for (var i = 1001 ; i > 2 ; i -= 2) {
  var tr = Math.pow(i, 2);
  var tl = tr - (i - 1);
  var bl = tl - (i - 1);
  var br = bl - (i - 1);
  result += tr + tl + bl + br;
}
console.log(result);
