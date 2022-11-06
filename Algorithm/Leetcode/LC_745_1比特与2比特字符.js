var isOneBitCharacter = function(bits) {
    let i = 0;
    let n = bits.length;
    while (i < n - 1) {
        i += bits[i] + 1;
    }
    return i === n - 1;
};