//input
var height = parseInt(process.argv[2]) || 21;
var width = parseInt(process.argv[3]) || 21;

//setup the grid
var grid = (function(height, width) {
  var counter = 1;
  var grid = [];
  for (var y = 0 ; y < height ; y++) {
    grid[y] = [];
    for (var x = 0 ; x < width ; x++) {
      grid[y][x] = 0;
      counter++;
    }
  }
  return grid;
})(height, width);

//lattice function
var lattice = function(y, x) {
  var count = 0;
  
  //alread figured out?
  if (grid[y][x] !== 0) {
    count = grid[y][x];
  }
  else {
    //at the finish line
    if (y === 0 && x === 0) {
      count = 1;
    }
    
    //can we move up and left?
    if(y > 0) {
      count += lattice(y - 1, x);
    }
    if(x > 0) {
      count += lattice(y, x - 1);
    }
    
    //store the count
    grid[y][x] = count;
  }
  
  return count;
};

//run the lattice
lattice(height - 1, width - 1);

console.log(grid[height - 1][width - 1]);