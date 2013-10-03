var used = [];
var counter = 1;

var permute = function(input) {
  for (var x = 0 ; x < input.length ; x++) {
    var item = input.splice(x, 1)[0];
    used.push(item);
    if (input.length === 0) {
      if (counter === 1000000) {
        console.log(counter +') '+ used.slice().join(''));
        console.log(used);
        process.exit(1);
      }
      counter++;
    }
    permute(input);
    input.splice(x, 0, item);
    used.pop();
  }
};

permute([0,1,2,3,4,5,6,7,8,9]);