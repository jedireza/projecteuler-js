var isPalindrome = function(value) {
  for (var x = 0 ; x < (value.length / 2) ; x++) {
    if (value[x] !== value[(value.length - 1) - x]) {
      return false;
    }
  }
  
  return true;
};

var largestPalindrome = function() {
  var palindromes = [];
  for (var x = 100 ; x < 1000 ; x++) {
    for (var y = 100 ; y < 1000 ; y++) {
      if (isPalindrome( (x * y).toString() )) {
        palindromes.push(x * y);
      }
    }
  }
  
  return palindromes.sort(function(a, b) {
    return b - a;
  })[0];
};

console.log(largestPalindrome());