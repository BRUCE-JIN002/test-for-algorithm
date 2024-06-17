var smallestEvenMultiple = function (n) {
  if (n % 2 == 0) return n;
  let max = 2 * n;
  for (let i = n + 1; i <= max; i++) {
    if (i % n == 0 && i % 2 == 0) return i;
  }
};

console.log(smallestEvenMultiple(5));
