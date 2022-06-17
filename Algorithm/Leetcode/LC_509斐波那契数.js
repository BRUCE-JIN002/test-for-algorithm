var fib = function(n) {
    let ans = new Array(35).fill(0);
    ans[0] = 0;
    ans[1] = 1;
    for (let i = 2; i < 31; i++) {
        ans[i] = ans[i - 1] + ans[i - 2];
    }
    return ans[n];
};

console.log(fib(3));