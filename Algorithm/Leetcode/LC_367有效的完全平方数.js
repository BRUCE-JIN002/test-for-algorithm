var isPerfectSquare1 = function(num) {
    let x = Math.floor(Math.sqrt(num));
    return x * x === num;
};

//原理:(n+1)^2-n^2=2n+1
var isPerfectSquare = function(num) {
    let num1 = 1;
    while (num > 0) {
        num -= num1;
        num1 += 2;
    }
    return num === 0;
};