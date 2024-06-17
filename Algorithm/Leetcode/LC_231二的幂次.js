var isPowerOfTwo = function (n) {
  return n > 0 && (n & (n - 1)) === 0;
};

for (let i = 1; i < 10; i++) {
  let num = Math.pow(2, i);
  console.log(num.toString(2), (num - 1).toString(2), num & (num - 1));
}
