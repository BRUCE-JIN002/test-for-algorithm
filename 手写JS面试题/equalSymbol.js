const a = {
  count: 1,
  [Symbol.toPrimitive]: () => {
    return this.count++;
  },
  valueOf() {
    return this.count++;
  },
  toString() {
    return this.count++;
  }
};

if (a == 1 && a == 2 && a == 3 && a == 4) {
  console.log("你牛逼！");
}
