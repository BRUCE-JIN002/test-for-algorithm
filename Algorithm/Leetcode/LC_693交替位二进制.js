var hasAlternatingBits = function(n) {
    let pre;
    while (n) {
        cur = n % 2;
        if (pre === cur) {
            return false;
        }
        pre = cur;
        n = Math.floor(n / 2);
    }
    return true;
};

console.log(hasAlternatingBits(11));