//迭代版
function factorialIterative(n) {
    if (n < 0) return undefined;
    let total = 1;
    for (let i = n; i > 1; i--) {
        total = total * i;
    }
    return total;
}

let res = factorialIterative(5);
console.log(res);

//迭代版
function factorial(n) {
    if (n === 1 || n === 0) return 1;
    return n * factorial(n - 1);
}

console.log(factorial(5));