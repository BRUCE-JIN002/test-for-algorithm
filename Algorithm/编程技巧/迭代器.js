const myIterableObj = {
  a: 1,
  b: 2,
  c: 3
};

myIterableObj[Symbol.iterator] = function () {
  let self = this;
  let index = 0;
  let keys = Object.keys(self);
  return {
    next: function () {
      if (index < keys.length) {
        return {
          value: self[keys[index++]],
          done: false
        };
      } else {
        return { value: undefined, done: true };
      }
    }
  };
};

for (let value of myIterableObj) {
  console.log(value);
}
