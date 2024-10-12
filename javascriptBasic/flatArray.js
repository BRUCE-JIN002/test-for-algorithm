function flatArray(arr) {
  const stack = [...arr];
  const res = [];
  while (stack.length) {
    let next = stack.pop();
    if (Array.isArray(next)) {
      stack.push(...next);
    } else {
      res.push(next);
    }
  }
  return res;
}

const arr = [1, 2, 3, [4, 5, 6, [7, 8, 9, [10, 11, 12, [13, 14, 15]]]]];
console.log(flatArray(arr));

const arr1 = [
  1,
  2,
  3,
  [4, 5, 6, [7, 8, 9, [10, 11, 12, [13, 14, 15], 16, 17, 18]]]
];
console.log(flatArray(arr1));
