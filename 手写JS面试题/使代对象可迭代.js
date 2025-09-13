const obj = {
  a: 1,
  b: "hello",
  c: () => {},
};

obj[Symbol.iterator] = function* () {
  for (let key of Object.keys(this)) {
    yield [key, this[key]];
  }
};

// 使用 for...of 遍历对象
for (let [key, value] of obj) {
  console.log(key, value);
}
