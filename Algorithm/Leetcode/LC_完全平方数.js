var numSquares = function(n) {
    //完全平方的话直接返回 1
    if (isPerfetSquare(n)) {
        return 1;
    }
    //满足四平方和定理直接返回 4
    if (checkAnswer4(n)) {
        return 4;
    }
    //排除法判断剩余情况
    for (let i = 1; i * i <= n; i++) {
        let j = n - i * i;
        if (isPerfetSquare(j)) {
            return 2;
        }
    }
    return 3;
};

//判断是否为完全平方数
const isPerfetSquare = (x) => {
    const y = Math.floor(Math.sqrt(x));
    return y * y === x;
};

//判断是否能表示为4^k*(8m+7)
const checkAnswer4 = (x) => {
    while (x % 4 == 0) {
        x /= 4;
    }
    return x % 8 == 7;
};