var areNumbersAscending = function (s) {
  const res = [];
  let max = 0;
  s.split(" ").forEach((item) => {
    if (item == Number(item)) {
      res.push(Number(item));
    }
  });
  for (let i = 0; i < res.length; i++) {
    if (res[i] > max) {
      max = res[i];
    } else {
      return false;
    }
  }
  return max === res[res.length - 1];
};
