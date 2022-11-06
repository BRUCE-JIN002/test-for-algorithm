var checkPerfectNumber = function(num) {
    if (isPrime(num)) {
        return false;
    }
    let sum = 0;
    let len = Math.floor(num / 2);
    for (let i = 1; i <= len; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }
    return sum === num;
};

const isPrime = (n) => {
    if (n < 2) {
        return true;
    }
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
};