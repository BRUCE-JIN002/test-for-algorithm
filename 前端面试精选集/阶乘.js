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

//递归版
function factorial(n) {
  if (n === 1 || n === 0) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5));

//尾递归版
function factorialTail(n, total = 1) {
  if (n === 0) return total;
  return factorialTail(n - 1, n * total);
}

console.log(factorialTail(5));
