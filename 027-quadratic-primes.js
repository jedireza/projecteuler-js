function isPrime(number) {
    var start = 2;
    while (start <= Math.sqrt(number)) {
        if (number % start++ < 1) return false;
    }
    return number<=1 ? false : true;
}

var largestConsecutivePrimeCount = {
    n: 0,
    a: 0,
    b: 0,
    count: 0
};

for (var a = -999 ; a < 1000 ; a++) {
    for (var b = -999 ; b < 1000 ; b++) {
        var n = 0;
        var consecutivePrimeCount = 0;
        
        while (true) {
            var result = (n * n) + (a * n) + b;
            if (isPrime(result)) {
                consecutivePrimeCount += 1;
                n += 1;
            }
            else {
                break;
            }
        }
        
        if (consecutivePrimeCount > largestConsecutivePrimeCount.count) {
            largestConsecutivePrimeCount.n = n;
            largestConsecutivePrimeCount.a = a;
            largestConsecutivePrimeCount.b = b;
            largestConsecutivePrimeCount.count = consecutivePrimeCount;
            process.stdout.write('*');
        }
    }
}

console.log(largestConsecutivePrimeCount);
