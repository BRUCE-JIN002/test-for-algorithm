var plusOne = function(digits) {
    let len = digits.length;
    digits[len - 1] += 1;
    for (let i = len - 1; i > 0; i--) {
        if (digits[i] > 9) {
            digits[i] %= 10;
            digits[i - 1] += 1;
        }
    }
    if (digits[0] > 9) {
        digits[0] = digits[0] % 10;
        digits.unshift(1);
    }
    return digits;
};


arr = [0];
console.log(plusOne(arr));