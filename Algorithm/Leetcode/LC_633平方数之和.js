var judgeSquareSum = function(c) {
    let n = Math.floor(Math.sqrt(c));
    flag = false;
    for (let i = 0; i <= n; i++) {
        let x = Math.floor(Math.sqrt(c - i * i));
        if (x * x === c - i * i) {
            flag = true;
            break;
        }
    }
    return flag;
};
console.log(judgeSquareSum(4));