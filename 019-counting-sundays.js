//find the number of sundays that land on the first of the month
var sundays = 0;

for (var year = 1901 ; year <= 2000 ; year++) {
  for (var month = 0 ; month < 12 ; month++) {
    if (new Date(year, month, 1).toString().substring(0, 3) == 'Sun') {
      sundays++;
    }
  }
}

console.log('Sundays: '+ sundays);