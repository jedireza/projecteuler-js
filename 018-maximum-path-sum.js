//include modules
var fs = require('fs');

//setup the tree
var tree = fs.readFileSync('018-maximum-path-sum-input.txt', 'utf8').split('\n');
for (var x = 0 ; x < tree.length ; x++) {
  tree[x] = tree[x].split(' ');
  for (var y = 0 ; y < tree[x].length ; y++) {
    tree[x][y] = parseInt(tree[x][y]);
  }
};

//reduce the tree
for (var x = tree.length - 2 ; x >= 0 ; x--) {
  for (var y = 0 ; y < tree[x].length ; y++) {
    if (tree[x][y] + tree[x + 1][y] > tree[x][y] + tree[x + 1][y + 1]) {
      tree[x][y] = tree[x][y] + tree[x + 1][y];
    }
    else {
      tree[x][y] = tree[x][y] + tree[x + 1][y + 1];
    }
    
    //console.log(tree);
  }
}

console.log('Max Sum: '+ tree[0]);