var digit = process.argv[2] || 1000;

var mapDigits = {
  ones: ['','one','two','three','four','five','six','seven','eight','nine'],
  tens: ['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'],
  teens: ['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteem','seventeen','eighteen','nineteen'],

};

var numberToString = function(input) {
  if (input > 1000000) {
    return numberToString(Math.floor(input / 1000000)) +' million '+ numberToString(input % 1000000);
  }
  else if(input >= 1000) {
    return numberToString(Math.floor(input / 1000)) +' thousand '+ numberToString(input % 1000);
  }
  else if (input > 99) {
    var remainder = numberToString(input % 100);
    return numberToString(Math.floor(input / 100)) +' hundred '+ (remainder === '' ? '' : 'and '+ remainder);
  }
  else {
    if (input < 10) {
      return mapDigits.ones[input];
    }
    else if (input >= 10 && input < 20) {
      return mapDigits.teens[input - 10];
    }
    else {
      return mapDigits.tens[Math.floor(input / 10)] +' '+ mapDigits.ones[input % 10];
    }
  }
  
  return mapDigits[input];
};

var strings = [];
for (var x = digit ; x > 0 ; x--) {
  strings.push(numberToString(x));
}

console.log(strings.join('').replace(/\s/g, '').length);