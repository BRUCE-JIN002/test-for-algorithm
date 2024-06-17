const fib = function (n) {
  let a = 0;
  let b = 1;
  let c;
  if (n <= 1) return n;
  for (let i = 2; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  return c;
};

console.log(fib(10));

const finacci = (n) => {
  if (n < 2) return n;
  return finacci(n - 1) + finacci(n - 2);
};

console.log(finacci(10));

const fib2 = (n) => {
  const dp = [0, 1];
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};

const helper = (memo, n) => {
  if (n <= 1) return n;
  if (memo[n]) {
    return memo[n];
  }
  memo[n] = helper(memo, n - 1) + helper(memo, n - 2);
  return memo[n];
};

const fibs = (n) => {
  let memo = [];
  return helper(memo, n);
};

console.log(fibs(10));
