var binaryGap = function(n) {
    let last = -1,
        max = 0;
    for (let i = 0; n != 0; i++) {
        if (n & 1) {
            if (last !== -1) {
                max = Math.max(max, i - last);
            }
            last = i;
        }
        n >>= 1;
    }
    return max;
};

binaryGap(8);