function uniteUnique(arr, ...rest) {
  const result = rest.reduce((acc, cur) => acc.concat(cur), [...arr]);
  return [...new Set(result)];
}

const res = uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
console.log(res);
