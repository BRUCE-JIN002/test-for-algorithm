function currying(fn, ...args) {
  return function (...rest) {
    const allArgs = [...args, ...rest];
    return allArgs.length >= fn.length
      ? fn.apply(this, allArgs)
      : currying(fn, ...allArgs);
  };
}

const sum = (a, b, c, d) => a + b + c + d;
const surriedSum = currying(sum);
console.log(surriedSum(1)(2)(3)(4));
console.log(surriedSum(1)(2, 3, 4));
console.log(surriedSum(1, 2)(3)(4));
console.log(surriedSum(1, 2, 3)(4));
