function dropElements(arr, func) {
  // Drop them elements.
  while (arr.length > 0 && !func(arr[0])) {
    arr.shift();
  }
  return arr;
}

const res = dropElements([1, 2, 3, 7, 4], function (n) {
  return n > 3;
});

console.log(res);
