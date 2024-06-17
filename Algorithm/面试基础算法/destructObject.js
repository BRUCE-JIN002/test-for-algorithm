const obj = {
  a: 1,
  b: 2,
};

Object.prototype[Symbol.iterator] = function () {
  return Object.values(this)[Symbol.iterator]();
};

const [a, b] = obj;
console.log(a, b); // 1 2
