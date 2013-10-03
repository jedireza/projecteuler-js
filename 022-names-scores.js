//include modules
var fs = require('fs');

//pull in data and sort
var names = fs.readFileSync('022-names-scores-input.txt', 'utf8').replace(/"/g, '').toLowerCase().split(',');
names.sort();

//create map
var letterMap = {
  a:1, b:2, c:3, d:4, e:5, f:6, g:7, h:8, i:9, j:10, k:11, l:12, m:13, n:14,
  o:15, p:16, q:17, r:18, s:19, t:20, u:21, v:22, w:23, x:24, y:25, z:26
};

//calculate scores
var sum = 0;
for (var x = 0 ; x < names.length ; x++) {
  //find worth
  var worth = 0;
  for (var y = 0 ; y < names[x].length ; y++) {
    worth += letterMap[ names[x][y] ];
  }
  
  //calculate score
  var score = worth * (x + 1);
  
  //add to sum
  sum += score;
}

console.log(names);
console.log(sum);