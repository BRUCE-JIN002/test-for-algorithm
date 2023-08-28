function steamrollArray(arr) {
  if (Array.isArray(arr)) {
    return arr.reduce((acc, val) => acc.concat(steamrollArray(val)), []);
  }
  return [arr];
}

steamrollArray([1, [2], [3, [[4]]]]);
