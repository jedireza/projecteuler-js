//create triangulars
var triangulars = [];
for (var x = 12300 ; x < 12500 ; x++) {
  var triangular = (x * (x + 1)) / 2;
  triangulars.push([triangular, [], 0, x]);
}

//find divisors
for (var x = 0 ; x < triangulars.length ; x++) {
  //always divisible by 1
  triangulars[x][1].push(1);
  
  //divisor testing
  for (var y = 2 ; y <= triangulars[x][0] ; y++) {
    if (triangulars[x][0] % y === 0) {
      triangulars[x][1].push(y);
    }
  }
  
  //save divisor count
  triangulars[x][2] = triangulars[x][1].length;
  
  console.log('Found divisors...'+ triangulars[x][1].length +' for '+ triangulars[x][0] +' which was the triangular of '+ triangulars[x][3]);
  
  if (triangulars[x][1].length > 500) {
    console.log('First triangular with over 500 divisors:');
    console.log(triangulars[x]);
    break;
  }
}
