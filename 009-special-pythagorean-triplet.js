var pythagorean = function() {
  for (var x = 1 ; x < 1000 ; x++) {
    for (var y = 1 ; y < 1000 ; y++) {
      for (var z = 1 ; z < 1000 ; z++) {
        var a = x * x;
        var b = y * y;
        var c = z * z;
        if (a + b === c && Math.sqrt(a) + Math.sqrt(b) + Math.sqrt(c) === 1000) {
          console.log('a = '+ a);
          console.log('b = '+ b);
          console.log('c = '+ c);
          console.log('p = '+ (Math.sqrt(a) * Math.sqrt(b) * Math.sqrt(c)));
          console.log();
          return;
        }
      }
    }
  }
};

pythagorean();