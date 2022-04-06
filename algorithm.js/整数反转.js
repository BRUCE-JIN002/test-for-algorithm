var reverse = function(x) {
    let res = 0;
    while (x !== 0) {
        let rest = x % 10;
        res += rest;
        res = res * 10 + rest;
        x /= 10;
    }
    return res;
};

console.log(reverse(234));