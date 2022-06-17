var countBits = function(n) {
    const res = [];
    for (let i = 0; i <= n; i++) {
        let count = 0;
        let n = i;
        while (n) {
            count++;
            n &= n - 1;
        }
        res.push(count);
    }
    return res;
};