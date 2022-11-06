const isPrime = (x) => {
    if (x < 2) return false;
    for (let i = 2; i * i <= x; i++) {
        if (x % i === 0) {
            return false;
        }
    }
    return true;
}

var primeNumbers = (n) => {
    let count = [];
    let cnt = 0;
    for (let i = 0; i < n; i++) {
        if (isPrime(i)) {
            cnt++;
            count[i] = cnt;
        } else {
            count[i] = cnt;
        }
    }
    return count[n - 1];
}



var countPrimes = function(n) {
    if (n < 2) return 0;
    return primeNumbers(n);
};

console.log(countPrimes(10));
// console.log(countPrimes(10));
// console.log(primeNumbers(10));


var countPrimes = function(n) {
    if (n < 2) return 0;
    let record = [];
    for (let i = 0; i < n; i++) {
        record[i] = 1;
    }
    let sum = 0;
    for (let i = 2; i < n; i++) {
        if (record[i]) {
            sum++;
            for (let j = i * 2; j < n; j += i) {
                record[i] = 0;
            }
        }
    }
    return sum;
}