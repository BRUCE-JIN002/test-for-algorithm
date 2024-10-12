//迭代版本
function FibonacciIterative(n) {
  if (n < 1) return 0;
  if (n < 2) return 1;
  let fib1 = 1;
  let fib2 = 0;
  for (let i = 2; i <= n; i++) {
    fibn = fib2 + fib1;
    fib2 = fib1;
    fib1 = fibn;
  }
  return fibn;
}

console.log(FibonacciIterative(10));

//递归版本
function Fibonacci(n) {
  if (n < 1) return 0;
  if (n <= 2) return 1;
  return Fibonacci(n - 1) + Fibonacci(n - 2);
}

console.log(Fibonacci(10));

//使用闭包来缓存相同的计算结果的性能优化
function FibonacciMemorization(n) {
  const memo = [0, 1];
  const fibonacci = (n) => {
    if (memo[n] != null) return memo[n];
    return fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  };
  return fibonacci;
}

const res = FibonacciMemorization()(10);
console.log(res);
